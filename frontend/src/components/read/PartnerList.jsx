import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');

        if (confirmDelete) {
            await axios.delete(`http://localhost:5000/partners/${partnerId}`);
            getPartners();
        }
    };



    return (
        <div className="container mr-2">
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
                                    <img src={partner.urlImage} alt={partner.name} />
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
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PartnerList;