/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-scroll";
import { GrContact } from "react-icons/gr";
import logo from "./../../assets/logo/gtnlogo.jpg";

const PublicNavbar = () => {
    const [isActive, setIsActive] = useState(false);
    const colorWhite = { color: 'white' };

    return (
        <div>
            <nav className="navbar is-fixed-top" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} role="navigation" aria-label="main navigation">
                <div className="navbar-brand ml-2">
                        <img src={logo} width="100" height="28" alt="PT. GTN"/>

                    <a
                        role="button"
                        className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end mr-2">
                        {window.location.pathname === '/' ? (
                            <Link className="navbar-item" to="home" spy={true} smooth={true} offset={0} duration={500}>
                                Beranda
                            </Link>
                        ) : (
                            <a className="navbar-item" onClick={() => window.location.assign('/')}>
                                Beranda
                            </a>
                        )}


                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Informasi</a>
                            <div className="navbar-dropdown has-background-info-light">
                                <a className="navbar-item" onClick={() => window.location.assign('aboutpages')}>
                                    Tentang Perusahaan
                                </a>
                                <a className="navbar-item" onClick={() => window.location.assign('employeepages')}>
                                    Tenaga Kerja
                                </a>
                                {window.location.pathname === '/' ? (
                                    <Link className="navbar-item" to="partner" spy={true} smooth={true} offset={-50} duration={500}>
                                        Mitra Kerja
                                    </Link>
                                ) : (
                                    <a className="navbar-item" to="partner" spy={true} smooth={true} offset={-50} duration={500}>
                                        Mitra Kerja
                                    </a>
                                )}
                            </div>
                        </div>

                        {window.location.pathname === '/' ? (
                            <Link className="navbar-item" to="layanan" spy={true} smooth={true} offset={-50} duration={500}>
                                Layanan
                            </Link>
                        ) : (
                            <a className="navbar-item" onClick={() => window.location.assign('/')}>
                                Layanan
                            </a>
                        )}

                        {window.location.pathname === '/' ? (
                            <Link className="navbar-item" to="gallery" spy={true} smooth={true} offset={-50} duration={500}>
                                Gallery
                            </Link>
                        ) : (
                            <a className="navbar-item" onClick={() => window.location.assign('gallerypages')}>
                                Gallery
                            </a>
                        )}

                        {window.location.pathname === '/' ? (
                            <Link className="navbar-item" to="blog" spy={true} smooth={true} offset={-50} duration={500}>
                                Blog
                            </Link>
                        ) : (
                            <a className="navbar-item" onClick={() => window.location.assign('blogpages')}>
                                Blog
                            </a>
                        )}

                        {window.location.pathname === '/' ? (
                            <Link className="navbar-item" to="faq" spy={true} smooth={true} offset={-50} duration={500}>
                                <GrContact style={colorWhite} />
                            </Link>
                        ) : (
                            <a className="navbar-item" onClick={() => window.location.assign('/')}>
                                <GrContact style={colorWhite} />
                            </a>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default PublicNavbar;