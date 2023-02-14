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
                        <nav className="navbar mb-4" style={{ zIndex: "2" }}>
                            <a
                                className={`navbar-item ${currentComponent === 'internal' ? 'is-active' : ''} has-text-centered`}
                                style={{
                                    background: currentComponent === 'internal' ? '#0F172A' : 'none',
                                    borderRadius: "1em",
                                    color: currentComponent === 'internal' ? 'white' : 'black'
                                }}
                                onClick={() => setCurrentComponent('internal')}
                            >
                                Internal Employee
                            </a>
                            <a
                                className={`navbar-item ${currentComponent === 'external' ? 'is-active' : ''} has-text-centered`}
                                style={{
                                    background: currentComponent === 'external' ? '#0F172A' : 'none',
                                    borderRadius: "1em",
                                    color: currentComponent === 'external' ? 'white' : 'black'
                                }}
                                onClick={() => setCurrentComponent('external')}
                            >
                                External Employee
                            </a>
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
