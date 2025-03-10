import React from "react";

const EditUser = () =>{

     const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [editingId, setEditingId] = useState(null);


return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600'>
        <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg'>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-600 mb-2">Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                        placeholder="Enter your Name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-600 mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                        placeholder="Enter your Email"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-600 mb-2">Contact no.</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                        placeholder="Enter your Contact number"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-600 mb-2">Address</label>
                    <input
                        type="Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                        placeholder="Enter your Address"
                        required
                    />
                </div>
                <button
                    onClick={backToHome}
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 "
                >
                    Add user
                </button>
            </form>
        </div>
    </div>

)
}

export default EditUser