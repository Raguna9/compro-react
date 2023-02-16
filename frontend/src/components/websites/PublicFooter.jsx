/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { Link } from "react-router-dom";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";

const PublicFooter = () => {

    return (
        <div className="container is-full-widescreen px-3">
            <hr />
            <div className="columns" style={{marginBottom: '0', paddingBottom: '0'}}>
                <div className="column is-8">
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
            <p className="has-text-centered pb-2 is-size-7">
                © 2023 PT. Global Litigation Nusantara
            </p>
        </div>
    );
};

export default PublicFooter;