/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";
import Employee from "../../components/websites/karyawan/Employee";
import ExternalEmployee from "../../components/websites/karyawan/ExternalEmployee";

const EmployeePages = () => {
    const [activeTab, setActiveTab] = useState('Internal');

    return (
        <React.Fragment>
            <PublicNavbar />
            <div className="container mt-6 py-6">
                {/* <h1 className="title">Tenaga Kerja</h1> */}
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Beranda</a></li>
                        <li class="is-active"><a href="#">Tenaga Kerja</a></li>
                    </ul>
                </nav>
                <div className="tabs is-small is-boxed">
                    <ul>
                        <li
                            className={activeTab === 'Internal' ? 'is-active' : ''}
                            onClick={() => setActiveTab('Internal')}
                        >
                            <a>Internal</a>
                        </li>
                        <li
                            className={activeTab === 'Eksternal' ? 'is-active' : ''}
                            onClick={() => setActiveTab('Eksternal')}
                        >
                            <a>External</a>
                        </li>
                    </ul>
                </div>
                {activeTab === 'Internal' && <Employee />}
                {activeTab === 'Eksternal' && <ExternalEmployee />}
            </div>
            <PublicFooter />
        </React.Fragment>
    );
};

export default EmployeePages;
