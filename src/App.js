import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentProfile from "./pages/StudentProfile";
import TeacherProfile from "./pages/TeacherProfile";
import UploadResult from "./pages/UploadResult";
import ViewResult from "./pages/ResultView";
import Notices from "./pages/Notices";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import { useState } from "react"; // Import useState

// Import Sidebar

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div>
        <nav
          style={{
            height: "60px",
            backgroundColor: "#2980b9",
            padding: "10px",
            color: "white",
          }}
        >
          <h2>Result </h2>
        </nav>

        {/* Toggle Button below navbar */}
        <button className="toggle-button" onClick={toggleSidebar}>
          {isSidebarOpen ? "Hide Menu" : "Show Menu"}
        </button>

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className={`main-content ${isSidebarOpen ? "" : "full-width"}`}>
          {/* Add your main content here */}
        </div>

        <div style={{ display: "flex" }}>
          <Sidebar /> {/* Sidebar always visible on the left */}
          <div style={{ flex: 1, padding: "20px" }}>
            <nav
              style={{
                padding: "10px",
                backgroundColor: "#eee",
                marginBottom: "20px",
              }}
            >
              <Link to="/" style={{ marginRight: "10px" }}>
                Home
              </Link>
              <Link to="/student-profile" style={{ marginRight: "10px" }}>
                Student Profile
              </Link>
              <Link to="/teacher-profile" style={{ marginRight: "10px" }}>
                Teacher Profile
              </Link>
              <Link to="/upload-result" style={{ marginRight: "10px" }}>
                Upload Result
              </Link>
              <Link to="/view-result" style={{ marginRight: "10px" }}>
                View Result
              </Link>
              <Link to="/notices" style={{ marginRight: "10px" }}>
                Notices
              </Link>
              <Link to="/calendar" style={{ marginRight: "10px" }}>
                Calendar
              </Link>
              <Link to="/dashboard" style={{ marginRight: "10px" }}>
                Dashboard
              </Link>
              <Link to="/settings" style={{ marginRight: "10px" }}>
                Settings
              </Link>
              <Link to="/feedback" style={{ marginRight: "10px" }}>
                Feedback
              </Link>
              <Link to="/contact" style={{ marginRight: "10px" }}>
                Contact
              </Link>
              <Link to="/about" style={{ marginRight: "10px" }}>
                About
              </Link>
              <Link to="/login" style={{ marginRight: "10px" }}>
                Login
              </Link>
              <Link to="/register" style={{ marginRight: "10px" }}>
                Register
              </Link>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/student-profile" element={<StudentProfile />} />
              <Route path="/teacher-profile" element={<TeacherProfile />} />
              <Route path="/upload-result" element={<UploadResult />} />
              <Route path="/view-result" element={<ViewResult />} />
              <Route path="/notices" element={<Notices />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
