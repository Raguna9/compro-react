/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PartnerList = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        getPartners();
    }, []);

    const getPartners = async () => {
        const response = await axios.get("http://localhost:5000/partners");
        setPartners(response.data);
    };

    const deletePartner = async (partnerId) => {
        await axios.delete(`http://localhost:5000/partners/${partnerId}`);
        toast.success('Data Deleted!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
        getPartners();
    };



    return (
        <div>
            <h1 className="title">Partners</h1>
            <h2 className="subtitle">List of Partners</h2>
            <Link to="/partners/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {partners.map((partner, index) => (
                        <tr key={partner.uuid}>
                            <td>{index + 1}</td>
                            <td>{partner.name}</td>
                            <td>
                                <figure className="image is-3by1">
                                    <img src={partner.urlImage} alt="Image" />
                                </figure>
                            </td>
                            <td>
                                <Link
                                    to={`/partners/edit/${partner.id}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deletePartner(partner.id)}
                                    className="button is-small is-danger ml-1"
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

export default PartnerList;