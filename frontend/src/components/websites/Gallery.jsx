import React from "react";

const Gallery = () => {

    return (
        <div>
            <section id="gallery" class="section">
                <div class="container">
                    <h1 class="title has-text-centered">Gallery</h1>
                    <h2 class="subtitle has-text-centered">
                        Berikut ini adalah beberapa gambar yang menggambarkan layanan kami.
                    </h2>

                    <div class="columns is-multiline">
                        <div class="column is-4">
                            <figure class="image is-3by2">
                                <img src="https://picsum.photos/640/480?image=1" alt="Surveillance and Monitoring" />
                            </figure>
                        </div>
                        <div class="column is-4">
                            <figure class="image is-3by2">
                                <img src="https://picsum.photos/640/480?image=2" alt="Risk Assessment and Management" />
                            </figure>
                        </div>
                        <div class="column is-4">
                            <figure class="image is-3by2">
                                <img src="https://picsum.photos/640/480?image=3" alt="Security Consulting" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Gallery;