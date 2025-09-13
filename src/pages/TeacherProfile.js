import { useState, useEffect } from "react";
import { users } from "../data/dummyData";

function TeacherProfile() {
  const [teacher, setTeacher] = useState(null);
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [subject, setSubject] = useState("");
  const [mark, setMark] = useState("");

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("user"));
    if (loggedIn?.role === "teacher") {
      setTeacher(loggedIn);
    }

    // Fetch all students
    const studentList = users.filter((u) => u.role === "student");
    setStudents(studentList);
  }, []);

  const handleUpdateMark = () => {
    if (!selectedStudentId || !subject || !mark) {
      alert("Please fill all fields.");
      return;
    }

    // Update the student's marks manually (local only)
    const updatedStudents = students.map((student) => {
      if (student.id === parseInt(selectedStudentId)) {
        return {
          ...student,
          grades: {
            ...student.grades,
            [subject]: parseInt(mark)
          }
        };
      }
      return student;
    });

    setStudents(updatedStudents);
    alert("Marks updated locally!");

    // Clear form
    setSubject("");
    setMark("");
    setSelectedStudentId(null);
  };

  if (!teacher) return <p>Not authorized!</p>;

  return (
    <div>
      <h2>Teacher Profile</h2>
      <p>Username: {teacher.username}</p>

      <h3>Manage Students</h3>
      <div>
        <select onChange={(e) => setSelectedStudentId(e.target.value)} value={selectedStudentId || ""}>
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.username} ({student.class})
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="number"
          placeholder="Mark"
          value={mark}
          onChange={(e) => setMark(e.target.value)}
        />
        <button onClick={handleUpdateMark}>Update Marks</button>
      </div>

      <h3>Student List</h3>
      {students.map((student) => (
        <div key={student.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p>Name: {student.username}</p>
          <p>Class: {student.class}</p>
          <p>Grades:</p>
          <ul>
            {student.grades && Object.keys(student.grades).map((subj) => (
              <li key={subj}>
                {subj}: {student.grades[subj]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TeacherProfile;
