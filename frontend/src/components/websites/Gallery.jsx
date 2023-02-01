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
            <section id="gallery" class="section">
                <div class="container">
                    <h1 class="title has-text-centered">Gallery</h1>
                    <h2 class="subtitle has-text-centered">
                        Berikut ini adalah beberapa gambar yang menggambarkan layanan kami.
                    </h2>

                    <div class="columns is-multiline">
                        {/* {gallery.slice(0, 3).map((gallery, index) => (
                            <div class="column is-4" key={index}>
                                <figure class="image is-3by2">
                                    <img src={gallery.urlImage} alt={gallery.description} onClick={() => setActiveImage(gallery.urlImage)} />
                                </figure>
                            </div>
                        ))} */}
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


        </div>
    );
};

export default Gallery;