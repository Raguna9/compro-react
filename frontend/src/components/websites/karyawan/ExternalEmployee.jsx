/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExternalEmployee = () => {
    const [externalEmployees, setExternalEmployees] = useState([]);
    const [activeImage, setActiveImage] = useState(null);
    const [isOpen, setIsOpen] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/externalEmployees')
            .then(response => setExternalEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="columns is-multiline">
            {externalEmployees.map(externalEmployee => (
                <div key={externalEmployee.id} className="column is-one-third">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-3by2 has-text-centered">
                                <img src={externalEmployee.urlImage} alt={externalEmployee.description}
                                    onClick={() => setActiveImage(externalEmployee.urlImage)} />
                            </figure>
                        </div>
                        <div className="card-content">
                            <p className="title is-4">{externalEmployee.name}</p>
                            <p className="subtitle is-6">{externalEmployee.email}</p>
                            <p className="title is-5">{externalEmployee.department}</p>
                            <p>No. SPPI <a href="#" onClick={() => setIsOpen(externalEmployee.sppi)}>{externalEmployee.sppi}</a></p>
                        </div>
                    </div>
                </div>
            ))}

            {isOpen &&
                <div className="modal is-active">
                    <div className="modal-background" onClick={() => setIsOpen(null)} />
                    <div className="modal-content">
                        <p className="image">
                            <img src={`http://localhost:5000/images/sppi/${isOpen}.jpg`} alt={isOpen} />
                        </p>
                    </div>
                    <button className="modal-close is-large" aria-label="close"
                        onClick={() => setIsOpen(null)} />
                </div>
            }

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
    );
};

export default ExternalEmployee;