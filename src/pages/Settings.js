import { useState, useEffect } from "react";

function Settings() {
  const [user, setUser] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("user"));
    if (loggedIn) {
      setUser(loggedIn);
      setNewUsername(loggedIn.username);
    }
  }, []);

  const handleSaveChanges = () => {
    if (!newUsername.trim() || !newPassword.trim()) {
      alert("Both fields are required!");
      return;
    }

    const updatedUser = {
      ...user,
      username: newUsername,
      password: newPassword
    };

    // Save updated user to localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert("Profile updated successfully!");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Settings & Security</h2>

      <div style={{ marginTop: "20px", maxWidth: "400px" }}>
        <label>New Username:</label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "20px" }}
        />

        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;
