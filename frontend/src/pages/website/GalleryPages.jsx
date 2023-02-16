import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";

function GalleryPages() {
    const [gallery, setGallerys] = useState([]);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/gallerys')
            .then(response => setGallerys(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <React.Fragment>
            <PublicNavbar />
            <div className="container mt-5 py-6">
                    <h1 className="title has-text-centered mt-5">Our Gallery</h1>
                    <form className="navbar-end field has-addons mb-4">
                        <div className="control is-expanded">
                            <input className="input" type="text" placeholder="Cari Blog" />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                Cari
                            </button>
                        </div>
                    </form>
                    <div className="columns is-multiline">
                        {gallery.map(gallery => (
                            <div key={gallery.uuid} className="column is-one-third">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={gallery.urlImage} alt={gallery.description}
                                                onClick={() => setActiveImage(gallery.urlImage)} />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <p className="title is-4">{gallery.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    {activeImage &&
                        <div className="modal is-active">
                            <div className="modal-background" onClick={() => setActiveImage(null)} />
                            <div className="modal-content">
                                <p className="image">
                                    <img src={activeImage} alt={activeImage} />
                                </p>
                            </div>
                            <button className="modal-close is-large" aria-label="close"
                                onClick={() => setActiveImage(null)} />
                        </div>
                    }
            </div>
            <PublicFooter />
        </React.Fragment>
    );
}

export default GalleryPages;