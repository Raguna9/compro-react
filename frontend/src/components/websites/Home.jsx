import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/hr_08.png";

const Home = () => {

    return (
        <div className="container mt-6 pt-6 pb-4">
            <section id="home">
                <div className="columns is-multiline">
                    <div className="column is-6 mt-6 pl-6">
                        <h1 className="title pt-6 mt-6 pb-4">PT. Global Litigation Nusantara</h1>
                        <h2 className="subtitle is-6">
                            Let us simplify your debt recovery process with our
                            <br />
                            professional and hassle-free services.
                        </h2>
                        <Link
                            to={`/aboutpages`}
                            className="button is-primary"
                        >
                            Informasi Selengkapnya
                        </Link>
                    </div>
                    <div className="column is-6">
                            <img src={img} alt="Nego" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;