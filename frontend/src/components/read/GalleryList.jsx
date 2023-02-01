/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GalleryList = () => {
    const [gallerys, setGallerys] = useState([]);

    useEffect(() => {
        getGallerys();
    }, []);

    const getGallerys = async () => {
        const response = await axios.get("http://localhost:5000/gallerys");
        setGallerys(response.data);
    };

    const deleteGallery = async (galleryId) => {
        await axios.delete(`http://localhost:5000/gallerys/${galleryId}`);
        toast.success('Data Deleted!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
        getGallerys();
    };



    return (
        <div>
            <h1 className="title">Gallerys</h1>
            <h2 className="subtitle">List of Gallerys</h2>
            <Link to="/gallerys/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {gallerys.map((gallery, index) => (
                        <tr key={gallery.uuid}>
                            <td>{index + 1}</td>
                            <td>
                                <figure className="image is-3by1">
                                    <img src={gallery.urlImage} alt="Image" />
                                </figure>
                            </td>
                            <td>{gallery.description}</td>
                            <td>
                                <Link
                                    to={`/gallerys/edit/${gallery.id}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteGallery(gallery.id)}
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

export default GalleryList;