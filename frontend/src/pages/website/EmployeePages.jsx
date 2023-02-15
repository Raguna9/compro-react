/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";
import Employee from "../../components/websites/karyawan/Employee";
import ExternalEmployee from "../../components/websites/karyawan/ExternalEmployee";

const EmployeePages = () => {
    const [activeTab, setActiveTab] = useState('internal');

    return (
        <React.Fragment>
            <PublicNavbar />
            <section className="section" >
                <div className="container mt-6">
                    <h1 className="title">Tenaga Kerja</h1>
                    <div className="tabs is-small is-boxed">
                        <ul>
                            <li
                                className={activeTab === 'internal' ? 'is-active' : ''}
                                onClick={() => setActiveTab('internal')}
                            >
                                <a>Internal</a>
                            </li>
                            <li
                                className={activeTab === 'eksternal' ? 'is-active' : ''}
                                onClick={() => setActiveTab('eksternal')}
                            >
                                <a>External</a>
                            </li>
                        </ul>
                    </div>
                    {activeTab === 'internal' && <Employee />}
                    {activeTab === 'eksternal' && <ExternalEmployee />}
                </div>
            </section>
            <PublicFooter />
        </React.Fragment>
    );
};

export default EmployeePages;
