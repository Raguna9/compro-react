import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/hr_08.png";

const Home = () => {

    return (
            <section id="home">
                <div className="container is-full-desktop">
                    <div className="columns">
                        <div className="column is-half mt-6">
                            <h1 className="title pt-6 mt-6">PT. Global Litigation Nusantara</h1>
                            <h2 className="subtitle">
                                A simple container to divide your page into <strong>sections</strong>,
                                like the
                                <br />
                                one you're currently reading.
                            </h2>
                            <Link
                                to={`/`}
                                className="button is-primary"
                            >
                                Informasi Selengkapnya
                            </Link>
                        </div>
                        <div className="column is-align-content-center">
                            <figure className="image pr-6" style={{ width: '552px', height: '420px' }}>
                                <img src={img} alt="Nego" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Home;