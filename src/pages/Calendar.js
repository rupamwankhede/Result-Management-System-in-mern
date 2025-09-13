import { useState, useEffect } from "react";

function Calendar() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("user"));
    if (loggedIn) {
      setUser(loggedIn);
    }
  }, []);

  const handleAddEvent = () => {
    if (!eventName.trim() || !eventDate) {
      alert("Please fill all fields!");
      return;
    }

    const newEvent = {
      name: eventName,
      date: eventDate
    };

    setEvents([...events, newEvent]);
    setEventName("");
    setEventDate("");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Calendar & Events</h2>

      {/* Only Admin can create events */}
      {user.role === "admin" && (
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
      )}

      <h3>Upcoming Events</h3>
      {events.length === 0 ? (
        <p>No events scheduled yet.</p>
      ) : (
        events.map((event, index) => (
          <div key={index} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <p><strong>{event.name}</strong></p>
            <small>Scheduled for: {new Date(event.date).toDateString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default Calendar;
