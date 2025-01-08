import React from 'react'
import { useLocation, Link } from "react-router-dom";


const TaskCard = () => {
    const location = useLocation();
    const tasks = location.state?.tasks || [];

    return (
        <div className="container">
            <h2 className="text-center my-3">Task List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task.id}>
                            <td>{index + 1}</td>
                            <td>{task.name}</td>
                            <td>{task.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-end">
                <Link to="/TaskList" className="btn btn-secondary">
                    Back to Add Task
                </Link>
            </div>
        </div>
    );
};
export default TaskCard