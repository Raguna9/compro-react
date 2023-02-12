/* eslint-disable jsx-a11y/img-redundant-alt */
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
        <div>
            <h1 className="title">ExternalEmployees</h1>
            <h2 className="subtitle">List of ExternalEmployees</h2>
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
                            <td>{externalEmployee.name}</td>
                            <td>{externalEmployee.department}</td>
                            <td>{externalEmployee.gender}</td>
                            <td>{externalEmployee.email}</td>
                            <td>{externalEmployee.sppi}</td>
                            <td>
                                <figure className="image is-2by3">
                                    <img src={externalEmployee.urlImage} alt="Image" />
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