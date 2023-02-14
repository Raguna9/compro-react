import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ExternalEmployeeList = () => {
    const [externalEmployees, setExternalEmployees] = useState([]);

    useEffect(() => {
        getExternalEmployees();
    }, []);

    const getExternalEmployees = async () => {
        const response = await axios.get("http://localhost:5000/externalEmployees");
        setExternalEmployees(response.data);
    };

    const deleteExternalEmployee = async (externalEmployeeId) => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');

        if (confirmDelete) {
            await axios.delete(`http://localhost:5000/externalEmployees/${externalEmployeeId}`);
            getExternalEmployees();
        }
    };

    return (
        <div className="container mr-2">
            <h1 className="title">External Employees</h1>
            <h2 className="subtitle">List of External Employees</h2>
            <Link to="/externalEmployees/add" className="button is-primary mb-2">
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
                    {externalEmployees.map((externalEmployee, index) => (
                        <tr key={externalEmployee.uuid}>
                            <td>{index + 1}</td>
                            <td style={{ width: "120px" }}>{externalEmployee.name}</td>
                            <td style={{ width: "100px" }}>{externalEmployee.department}</td>
                            <td>{externalEmployee.gender}</td>
                            <td>{externalEmployee.email}</td>
                            <td>{externalEmployee.sppi}</td>
                            <td>
                                <figure className="image is-3by4">
                                    <img src={externalEmployee.urlImage} alt={externalEmployee.name} />
                                </figure>
                            </td>
                            <td>
                                <Link
                                    to={`/externalEmployees/edit/${externalEmployee.id}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteExternalEmployee(externalEmployee.id)}
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

export default ExternalEmployeeList;