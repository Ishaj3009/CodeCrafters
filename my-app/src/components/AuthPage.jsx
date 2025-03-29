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
