import React, { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router";
import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskList = () => {
    const [showForm, setShowForm] = useState(false);
    const [showNew, setShowNew] = useState(true);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    const [inputTitle, setInputTitle] = useState("");
    const [inputDesc, setInputDesc] = useState("");
    const [deleteMessage, setdeleteMessage] = useState(false);
    const [showDelete, setshowDelete] = useState(true);
    // const [deleteMessagesuccess, setdeleteMessagesuccess] = useState(false);
    const [showList, setShowList] = useState(true);
    const [items, setItems] = useState([
        { id: "001", name: "Empty Task", desc: "No Task Available", status: false },
    ]);

    const [taskName, setTaskName] = useState('')
    const [taskdesc, setTaskdesc] = useState('');
    const [status, setStatus] = useState('Completed');

    // const { tasks, setTasks } = useContext(TaskContext);
    const resetForm = () => {
        setInputTitle("");
        setInputDesc("");
        setIsEditItem(null);
        setToggleSubmit(true);
        setShowForm(false);
    };

    const handleInput = (e) => setInputTitle(e.target.value);
    const handleInputDesc = (e) => setInputDesc(e.target.value);
    // const handleStatus = (e) => {
    //     setStatus(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputTitle || !inputDesc) {
            alert("Please fill in both the title and description.");
            return;
        }

        const taskStatus = document.getElementById("statusSelect").value;


        const newTask = {
            id: new Date().getTime().toString(),
            name: inputTitle,
            desc: inputDesc,
            status: taskStatus
        };

        setItems((prevItems) => {
            if (isEditItem) {
                return prevItems.map((item) =>
                    item.id === isEditItem ? { ...item, name: inputTitle, desc: inputDesc, status: taskStatus } : item
                );
            } else {
                return prevItems[0].id === "001" && prevItems.length === 1
                    ? [newTask]
                    : [newTask, ...prevItems];
            }
        });

        resetForm();
    };

    const handleEdit = (id) => {
        const taskToEdit = items.find((item) => item.id === id);
        if (!taskToEdit) return;

        setInputTitle(taskToEdit.name);
        setInputDesc(taskToEdit.desc);
        setIsEditItem(id);
        // setToggleSubmit(false);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => item.id !== id);
            return updatedItems.length === 0
                ? [{ id: "001", name: "Empty Task", desc: "No Task Available" }]
                : updatedItems;
        });
    };


    const handleAdd = () => {
        setShowForm(true);
        setshowList(true);
        setShowNew(false);
        resetForm();
    };



    // const handleNavigate = () => {
    //     const navigate = useNavigate();
    //     navigate("/TaskCard", { state: { tasks: items } })
    // }



    return (

        <div>
            <>
                {showNew ? (
                    <div className="container">
                        <div className="col-12 text-end">
                            <button className="btn btn-primary " onClick={handleAdd}>
                                New Task
                            </button>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {showForm ? (
                    <>
                        <div className="container mx-auto border d-flex justify-content-center shadow p-5 mb-5 bg-white rounded">
                            <div className="row text-center mb-4">
                                <div className="text-center">
                                    <h2 className="text-lg text-gray-700 font-bold">{toggleSubmit ? "Add Task" : " Edit Task"}</h2>
                                </div>
                                <form className="col-12 p-2" onSubmit={handleSubmit}>
                                    <label htmlFor="title" className="block text-gray-600 font-medium mb-2 ">
                                        Enter Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="title"
                                        className="w-full border rounded-md p-2"
                                        onChange={handleInput}
                                        value={inputTitle}
                                    />
                                    <label className="block text-gray-600 font-medium mb-2" htmlFor="description">
                                        Enter description
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        placeholder="Description"
                                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={handleInputDesc}
                                        value={inputDesc}
                                    />
                                    <label htmlFor="selectStatus" className="block text-gray-600 font-medium mb-2" >Status :</label>
                                    <select className="w-full border rounded-md p-2" name="selectStatus" id="statusSelect">
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                    </select>

                                    <div className="text-center">
                                        {toggleSubmit ? (
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
                                        ) : (
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update</button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )}

                {showList ? (
                    <div className="container mx-auto py-4">
                        {deleteMessage ? (
                            <p className="text-center text-red-500 font-semibold mb-4">Item Deleted Successfully</p>
                        ) : (
                            ""
                        )}
                        {items.map((elem, index) => {
                            return (
                                <div
                                    className="flex items-center justify-between border shadow-sm rounded-md p-4 mb-4 bg-white"
                                    key={elem.id}
                                >
                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-700">{elem.name}</h4>
                                            <p className="text-gray-500">{elem.desc}</p>
                                        </div>
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                            onClick={() => handleEdit(elem.id)}
                                        >
                                            Edit
                                        </button>
                                        {showDelete ? (
                                            <button
                                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                                onClick={() => handleDelete(elem.id)}
                                            >
                                                Delete
                                            </button>
                                        ) : null(
                                            ""
                                        )}
                                        <span className={`px-4 py-2 rounded-md text-white ${elem.status === "Completed"
                                                ? "bg-green-500"
                                                : "bg-yellow-500"
                                            }`}>
                                             {elem.status === 'Completed' ? 'Completed' : 'Pending'}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="text-center">
                        <Link
                            to="/TaskCard"
                            state={{ tasks: items }}
                            className="text-bold px-3 py-1 bg-blue-600 rounded-lg text-white text-lg m-4"
                        > Save List
                            {/* <button className=" text-bold px-3 py-1 bg-blue-600 rounded-lg text-white text-lg">Save List</button> */}
                        </Link>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </>
            <Outlet />
        </div >
    );
};

export default TaskList;
