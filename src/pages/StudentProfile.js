// import { useEffect, useState } from "react";
// import { users } from "../data/dummyData";

// function StudentProfile() {
//   const [student, setStudent] = useState(null);

//   useEffect(() => {
//     const loggedIn = JSON.parse(localStorage.getItem("user"));
//     if (loggedIn?.role === "student") {
//       const details = users.find((u) => u.id === loggedIn.id);
//       setStudent(details);
//     }
//   }, []);

//   if (!student) return <p>Not authorized!</p>;

//   return (
//     <div>
//       <h2>Student Profile</h2>
//       <p>Username: {student.username}</p>
//       <p>Class: {student.class}</p>
//       <h3>Grades:</h3>
//       {Object.keys(student.grades).map((subject) => (
//         <p key={subject}>{subject}: {student.grades[subject]}</p>
//       ))}
//     </div>
//   );
// }

// export default StudentProfile;




import React, { useState } from "react";
import "./StudentProfile.css"; // Create this file for styling the page

const StudentProfile = () => {
  // Simulating a student profile with mock data
  const [student] = useState({
    name: "John Doe",
    rollNumber: "12345",
    class: "10th Grade",
    subject: "Mathematics",
    grades: {
      semester1: "A",
      semester2: "B+",
      semester3: "A-",
    },
  });

  return (
    <div className="student-profile-page">
      <div className="container">
        <h2>Student Profile</h2>
        <div className="profile-details">
          <h3>{student.name}</h3>
          <p><strong>Roll Number:</strong> {student.rollNumber}</p>
          <p><strong>Class:</strong> {student.class}</p>
          <p><strong>Subject:</strong> {student.subject}</p>
          <div className="grades">
            <h4>Grades:</h4>
            <ul>
              <li><strong>Semester 1:</strong> {student.grades.semester1}</li>
              <li><strong>Semester 2:</strong> {student.grades.semester2}</li>
              <li><strong>Semester 3:</strong> {student.grades.semester3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
