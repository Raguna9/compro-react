import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";

function BlogPages() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/images')
            .then(response => setImages(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <React.Fragment>
            <PublicNavbar />
            <div className="section">
                <div className="container">
                    <h1 className="title">Our Gallery</h1>
                    <div className="columns is-multiline">
                        {images.map(image => (
                            <div key={image.id} className="column is-one-third">
                                <figure className="image">
                                    <img src={image.url} alt={image.description} />
                                </figure>
                                <p>{image.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PublicFooter />
        </React.Fragment>
    );
}

export default BlogPages;