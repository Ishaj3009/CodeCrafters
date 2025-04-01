

// import React, { useState } from "react";
// import "./ArtisanDashboard.css";
// import { FaBox, FaShoppingCart, FaCheckCircle } from "react-icons/fa";

// const ArtisanDashboard = () => {
//   const [stats, setStats] = useState({
//     listedProducts: 0,
//     orderedQty: 0,
//     soldQty: 0,
//   });

//   return (
//     <div className="dashboard-container">
//       <h2>Welcome, Artisan!</h2>
//       <div className="stats">
//         <div className="stat-box">
//           <FaBox className="icon" />
//           <h3>Listed Products</h3>
//           <p>{stats.listedProducts}</p>
//         </div>
//         <div className="stat-box">
//           <FaShoppingCart className="icon" />
//           <h3>Ordered Quantity</h3>
//           <p>{stats.orderedQty}</p>
//         </div>
//         <div className="stat-box">
//           <FaCheckCircle className="icon" />
//           <h3>Sold Quantity</h3>
//           <p>{stats.soldQty}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtisanDashboard;

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// export default function ArtisanDashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [cost, setCost] = useState("");
//   const [profit, setProfit] = useState("");
//   const [price, setPrice] = useState(null);

//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };

//   const calculatePrice = () => {
//     const totalPrice = parseFloat(cost) + parseFloat(profit);
//     setPrice(totalPrice.toFixed(2));
//   };

//   return (
//     <div className="p-4 space-y-6">
//       {/* To-Do List */}
//       <Card>
//         <CardContent className="p-4 space-y-2">
//           <h2 className="text-xl font-semibold">To-Do List</h2>
//           <div className="flex gap-2">
//             <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a task" />
//             <Button onClick={addTask}>Add</Button>
//           </div>
//           <ul className="list-disc pl-5">
//             {tasks.map((task, index) => (
//               <li key={index}>{task}</li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Pricing Calculator */}
//       <Card>
//         <CardContent className="p-4 space-y-2">
//           <h2 className="text-xl font-semibold">Pricing Calculator</h2>
//           <Input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Enter cost" />
//           <Input type="number" value={profit} onChange={(e) => setProfit(e.target.value)} placeholder="Enter desired profit" />
//           <Button onClick={calculatePrice}>Calculate</Button>
//           {price !== null && <p>Suggested Price: <strong>${price}</strong></p>}
//         </CardContent>
//       </Card>

//       {/* Marketing Tips */}
//       <Card>
//         <CardContent className="p-4 space-y-2">
//           <h2 className="text-xl font-semibold">Marketing Tips</h2>
//           <ul className="list-disc pl-5">
//             <li>Use high-quality images for product listings.</li>
//             <li>Engage with customers on social media.</li>
//             <li>Offer discounts for repeat customers.</li>
//             <li>Write compelling product descriptions.</li>
//           </ul>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// import React from "react";
// import "./ArtisanDashboard.css";
// import { FaBox, FaShoppingCart, FaUsers, FaSignOutAlt } from "react-icons/fa";

// const ArtisanDashboard = () => {
//   return (
//     <div className="dashboard-con">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2 className="title">Artisan Panel</h2>
//         <ul>
//           <li><FaBox /> Products</li>
//           <li><FaShoppingCart /> Orders</li>
//           <li><FaUsers /> Customers</li>
//           <li className="logout"><FaSignOutAlt /> Logout</li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="dashboard-main">
//         <h1>Welcome, Artisan!</h1>
//         <div className="stats">
//           <div className="card">
//             <FaBox className="icon" />
//             <h3>0</h3>
//             <p>Products Listed</p>
//           </div>
//           <div className="card">
//             <FaShoppingCart className="icon" />
//             <h3>0</h3>
//             <p>Orders Received</p>
//           </div>
//           <div className="card">
//             <FaUsers className="icon" />
//             <h3>0</h3>
//             <p>Customers</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ArtisanDashboard;


import React, { useState } from "react";
import "./ArtisanDashboard.css";

const ArtisanDashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [session, setSession] = useState({
    title: "",
    date: "",
    time: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setSession({ ...session, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!session.title || !session.date || !session.time || !session.price) {
      alert("Please fill in all fields");
      return;
    }

    setSessions([...sessions, session]);
    setSession({ title: "", date: "", time: "", price: "", description: "" });
  };

  return (
    <div className="dashboard-container">
      <h2>Artisan Dashboard</h2>

      {/* Create Session Form */}
      <form className="session-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Session Title"
          value={session.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={session.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={session.time}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price in INR"
          value={session.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Session Description (Optional)"
          value={session.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Create Session</button>
      </form>

      {/* Display Created Sessions */}
      <div className="session-list">
        <h3>My Sessions</h3>
        {sessions.length === 0 ? (
          <p>No sessions created yet.</p>
        ) : (
          <ul>
            {sessions.map((s, index) => (
              <li key={index}>
                <strong>{s.title}</strong> - {s.date} at {s.time}  
                <br />
                Price: ₹{s.price}  
                <br />
                {s.description && <p>{s.description}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ArtisanDashboard;
