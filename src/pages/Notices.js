import { useState, useEffect } from "react";

function Notices() {
  const [user, setUser] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [newNotice, setNewNotice] = useState("");

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("user"));
    if (loggedIn) {
      setUser(loggedIn);
    }
  }, []);

  const handleAddNotice = () => {
    if (!newNotice.trim()) {
      alert("Notice cannot be empty!");
      return;
    }

    const newEntry = {
      text: newNotice,
      date: new Date().toLocaleString()
    };

    setAnnouncements([...announcements, newEntry]);
    setNewNotice("");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Notices & Announcements</h2>

      {/* Only Admin can post */}
      {user.role === "admin" && (
        <div style={{ marginBottom: "20px" }}>
          <textarea
            value={newNotice}
            onChange={(e) => setNewNotice(e.target.value)}
            placeholder="Write a new announcement..."
            rows={4}
            style={{ width: "100%" }}
          />
          <button onClick={handleAddNotice} style={{ marginTop: "10px" }}>
            Post Announcement
          </button>
        </div>
      )}

      <h3>All Announcements:</h3>
      {announcements.length === 0 ? (
        <p>No announcements yet.</p>
      ) : (
        announcements.map((notice, index) => (
          <div key={index} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <p>{notice.text}</p>
            <small>Posted at: {notice.date}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default Notices;
