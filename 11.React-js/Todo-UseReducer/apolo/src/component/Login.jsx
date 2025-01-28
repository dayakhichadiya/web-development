import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "daya" && password === "daya09") {
      alert("Login successful!");
      onLogin();
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 "
          >
            Login
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;

        // <Link to="TaskInput">
        // <button
        //   onClick={handleLogin}
        //   className="w-full p-2 bg-blue-500 text-white rounded"
        //   >
        //   Login
        // </button>
        // </Link>