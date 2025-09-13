 import { useState } from "react";
 import { users } from "../data/dummyData";
 import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

 export default Login;
// function Login() {
//   return (
//     <div style={{ backgroundColor: "#e9ecef", padding: "50px 0" }}>
//       <div className="container">
//         <div className="card">
//           <h2 className="page-title">Login</h2>
//           <form>
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <button>Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
