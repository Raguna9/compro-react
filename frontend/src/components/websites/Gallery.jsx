import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [gallery, setGallerys] = useState([]);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/gallerys')
            .then(response => setGallerys(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <section id="gallery" className="section has-background-grey-lighter">
                <div className="container">
                    <h1 className="title has-text-centered">Gallery</h1>
                    <h2 className="subtitle has-text-centered">
                        Berikut ini adalah beberapa gambar yang menggambarkan layanan kami.
                    </h2>

                    <div className="columns is-multiline">
                        {gallery.slice(0, 3).map((gallery, index) => (
                            <div key={index} className="column is-one-third">
                                <div className="card has-background-light">
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
                    <a href="gallerypages" className="button is-primary">Selengkapnya</a>

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
            </section>
            {/* <hr className='hr' style={{ width: "50%", margin: "auto" }} /> */}
        </div>
    );
};

export default Gallery;