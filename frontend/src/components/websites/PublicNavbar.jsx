/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {

    return (
        <div>
            <nav class="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    
                    <Link to={`/login`}>
                    <a class="navbar-item">
                        <h1 className="pt-3 is-hoverable" style={{ fontFamily: "'Bungee', sans-serif", color: "white" }}>PT. Global Litigation Nusantara</h1>
                    </a>
                    </Link>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item">
                            Beranda
                        </a>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Informasi
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    Tentang Perusahaan
                                </a>
                                <a class="navbar-item">
                                    Karyawan
                                </a>
                                <a class="navbar-item">
                                    Mitra Kerja
                                </a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item">
                                    Kontak
                                </a>
                            </div>
                        </div>
                        <a class="navbar-item">
                            Layanan
                        </a>
                        <a class="navbar-item">
                            Blog
                        </a>

                        
                        <div class="navbar-item">
                                <Link
                                    to={`/login`}
                                    className="button is-primary"
                                >
                                    Log In
                                </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default PublicNavbar;