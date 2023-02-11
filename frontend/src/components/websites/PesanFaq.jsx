import React, { useState, useEffect } from "react";
import axios from 'axios';

const PesanFaq = () => {
    const [showAnswers, setShowAnswers] = useState({});
    const [activeQuestion, setActiveQuestion] = useState(-1);
    const [faq, setFAQs] = useState([]);

    const handleClick = (index) => {

        setActiveQuestion(index === activeQuestion ? -1 : index);
        setShowAnswers({
            ...showAnswers,
            [index]: !showAnswers[index],
        });
    };

    useEffect(() => {
        axios.get('http://localhost:5000/faqs')
            .then(response => setFAQs(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <section className="section has-background-grey-lighter" id="faq">
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-8">
                        {/* <h1 className="title has-text-centered">Pesan</h1> */}
                        <div className="card has-background-light">
                            <div className="card-content">
                                <div className="content">
                                    <form>
                                        <h4 className="subtitle has-text-centered">Pesan</h4>
                                        <div className="field">
                                            <label className="label">Email</label>
                                            <div className="control">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    // value={tittle}
                                                    // onChange={(e) => setTittle(e.target.value)}
                                                    placeholder="Tittle"
                                                />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Subjek</label>
                                            <div className="control">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    // value={tittle}
                                                    // onChange={(e) => setTittle(e.target.value)}
                                                    placeholder="Tittle"
                                                />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Isi Pesan</label>
                                            <div className="control">
                                                <textarea
                                                    className="textarea"
                                                    // value={content}
                                                    // onChange={(e) => setContent(e.target.value)}
                                                    placeholder="Content"
                                                    rows="10">
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <button type="submit" className="button is-success">
                                                    Kirim
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4">
                        {/* <h1 className="title has-text-centered">FAQ</h1> */}
                        <div className="card has-background-light">
                            <div className="card-content">
                                <div className="content" style={{ height: "562px" }}>
                                    <h4 className="subtitle has-text-centered">Frequently Ask Questions</h4>
                                    <hr />
                                    {faq.map((faq, index) => (
                                        <div key={index} className="box">
                                            <h2 className="subtitle">
                                                <button
                                                    className="button is-primary is-fullwidth is-outlined is-block is-flex"
                                                    onClick={() => handleClick(index)}
                                                    // style={{ height: "auto", minHeight: "2.25em", padding: "0.75em 1.5em" }}
                                                >
                                                    {faq.question}
                                                </button>
                                            </h2>
                                            {index === activeQuestion && (
                                                <p>{faq.answer}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PesanFaq;