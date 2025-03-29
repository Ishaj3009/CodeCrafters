import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./LearnerDashboard.css";

const LearnerDashboard = () => {
  const [date, setDate] = useState(new Date());

  const enrolledCourses = [
    { id: 1, name: "Wood Carving Basics", progress: 80 },
    { id: 2, name: "Advanced Pottery", progress: 50 },
    { id: 3, name: "Metal Engraving", progress: 65 },
  ];

  const scheduledMeetings = [
    { id: 1, title: "Wood Carving Live Session", date: "2025-04-02", time: "10:00 AM" },
    { id: 2, title: "Pottery Q&A", date: "2025-04-05", time: "3:00 PM" },
  ];

  return (
    <div className="dashboard">
      <h2>📚 Learner Dashboard</h2>

      {/* Enrolled Courses */}
      <div className="section">
        <h3>🎓 Enrolled Courses</h3>
        <ul>
          {enrolledCourses.map((course) => (
            <li key={course.id} className="course">
              <span>{course.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${course.progress}%` }}>
                  {course.progress}%
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Scheduled Meetings */}
      <div className="section">
        <h3>📅 Scheduled Meetings</h3>
        <ul>
          {scheduledMeetings.map((meeting) => (
            <li key={meeting.id} className="meeting">
              <strong>{meeting.title}</strong> - {meeting.date} at {meeting.time}
            </li>
          ))}
        </ul>
      </div>

      {/* Calendar for Follow-ups */}
      <div className="section">
        <h3>📆 Daily Follow-up Calendar</h3>
        <Calendar onChange={setDate} value={date} />
        <p>Selected Date: {date.toDateString()}</p>
      </div>
    </div>
  );
};

export default LearnerDashboard;
