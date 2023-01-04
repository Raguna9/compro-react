import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    };

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        toast.success('Data Deleted!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
        getUsers();
    };

    return (
        <div>
            <h1 className="title">Users</h1>
            <h2 className="subtitle">List of Users</h2>
            <Link to="/users/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.uuid}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Link
                                    to={`/users/edit/${user.uuid}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteUser(user.uuid)}
                                    className="button is-small is-danger"
                                >
                                    Delete
                                </button>
                                <ToastContainer/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;