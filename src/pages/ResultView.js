import { useState, useEffect } from "react";
import { users } from "../data/dummyData";

function ResultView() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("user"));
    if (loggedIn?.role === "student") {
      const studentDetails = users.find((u) => u.id === loggedIn.id);
      setStudent(studentDetails);
    }
  }, []);

  if (!student) return <p>Not authorized or no data found!</p>;

  return (
    <div>
      <h2>View Results</h2>
      <p>Student: {student.username}</p>
      <p>Class: {student.class}</p>

      <h3>Marks/Grades:</h3>
      {student.grades && Object.keys(student.grades).length > 0 ? (
        <ul>
          {Object.keys(student.grades).map((subject, index) => (
            <li key={index}>
              {subject}: {student.grades[subject]}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results uploaded yet.</p>
      )}
    </div>
  );
}

export default ResultView;
