import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const { isAuth, login, logout, currentUser } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const success = login(username, password);
        if (!success) {
            setError("Invalid username or password!");
        } else {
            setError("");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {!isAuth ? (
                <form
                    onSubmit={handleLogin}
                    className="p-6 bg-white rounded-lg shadow-md w-96"
                >
                    <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
                    {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            ) : (
                <div className="p-6 bg-white rounded-lg shadow-md w-96 text-center">
                    <h2 className="mb-4 text-2xl font-bold">Welcome, {currentUser.username}!</h2>
                    <p className="mb-6 text-sm text-gray-600">
                        {/* Email: {currentUser.email} */}
                    </p>
                    <button
                        onClick={logout}
                        className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
