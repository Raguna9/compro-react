/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { Link } from "react-router-dom";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";

const PublicFooter = () => {

    return (
        <div className="has-background-white is-fullwidth px-6">
            <hr />
            <div className="columns">
                <div className="column is-8">
                    {/* <h1 className="title is-4">Hubungi Kami</h1> */}
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <p>
                                Jalan Raya Sikur - Mataram km. 41
                            </p>
                            <p>
                                Lombok Timur
                            </p>
                            <p>
                                Nusa Tenggara Barat 83662
                            </p>
                            <br />
                            <p>
                                <AiFillPhone /> (0376)2992597
                            </p>
                            <p>
                                <AiTwotoneMail /> globallitigationnusantara@gmail.com
                            </p>
                        </div>
                        <div className="column is-6">
                            <p>
                                Jika memiliki pertanyaan silakan menghubungi kami melalui beberapa jalur yang tertera.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    {/* <h3 className="subtitle has-text-white-ter has-text-centered pt-6">Tambahan</h3> */}
                    <div className="columns is-centered">
                        <div className="column has-text-info is-6">
                            <a href="/faqpages"><p className="pb-1">FAQ</p></a>
                            <a href="/blogpages"><p className=" pb-1">Blog</p></a>
                            <a href="/gallerypages"><p className=" pb-1">Gallery</p></a>
                            <a href="/aboutpages"><p className=" pb-1">Tentang Perusahaan</p></a>
                            <a href="/employeepages"><p className=" pb-1">Tenaga Kerja</p></a>
                            <a to="partner"><p className=" pb-1">Mitra Kerja</p></a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="has-text-centered pb-3 is-size-7">
                © 2023 PT. Global Litigation Nusantara
            </p>
        </div>
    );
};

export default PublicFooter;