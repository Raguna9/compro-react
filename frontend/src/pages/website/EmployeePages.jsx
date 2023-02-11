/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";
import Employee from "../../components/websites/karyawan/Employee";
import ExternalEmployee from "../../components/websites/karyawan/ExternalEmployee";

const EmployeePages = () => {
    const [currentComponent, setCurrentComponent] = useState('internal');

    return (
        <React.Fragment>
            <PublicNavbar />
            <div className="section">
                <div className="container">
                    <h1 className="title has-text-centered mt-5">Our Employee</h1>

                    <div>
                        <nav className="navbar mb-4" style={{zIndex: "2"}}>
                            <div className="navbar-menu">
                                <a href="/" className="button is-primary mt-2">Back to Homepage</a>
                                <div className="navbar-end">
                                    <a
                                        className={`navbar-item ${currentComponent === 'internal' ? 'is-active' : ''}`}
                                        style={{ background: currentComponent === 'internal' ? '#f5f5f5' : 'none' }}
                                        onClick={() => setCurrentComponent('internal')}
                                    >
                                        Internal Employee
                                    </a>
                                    <a
                                        className={`navbar-item ${currentComponent === 'external' ? 'is-active' : ''}`}
                                        style={{ background: currentComponent === 'external' ? '#f5f5f5' : 'none' }}
                                        onClick={() => setCurrentComponent('external')}
                                    >
                                        External Employee
                                    </a>
                                </div>
                            </div>
                        </nav>

                        {currentComponent === 'internal' && <Employee />}
                        {currentComponent === 'external' && <ExternalEmployee />}
                    </div>
                </div>
            </div>
            <PublicFooter />
        </React.Fragment>
    );
};

export default EmployeePages;
