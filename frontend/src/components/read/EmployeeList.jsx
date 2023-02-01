/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        const response = await axios.get("http://localhost:5000/employees");
        setEmployees(response.data);
    };

    const deleteEmployee = async (employeeId) => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');

        if (confirmDelete) {
            await axios.delete(`http://localhost:5000/employees/${employeeId}`);
            getEmployees();
        }
    };



    return (
        <div>
            <h1 className="title">Employees</h1>
            <h2 className="subtitle">List of Employees</h2>
            <Link to="/employees/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>No SPPI</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={employee.uuid}>
                            <td>{index + 1}</td>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.sppi}</td>
                            <td>
                                <figure className="image is-2by3">
                                    <img src={employee.urlImage} alt="Image" />
                                </figure>
                            </td>
                            <td>
                                <Link
                                    to={`/employees/edit/${employee.id}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteEmployee(employee.id)}
                                    className="button is-small is-danger ml-1"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;