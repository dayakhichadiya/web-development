
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router'


const API_URL = "http://localhost:3000/users";
const ITEMS_PER_PAGE = 10;

const CRUDTable = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);


 const navigate = useNavigate()

  const add = () => {
    navigate("/adduser")
  }
 

  // delete 
  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error("Error deleting user:", error));
  };


  //  for editing
  const handleEdit = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
    setContact(user.contact);
    setAddress(user.address);
  };

  // Pagination 
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-lg mx-20">
      <h2 className="text-xl font-semibold text-center">CRUD Table with JSON Server</h2>

       <div className="flex items-center justify-center  mb-6"> 
        {/* <input className="border px-2 py-1 m-1 rounded" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="border px-2 py-1 m-1 rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border px-2 py-1 m-1 rounded" type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
        <input className="border px-2 py-1 m-1 rounded" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} /> */}
        <button className="px-4 py-2 bg-black text-white rounded mt-2" onClick={add}>
          {editingId ? "Update User" : "Add User"}
        </button>
      </div> 

      <table className="w-full border-collapse bg-white">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

            {/* // pagination */}
          {currentUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{indexOfFirstItem + index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.address}</td>
              <td>
                <button className="px-2 py-1 bg-gray-600 text-white rounded mr-2" onClick={() => handleEdit(user)}>Edit</button>
                <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 mx-1 bg-gray-300 rounded" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"} rounded`} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button className="px-4 py-2 mx-1 bg-gray-300 rounded" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div> */}
    </div>
  );
};

export default CRUDTable;








