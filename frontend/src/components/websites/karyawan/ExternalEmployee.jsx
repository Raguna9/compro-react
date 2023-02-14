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
                <div key={externalEmployee.id} className="column is-3">
                    <div className="card">
                        <figure
                            className="image"
                            style={{ position: "relative", backgroundColor: "#E80510" }}
                        >
                            <img
                                src={externalEmployee.urlImage}
                                // className="is-rounded"
                                alt={externalEmployee.description}
                                // onClick={() => setActiveImage(externalEmployee.urlImage)}
                            // style={{ objectFit: "cover" }}
                            />
                        </figure>
                        <div className="card-content">
                            <p style={{ fontSize: "14px", fontWeight: "bold" }}>{externalEmployee.name}</p>
                            <p style={{ fontSize: "10px" }}>{externalEmployee.email}</p>
                            <p className='pt-2' style={{ fontSize: "12px" }}>{externalEmployee.department}</p>
                            <span style={{ fontSize: "10px" }}>
                                <p>No. SPPI
                                    <a className='pl-1' href="#" onClick={() => setIsOpen(externalEmployee.sppi)}>{externalEmployee.sppi}</a>
                                </p>
                            </span>
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
