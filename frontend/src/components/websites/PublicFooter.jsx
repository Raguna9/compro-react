/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { Link } from "react-router-dom";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";

const PublicFooter = () => {

    return (
        <div>
            <footer class="footer has-background-info-dark" id="footer">
                <div class="container">
                    <h1 className="title has-text-white-ter has-text-centered">Hubungi Kami</h1>
                    <p className="subtitle  has-text-centered has-text-primary">PT. Global Litigation Nusantara</p>
                    <div class="columns is-centered has-text-white-ter">
                        <div class="column is-4" style={{ height: '100px' }}>
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
                        <div class="column is-4">
                            <p>
                                Jika memiliki pertanyaan silakan menghubungi kami melalui beberapa jalur yang tertera.
                            </p>
                        </div>
                    </div>

                </div>
            </footer>
            <p className="has-background-info-dark has-text-centered has-text-white pb-3 is-size-7">
                © 2023 PT. Global Litigation Nusantara
            </p>
        </div>
    );
};

export default PublicFooter;