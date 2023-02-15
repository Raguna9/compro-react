/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [activeImage, setActiveImage] = useState(null);
    const [isOpen, setIsOpen] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    return (

        <div className='has-has-background-grey-light'>
            <div className="columns is-multiline">
                {employees.map(employee => (
                    <div key={employee.uuid} className="column is-3">
                        <div className="card">
                            <figure
                                className="image"
                                style={{ position: "relative", backgroundColor: "#E80510" }}
                            >
                                <img
                                    src={employee.urlImage}
                                    // className="is-rounded"
                                    alt={employee.description}
                                    // onClick={() => setActiveImage(employee.urlImage)}
                                // style={{ objectFit: "cover" }}
                                />
                            </figure>
                            <div className="card-content">
                                <p style={{ fontSize: "14px", fontWeight: "bold" }}>{employee.name}</p>
                                <p style={{ fontSize: "10px" }}>{employee.email}</p>
                                <p className='pt-2' style={{ fontSize: "12px" }}>{employee.department}</p>
                                <span style={{ fontSize: "10px" }}>
                                    <p>No. SPPI
                                        <a className='pl-1' href="#" onClick={() => setIsOpen(employee.sppi)}>{employee.sppi}</a>
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

        </div>
    );
};

export default Employee;
