// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// export default function AuthPage() {
//   const { register, handleSubmit } = useForm();
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log("User Data:", data);
//     localStorage.setItem("token", "user_logged_in"); // Simulating login state
//     navigate("/artisans"); // Redirect after login/signup
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {!isLogin && (
//             <>
//               <input {...register("name")} placeholder="Full Name" required className="input-field" />
//               <select {...register("role")} className="input-field">
//                 <option value="artisan">Artisan</option>
//                 <option value="learner">Learner</option>
//               </select>
//             </>
//           )}
//           <input type="email" {...register("email")} placeholder="Email" required className="input-field" />
//           <input type="password" {...register("password")} placeholder="Password" required className="input-field" />
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:underline">
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import "./AuthPage.css"; // ✅ Import CSS file

// export default function AuthPage() {
//   const { register, handleSubmit } = useForm();
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log("User Data:", data);
//     localStorage.setItem("token", "user_logged_in"); // Simulating login state
//     navigate("/artisans"); // Redirect after login/signup
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2 className="auth-title">{isLogin ? "Login" : "Sign Up"}</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
//           {!isLogin && (
//             <>
//               <input {...register("name")} placeholder="Full Name" required className="input-field" />
//               <select {...register("role")} className="input-field">
//                 <option value="artisan">Artisan</option>
//                 <option value="learner">Learner</option>
//               </select>
//             </>
//           )}
//           <input type="email" {...register("email")} placeholder="Email" required className="input-field" />
//           <input type="password" {...register("password")} placeholder="Password" required className="input-field" />
//           <button type="submit" className="auth-button">
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>
//         <p className="toggle-text">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Sign Up" : "Login"}</button>
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AuthPage from "./AuthPage"; // ✅ Ensure this is imported
import ArtisanList from "./ArtisanList";
import ArtisanProfile from "./ArtisanProfile";
import BookingForm from "./BookingForm";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Exhibition from "./Exhibition";
import "./styles.css"; // Ensure styles are properly imported

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/artisans" element={<ProtectedRoute><ArtisanList /></ProtectedRoute>} />
            <Route path="/artisan/:id" element={<ProtectedRoute><ArtisanProfile /></ProtectedRoute>} />
            <Route path="/book/:id" element={<ProtectedRoute><BookingForm /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/exhibition" element={<Exhibition />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
