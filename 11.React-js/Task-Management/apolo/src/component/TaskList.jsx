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
    const [status, setStatus] = useState('pending');

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
        // addTask(prev => [...prev,{
        //     taskName,
        //     taskdesc,
        //     status,
        // }])

        // setTaskName(""),
        // setTaskdesc(""),
        // setStatus("pending")

        if (!inputTitle || !inputDesc) {
            alert("Please fill in both the title and description.");
            return;
        }

        const newTask = {
            id: new Date().getTime().toString(),
            name: inputTitle,
            desc: inputDesc,
        };

        setItems((prevItems) => {
            if (isEditItem) {
                return prevItems.map((item) =>
                    item.id === isEditItem ? { ...item, name: inputTitle, desc: inputDesc, } : item
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
        setToggleSubmit(false);
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
                        <div className="container border d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="text-center">
                                    <h2>{toggleSubmit ? "Add Task" : " Edit Task"}</h2>
                                </div>
                                <form className="col-12 p-2" onSubmit={handleSubmit}>
                                    <label htmlFor="title" className="my-2">
                                        Enter Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="title"
                                        className="w-100 my-1 p-2"
                                        onChange={handleInput}
                                        value={inputTitle}
                                    />
                                    <label className="my-2" htmlFor="description">
                                        Enter description
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        placeholder="Description"
                                        className="w-100 my-1 p-2"
                                        onChange={handleInputDesc}
                                        value={inputDesc}
                                    />
                                    <label htmlFor="" >Status :</label>
                                    <select name="" id="">
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                    </select>

                                    {/* <div className="text-center"> */}
                                    {toggleSubmit ? (
                                        <button className="btn btn-primary my-2">Save</button>
                                    ) : (
                                        <button className="btn btn-primary my-2">Update</button>
                                    )}
                                    {/* </div> */}
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )}

                {showList ? (
                    <div className="container py-2 ">
                        {deleteMessage ? (
                            <p className="text-center text-danger">Item Deleted Successfully</p>
                        ) : (
                            ""
                        )}
                        {items.map((elem, index) => {
                            return (
                                <div
                                    className="row border shadow mb-3 bg-white rounded  p-2"
                                    key={elem.id}
                                >
                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4>{elem.name}</h4>
                                            <p>{elem.desc}</p>
                                        </div>
                                        <button
                                            className="btn btn-primary mx-2"
                                            onClick={() => handleEdit(elem.id)}
                                        >
                                            Edit
                                        </button>
                                        {showDelete ? (
                                            <button
                                                className="btn btn-danger mx-2"
                                                onClick={() => handleDelete(elem.id)}
                                            >
                                                Delete
                                            </button>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                        <Link
                            to="/TaskCard"
                            state={{ tasks: items }}
                            className="text-bold px-3 py-1 bg-blue-600 rounded-lg text-white text-lg"
                        > Save List
                            {/* <button className=" text-bold px-3 py-1 bg-blue-600 rounded-lg text-white text-lg">Save List</button> */}
                        </Link>
                    </div>
                ) : (
                    ""
                )}
            </>
            <Outlet />
        </div>
    );
};

export default TaskList;

