// import { useState, useEffect } from "react";
// import { users } from "../data/dummyData";

// function ResultUpload() {
//   const [teacher, setTeacher] = useState(null);
//   const [students, setStudents] = useState([]);
//   const [selectedStudentId, setSelectedStudentId] = useState("");
//   const [subject, setSubject] = useState("");
//   const [mark, setMark] = useState("");
//   const [uploadedResults, setUploadedResults] = useState([]);

//   useEffect(() => {
//     const loggedIn = JSON.parse(localStorage.getItem("user"));
//     if (loggedIn?.role === "teacher") {
//       setTeacher(loggedIn);
//     }

//     // Load students only
//     const studentList = users.filter((u) => u.role === "student");
//     setStudents(studentList);
//   }, []);

//   const handleUpload = () => {
//     if (!selectedStudentId || !subject || !mark) {
//       alert("Fill all fields!");
//       return;
//     }

//     const selectedStudent = students.find((s) => s.id === parseInt(selectedStudentId));

//     const newResult = {
//       studentId: selectedStudent.id,
//       studentName: selectedStudent.username,
//       subject,
//       mark: parseInt(mark)
//     };

//     setUploadedResults([...uploadedResults, newResult]);

//     // Clear form
//     setSelectedStudentId("");
//     setSubject("");
//     setMark("");
//   };

//   if (!teacher) return <p>Not authorized!</p>;

//   return (
//     <div>
//       <h2>Result Upload</h2>

//       <div style={{ marginBottom: "20px" }}>
//         <select onChange={(e) => setSelectedStudentId(e.target.value)} value={selectedStudentId}>
//           <option value="">Select Student</option>
//           {students.map((student) => (
//             <option key={student.id} value={student.id}>
//               {student.username} ({student.class})
//             </option>
//           ))}
//         </select>

//         <input
//           type="text"
//           placeholder="Subject"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//           style={{ marginLeft: "10px" }}
//         />
//         <input
//           type="number"
//           placeholder="Marks"
//           value={mark}
//           onChange={(e) => setMark(e.target.value)}
//           style={{ marginLeft: "10px" }}
//         />

//         <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
//           Upload
//         </button>
//       </div>

//       <h3>Uploaded Results</h3>
//       {uploadedResults.length === 0 ? (
//         <p>No results uploaded yet.</p>
//       ) : (
//         uploadedResults.map((res, index) => (
//           <div key={index} style={{ border: "1px solid gray", marginBottom: "10px", padding: "10px" }}>
//             <p>Student: {res.studentName}</p>
//             <p>Subject: {res.subject}</p>
//             <p>Marks: {res.mark}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default ResultUpload;





import { useState } from "react";
import "./UploadResult.css"; // Create this file for styling the page

const UploadResult = () => {
  const [studentId, setStudentId] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate the upload process by storing the data in the state
    if (studentId && subject && marks) {
      setMessage(`Result for student ${studentId} in ${subject} uploaded successfully!`);
      // Clear form fields
      setStudentId("");
      setSubject("");
      setMarks("");
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="upload-result-page">
      <div className="container">
        <h2>Upload Student Results</h2>
        <form onSubmit={handleSubmit} className="upload-result-form">
          <div className="form-group">
            <label>Student ID</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter student ID"
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
            />
          </div>
          <div className="form-group">
            <label>Marks</label>
            <input
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              placeholder="Enter marks"
            />
          </div>
          <button type="submit">Upload Result</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default UploadResult;
