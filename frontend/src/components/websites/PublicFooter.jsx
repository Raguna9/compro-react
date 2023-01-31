/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { Link } from "react-router-dom";

const PublicFooter = () => {

    return (
        <div>
            <footer class="footer has-background-info-dark has-text-white-ter" id="footer">
                <div class="container">
                    <div class="columns">
                        <div class="column is-4">
                            <h3 class="title is-3 has-text-white-ter">Tentang Kami</h3>
                            <p>
                                Kami adalah perusahaan jasa pengamanan aset fidusia yang telah berpengalaman selama bertahun-tahun dalam menangani keamanan aset para pelanggan kami.
                            </p>
                        </div>
                        <div class="column is-4">
                            <h3 class="title is-3 has-text-white-ter">Layanan Kami</h3>
                            <ul>
                                <li>Surveillance and Monitoring</li>
                                <li>Risk Assessment and Management</li>
                                <li>Security Consulting</li>
                            </ul>
                        </div>
                        <div class="column is-4">
                            <h3 class="title is-3 has-text-white-ter">Kontak Kami</h3>
                            <p>
                                Telp: (123) 456-7890<br />
                                Email: info@securitycompany.com
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default PublicFooter;