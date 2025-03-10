
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:3000/users";

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const userData = { name, email, contact, address };

        axios.post(API_URL, userData)
            .then(() => {
                navigate('/crudtable');
            })
            .catch(error => console.error("error adding user:", error));

        setName("");
        setEmail("");
        setContact("");
        setAddress("");
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600'>
            <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg'>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-600 mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Contact no.</label>
                        <input
                            type="number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your Contact number"
                            required
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Address</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your Address"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                    >
                        Add user
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;



// const handleUpdate = (e) => {
//     e.preventDefault();

//     const updatedUser = { name, email, contact, address };

//     axios.put(`${API_URL}/${id}`, updatedUser)
//         .then(() => {
//             navigate('/crudtable'); // Redirect to CRUD table
//         })
//         .catch(error => console.error("Error updating user:", error));
// };