import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Partner = () => {
    const [partner, setPartners] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/partners')
            .then(response => setPartners(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <section id="partner" className="section">
            <div className="container is-full-desktop mx-6">
                <h2 className="title has-text-centered">Mitra Kerja</h2>
                <div className="columns is-multiline">
                    {partner.map((partner) => (
                        <div className="column is-2" key={partner.uuid}>
                            <img src={partner.urlImage} alt={partner.name} />
                            {/* <h3 className="title is-5">{partner.name}</h3> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partner;