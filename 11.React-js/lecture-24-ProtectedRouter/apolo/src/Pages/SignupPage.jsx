// import React, { useState } from 'react'
// import { useAuth } from '../context/AuthContext'

// const SignupPage = () => {
     
//     const {register} = useAuth();
//     const [formData, setFormData] = useState({
//         username : "",
//         email : "",
//         password : "",
//     });

//     const [success, setSuccess] = useState("");

//     const handleChange = (e) => {
//         const {name, value} = e.target ;
//         setFormData({...formData, [name] : value})
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const {username, email, password} = formData;
//     }

//     const registrationSuccess = register(username, email, password);
//     if(registrationSuccess){
//         setSuccess("Account created successully !! you can now login")
//         setFormData({username :"", email: "", password : ""})
//     }else{
//         setSuccess("")
//     }

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//             <form
//                 onSubmit={handleSubmit}
//                 className="p-6 bg-white rounded-lg shadow-md w-96"
//             >
//                 <h2 className="mb-6 text-2xl font-bold text-center">Sign Up</h2>
//                 {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
//                 {success && <p className="mb-4 text-sm text-green-500">{success}</p>}
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium">Username</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-lg"
//                         placeholder="Enter your username"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-lg"
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium">Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-lg"
//                         placeholder="Enter your password"
//                         required
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
//                 >
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default SignupPage;

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignupPage = () => {
    const { register } = useAuth(); 
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = formData; 

        if (!username || !email || !password) {
            setError("All fields are required!");
            setSuccess("");
            return;
        }

        const registrationSuccess = register(username, email, password); 
        if (registrationSuccess) {
            setError("");
            setSuccess("Account created successfully! You can now log in.");
            setFormData({ username: "", email: "", password: "" });
        } else {
            setError("Username or email already exists.");
            setSuccess("");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="p-6 bg-white rounded-lg shadow-md w-96"
            >
                <h2 className="mb-6 text-2xl font-bold text-center">Sign Up</h2>
                {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
                {success && <p className="mb-4 text-sm text-green-500">{success}</p>}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupPage;
