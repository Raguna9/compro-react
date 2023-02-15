import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');

        if (confirmDelete) {
            await axios.delete(`http://localhost:5000/gallerys/${galleryId}`);
            getGallerys();
        }
    };

    return (
        <div className="container mr-2">
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
                                <figure className="image is-3by2">
                                    <img src={gallery.urlImage} alt={gallery.uuid} />
                                </figure>
                            </td>
                            <td>{gallery.description}</td>
                            <td>
                                <Link
                                    to={`/gallerys/edit/${gallery.uuid}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteGallery(gallery.uuid)}
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

export default GalleryList;