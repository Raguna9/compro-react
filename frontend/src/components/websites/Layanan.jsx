import React from "react";

const Layanan = () => {

    return (
        <div>
            <section id="layanan" className="section">
                <div className="container">
                    <h1 className="title has-text-centered">Professional Security for Your Fiduciary Assets</h1>
                    <h2 className="subtitle has-text-centered">
                        Kami menyediakan jasa pengamanan aset fidusia yang professional untuk melindungi kekayaan Anda.
                    </h2>

                    <div className="columns is-vcentered">
                        <div className="column is-4">
                            <div className="card" style={{height: '230px'}}>
                                <div className="card-content">
                                    <h3 className="title is-4">Surveillance and Monitoring</h3>
                                    <p>
                                        Kami menyediakan sistem pemantauan dan pengawasan yang canggih untuk memastikan aset fidusia Anda selalu terlindungi.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="column is-4">
                            <div className="card" style={{height: '230px'}}>
                                <div className="card-content">
                                    <h3 className="title is-4">Risk Assessment and Management</h3>
                                    <p>
                                        Kami melakukan evaluasi risiko dan mengelola risiko terkait dengan aset fidusia Anda agar terhindar dari ancaman keamanan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="column is-4">
                            <div className="card" style={{height: '230px'}}>
                                <div className="card-content">
                                    <h3 className="title is-4">Security Consulting</h3>
                                    <p>
                                        Kami menyediakan layanan konsultasi keamanan untuk membantu Anda memahami kebutuhan keamanan aset fidusia Anda dan mengembangkan strategi keamanan yang tepat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Layanan;