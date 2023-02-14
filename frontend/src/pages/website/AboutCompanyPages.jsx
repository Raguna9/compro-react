/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";
import logo from "../../assets/logo/gtnlogo.jpg";
import strog from "../../assets/images/strog.png";
import { BsLink45Deg } from "react-icons/bs";

const AboutCompanyPages = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isOpen, setIsOpen] = useState(null);

    return (
        <React.Fragment>
            <PublicNavbar />
            <section className="section" >
                <div className="container mt-6">
                    <h1 className="title">Tentang Perusahaan</h1>
                    <hr />
                    <div className='columns is-multiline'>
                        <div className='column is-6'>
                            <div className='section has-text-centered is-flex mb'>
                                <img src={logo} alt="PT. Global Litigation Nusantara" />
                            </div>
                        </div>
                        <div className='column is-6'>
                            <div className="tabs is-centered">
                                <ul>
                                    <li
                                        className={activeTab === 'profile' ? 'is-active' : ''}
                                        onClick={() => setActiveTab('profile')}
                                    >
                                        <a>Profil Perusahaan</a>
                                    </li>
                                    <li
                                        className={activeTab === 'vision-mission' ? 'is-active' : ''}
                                        onClick={() => setActiveTab('vision-mission')}
                                    >
                                        <a>Visi & Misi</a>
                                    </li>
                                    <li
                                        className={activeTab === 'structure' ? 'is-active' : ''}
                                        onClick={() => setActiveTab('structure')}
                                    >
                                        <a>Struktur Organisasi</a>
                                    </li>
                                    <li
                                        className={activeTab === 'permit' ? 'is-active' : ''}
                                        onClick={() => setActiveTab('permit')}
                                    >
                                        <a>Perizinan</a>
                                    </li>
                                </ul>
                            </div>
                            {activeTab === 'profile' && (
                                <div className="content">
                                    <h3 className="subtitle">Profil Perusahaan</h3>
                                    <p>
                                        PT. Global Litigation Nusantara merupakan salah satu badan usaha di Lombok Timur yang bergerak di bidang jasa penanganan tunggakan aset fidusia dan telah mendapat sertifikat Assosiasi Perusahaan Pembiayaan Indonesia (APPI) dengan  pengawasan otoritas Jasa keuangan (OJK).
                                    </p>
                                    <p>
                                        PT. Global Litigation Nusantara mewadahi Collector atau Debt Collector dalam penanganan aset fidusia yang telah mendapat pelatihan dan Sertifikasi Profesi Pembiayaan Indonesia (SPPI). PT. Global Litigation Nusantara banyak menjalin mitra kerja dengan perusahaan perbankan, koperasi dan finance.
                                    </p>
                                </div>
                            )}
                            {activeTab === 'vision-mission' && (
                                <div className="content">
                                    <h3 className="subtitle">Visi</h3>
                                    <p>
                                        - Menjalin dan menciptakan hubungan kerjasama yang baik untuk kesejahteraaan bersama.
                                    </p>
                                    <h3 className="subtitle">Misi</h3>
                                    <span>
                                        - Menciptakan dan meningkatkan kualitas hubungan kemitraan dengan lembaga Hukum dan pembiayaan untuk mencapai kesuksesan dan kesejahteraan karyawan.
                                    </span>
                                    <p>
                                        - Mencipakan kinerja yang baik antar masyarakat di dalam kemitraan.
                                    </p>
                                </div>
                            )}
                            {activeTab === 'structure' && (
                                <div className="content is-centered">
                                    <img src={strog} alt="PT. Global Litigation Nusantara" />
                                </div>
                            )}
                            {activeTab === 'permit' && (
                                <div className="content">
                                    <h3 className="subtitle">Perizinan</h3>
                                    <p>
                                        Nomor Induk Berusaha (NIB) <a className='pl-1' href="#" onClick={() => setIsOpen("NIB")}><BsLink45Deg /></a>
                                    </p>
                                </div>
                            )}
                        </div>
                        {isOpen &&
                            <div className="modal is-active">
                                <div className="modal-background" onClick={() => setIsOpen(null)} />
                                <div className="modal-content">
                                    <p className="image">
                                        <img src={`http://localhost:5000/pdfs/${isOpen}.pdf`} alt={isOpen} />
                                    </p>
                                </div>
                                <button className="modal-close is-large" aria-label="close"
                                    onClick={() => setIsOpen(null)} />
                            </div>
                        }
                    </div>
                </div>
            </section>
            <PublicFooter />
        </React.Fragment>
    );
};

export default AboutCompanyPages;
