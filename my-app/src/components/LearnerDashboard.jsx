// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./LearnerDashboard.css";

// const LearnerDashboard = () => {
//   const [date, setDate] = useState(new Date());

//   const enrolledCourses = [
//     { id: 1, name: "Wood Carving Basics", progress: 80 },
//     { id: 2, name: "Advanced Pottery", progress: 50 },
//     { id: 3, name: "Metal Engraving", progress: 65 },
//   ];

//   const scheduledMeetings = [
//     { id: 1, title: "Wood Carving Live Session", date: "2025-04-02", time: "10:00 AM" },
//     { id: 2, title: "Pottery Q&A", date: "2025-04-05", time: "3:00 PM" },
//   ];

//   return (
//     <div className="dashboard">
//       <h2>📚 Learner Dashboard</h2>

   
//       <div className="section">
//         <h3>🎓 Enrolled Courses</h3>
//         <ul>
//           {enrolledCourses.map((course) => (
//             <li key={course.id} className="course">
//               <span>{course.name}</span>
//               <div className="progress-bar">
//                 <div className="progress" style={{ width: `${course.progress}%` }}>
//                   {course.progress}%
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Scheduled Meetings */}
//       <div className="section">
//         <h3>📅 Scheduled Meetings</h3>
//         <ul>
//           {scheduledMeetings.map((meeting) => (
//             <li key={meeting.id} className="meeting">
//               <strong>{meeting.title}</strong> - {meeting.date} at {meeting.time}
//             </li>
//           ))}
//         </ul>
//       </div>

      
//       <div className="section">
//         <h3>📆 Daily Follow-up Calendar</h3>
//         <Calendar onChange={setDate} value={date} />
//         <p>Selected Date: {date.toDateString()}</p>
//       </div>
//     </div>
//   );
// };

// export default LearnerDashboard;


// import React, { useState } from "react";
// import "react-calendar/dist/Calendar.css";
// import "./LearnerDashboard.css";

// const handleExploreClick = () => {
//   if (isAuthenticated) {
//     navigate("/artisans"); // Go to artisans page if logged in
//   } else {
//     navigate("/auth"); // Redirect to login/signup page if not logged in
//   }
// };

// const LearnerDashboard = () => {
//   const [date, setDate] = useState(new Date());
//   const [goals, setGoals] = useState(["Complete a pottery tutorial", "Practice wood carving", "Engrave a metal plate"]);
//   const [notifications, setNotifications] = useState([
//     "New artisan added: Master Potter John Doe",
//     "Live session on wood carving this Friday",
//   ]);

//   return (
//     <div className="dashboard">
//       <h2>📚 Learner Dashboard</h2>

//       {/* Explore Artisans Section */}
//       <div className="section">
//         <h3>🛠️ Explore Artisans</h3>
//         <p>Discover skilled artisans and learn from their expertise.</p>
//         <button onClick={handleExploreClick} className="explore-button">Explore Now</button>
//       </div>

//       {/* Learning Goals */}
//       <div className="section">
//         <h3>🎯 Learning Goals</h3>
//         <ul>
//           {goals.map((goal, index) => (
//             <li key={index}>{goal}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Resource Library */}
//       <div className="section">
//         <h3>📚 Resource Library</h3>
//         <p>Access a collection of learning materials, guides, and video tutorials.</p>
//         <button className="resource-button">View Resources</button>
//       </div>



//     </div>
//   );
// };

// export default LearnerDashboard;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./LearnerDashboard.css";

const LearnerDashboard = () => {
  const [date, setDate] = useState(new Date());
  const [goals, setGoals] = useState(["Complete a pottery tutorial", "Practice wood carving", "Engrave a metal plate"]);
  const [notifications, setNotifications] = useState([
    "New artisan added: Master Potter John Doe",
    "Live session on wood carving this Friday",
  ]);

  const navigate = useNavigate(); // Initialize navigate

  const handleExploreClick = () => {
    const isAuthenticated = localStorage.getItem("token"); // Check if user is logged in

    if (isAuthenticated) {
      navigate("/artisans"); // Redirect to Artisans page
    } else {
      navigate("/auth"); // Redirect to login/signup page
    }
  };

  return (
    <div className="dashboard">
      <h2> Learner Dashboard</h2>

      {/* Explore Artisans Section */}
      <div className="section">
        <h3>🛠️ Explore Artisans</h3>
        <p>Discover skilled artisans and learn from their expertise.</p>
        <button className="explore-button" onClick={handleExploreClick}>Explore Now</button>
      </div>

      {/* Learning Goals */}
      <div className="section">
        <h3>🎯 Learning Goals</h3>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>

      {/* Resource Library */}
      <div className="section">
        <h3>📚 Resource Library</h3>
        <p>Access a collection of learning materials, guides, and video tutorials.</p>
        <button className="resource-button">View Resources</button>
      </div>

    

    
    </div>
  );
};

export default LearnerDashboard;
