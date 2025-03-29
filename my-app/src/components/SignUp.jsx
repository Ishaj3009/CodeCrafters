// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SignUp.css"

// function SignUp() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User signed up:", formData);
//     navigate("/artisans"); // Redirecting after signup
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; // Import styles

function SignInSignUp() {
  const navigate = useNavigate();

  // Dummy database (Replace with backend API in real use)
  const [users, setUsers] = useState([{ email: "test@example.com", password: "123456" }]);

  // State for user input
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isNewUser, setIsNewUser] = useState(false); // Track if user is new

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNewUser) {
      // Sign Up Logic
      const existingUser = users.find((user) => user.email === formData.email);
      if (existingUser) {
        alert("User already exists! Please Sign In.");
        setIsNewUser(false);
      } else {
        setUsers([...users, { email: formData.email, password: formData.password }]);
        alert("Sign Up Successful! Please Sign In.");
        setIsNewUser(false);
      }
    } else {
      // Sign In Logic
      const user = users.find((user) => user.email === formData.email && user.password === formData.password);
      if (user) {
        alert("Sign In Successful!");
        navigate("/dashboard"); // Redirect after sign-in
      } else {
        alert("User not found! Please Sign Up.");
        setIsNewUser(true);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isNewUser ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit}>
          {isNewUser && (
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
          )}
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
          <button type="submit">{isNewUser ? "Sign Up" : "Sign In"}</button>
        </form>
        <p className="toggle-auth">
          {isNewUser ? "Already have an account?" : "New user?"}{" "}
          <span onClick={() => setIsNewUser(!isNewUser)}>{isNewUser ? "Sign In" : "Sign Up"}</span>
        </p>
      </div>
    </div>
  );
}

export default SignInSignUp;