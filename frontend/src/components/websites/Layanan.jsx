import React from "react";

const Layanan = () => {

    return (
        <div>
            <section id="layanan" className="section">
                <div className="container">
                    <h1 className="title has-text-centered">Professional Security for Your Fiduciary Assets</h1>
                    <h2 className="subtitle has-text-centered">
                        Kami menyediakan jasa pengamanan aset fidusia yang professional untuk melindungi aset Anda.
                    </h2>

                    <div className="columns is-vcentered">
                        <div className="column is-4">
                            <div className="card has-background-white-ter" style={{height: '230px'}}>
                                <div className="card-content">
                                    <h3 className="title is-5 has-text-centered">Professional and Secure</h3>
                                    <p>
                                        Kami sudah memiliki sertifikasi dari Otoritas Jasa Keuangan (OJK) dan tenaga kerja kami sudah melakukan pelatihan dan memiliki Sertifikasi Profesi Pembiayaan Indonesia (SPPI).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="column is-4">
                            <div className="card has-background-white-ter" style={{height: '230px'}}>
                                <div className="card-content">
                                    <h3 className="title is-5 has-text-centered">Risk Assessment and Management</h3>
                                    <p>
                                        Kami melakukan evaluasi risiko dan mengelola risiko terkait dengan aset fidusia Anda agar terhindar dari ancaman keamanan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="column is-4">
                            <div className="card has-background-white-ter" style={{height: '230px'}}>
                                <div className="card-content">
                                    <h3 className="title is-5 has-text-centered">Security Consulting</h3>
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