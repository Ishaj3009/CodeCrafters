
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import ArtisanList from "./components/ArtisanList";
// import ArtisanProfile from "./components/ArtisanProfile";
// import BookingForm from "./components/BookingForm";
// import Dashboard from "./components/Dashboard";
// import Footer from "./components/Footer";
// import "./components/styles.css"; // Ensure styles are properly imported
// import Exhibition from "./components/Exhibition.jsx";

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <div className="main-container">
//           <Routes>
//             <Route path="/" element={<Home />} />
            
//             <Route path="/artisans" element={<ArtisanList />} />
//             <Route path="/artisan/:id" element={<ArtisanProfile />} />
//             <Route path="/book/:id" element={<BookingForm />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/exhibition" element={<Exhibition />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import AuthPage from "./components/AuthPage";
// import Home from "./components/Home";
// import ArtisanList from "./components/ArtisanList";

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("token");
//   return isAuthenticated ? children : <Navigate to="/auth" />;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/auth" element={<AuthPage />} />
//         <Route path="/artisans" element={<ProtectedRoute><ArtisanList /></ProtectedRoute>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AuthPage from "./components/AuthPage"; // ✅ Ensure this is imported
import ArtisanList from "./components/ArtisanList";
import ArtisanProfile from "./components/ArtisanProfile";
import BookingForm from "./components/BookingForm";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Exhibition from "./components/Exhibition";
import "./components/styles.css"; // Ensure styles are properly imported
import SignUp from "./components/SignUp"
import Contact from "./components/Connect"

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
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </div>
        <Contact/>      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
