import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    return (

        <div className='has-has-background-grey-light'>
            <div className="columns is-multiline">
                {employees.map(employee => (
                    <div key={employee.id} className="column is-one-third">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-3by2 has-text-centered">
                                    <img src={employee.urlImage} alt={employee.description}
                                        onClick={() => setActiveImage(employee.urlImage)} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="title is-4">{employee.name}</p>
                                <p className="subtitle is-6">{employee.email}</p>
                                <p className="title is-5">{employee.department}</p>
                                <a href={employee.sppi}>{employee.sppi}</a>
                                <p className="content">You can choose a specific size for each viewport width. You simply need to append the viewport width to the size modifier.</p>
                            </div>
                        </div>
                    </div>
                ))}
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
