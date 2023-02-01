/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-scroll";
import { GrContact } from "react-icons/gr";
// import "../../assets/logo/gtnlogo.jpg";


const PublicNavbar = () => {
    const [isActive, setIsActive] = useState(false);

    const colorWhite = { color: 'white' };


    return (
        <div>
            <nav class="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation">
                <div class="navbar-brand ml-2">
                    <Link to={`/`}>
                        <a class="navbar-item">
                            <h1
                                className="title is-4 has-text-white-ter pt-1"
                            // style={{ 
                            //     fontFamily: "'Bungee', sans-serif", 
                            //     color: "white" 
                            // }}
                            >
                                PT. Global Litigation Nusantara
                            </h1>
                            {/* <img src="gtnlogo.jpg" alt="Logo GTN" /> */}
                        </a>
                    </Link>

                    <a
                        role="button"
                        class={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
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
                <div id="navbarBasicExample" class={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div class="navbar-end mr-2">
                        {window.location.pathname === '/' ? (
                            <Link className="navbar-item" to="home" spy={true} smooth={true} offset={0} duration={500}>
                                Beranda
                            </Link>
                        ) : (
                            <a className="navbar-item" onClick={() => window.location.assign('/')}>
                                Beranda
                            </a>
                        )}


                        <div class="navbar-item has-dropdown is-hoverable">
                            <Link class="navbar-link">
                                Informasi
                            </Link>
                            <div class="navbar-dropdown has-background-info-light">
                                <Link class="navbar-item" onClick={() => window.location.assign('aboutpages')}>
                                    Tentang Perusahaan
                                </Link>
                                <Link class="navbar-item" onClick={() => window.location.assign('employeepages')}>
                                    Karyawan
                                </Link>
                                <Link class="navbar-item" onClick={() => window.location.assign('mitrapages')}>
                                    Mitra Kerja
                                </Link>
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
                            <Link class="navbar-item" to="footer" spy={true} smooth={true} offset={-50} duration={500}>
                                <GrContact style={colorWhite} />
                            </Link>
                        ) : (
                            <a className="navbar-item" onClick={() => window.location.assign('contactpages')}>
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