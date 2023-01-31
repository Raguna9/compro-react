import React from "react";
import { Link } from "react-router-dom";

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
                                <img src="https://img.freepik.com/free-vector/recruiting-agency-isometric-illustration-coworkers-candidate-employer-3d-cartoon-characters-headhunting-human-resources-department_575670-1091.jpg?w=740&t=st=1672926798~exp=1672927398~hmac=49f623789e956e78c6f0660b26141c684f93a107431f6432480a58f45bf2aab0" alt="Nego" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Home;