import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("user"));
//     if (!loggedInUser) {
//       navigate("/login");
//     } else {
//       setUser(loggedInUser);
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {user && (
//         <div>
//           <h3>Welcome, {user.username} ({user.role})</h3>
//           {user.role === "admin" && <p>Admin Controls</p>}
//           {user.role === "student" && <p>Student Area</p>}
//           {user.role === "teacher" && <p>Teacher Panel</p>}
//         </div>
//       )}
//     </div>
//   );
// }

//export default Dashboard;
//
//import { useState, useEffect } from "react";
import { users } from "../data/dummyData";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    averageMarks: 0,
  });

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("user"));
    if (loggedIn?.role === "admin") {
      setUser(loggedIn);

      const students = users.filter((u) => u.role === "student");
      const teachers = users.filter((u) => u.role === "teacher");

      // Calculate total marks and number of subjects
      let totalMarks = 0;
      let totalSubjects = 0;

      students.forEach((student) => {
        if (student.grades) {
          Object.values(student.grades).forEach((mark) => {
            totalMarks += mark;
            totalSubjects += 1;
          });
        }
      });

      const avgMarks = totalSubjects ? (totalMarks / totalSubjects).toFixed(2) : 0;

      setStats({
        totalStudents: students.length,
        totalTeachers: teachers.length,
        averageMarks: avgMarks,
      });
    }
  }, []);

  if (!user) return <p>Not authorized!</p>;

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ border: "1px solid gray", padding: "20px", width: "200px", borderRadius: "8px" }}>
          <h3>Total Students</h3>
          <p>{stats.totalStudents}</p>
        </div>

        <div style={{ border: "1px solid gray", padding: "20px", width: "200px", borderRadius: "8px" }}>
          <h3>Total Teachers</h3>
          <p>{stats.totalTeachers}</p>
        </div>

        <div style={{ border: "1px solid gray", padding: "20px", width: "200px", borderRadius: "8px" }}>
          <h3>Average Marks</h3>
          <p>{stats.averageMarks}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
