/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";

function FAQPages() {
    const [faqs, setFaqs] = useState([]);
    const [showAnswers, setShowAnswers] = useState({});
    const [activeQuestion, setActiveQuestion] = useState(-1);

    useEffect(() => {
        const getFaqs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/faqs');
                setFaqs(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getFaqs();
    }, []);

    const handleClick = (index) => {
        setActiveQuestion(index === activeQuestion ? -1 : index);
        setShowAnswers({
            ...showAnswers,
            [index]: !showAnswers[index],
        });
    };
    return (
        <React.Fragment>
            <PublicNavbar />
            <div className="container">
                <section className="section">
                    <h1 className="title has-text-centered mt-6">Frequently Asked Questions</h1>
                    <p className="subtitle has-text-centered is-6">Berikut beberapa pertanyaan yang sering ditanyakan</p>
                    <div className="columns">
                        <div className="column">
                            {faqs.map((faq, index) => (
                                <div key={index} className="mt-4">
                                    <h2 className="subtitle">
                                        <button
                                            className="button is-primary is-fullwidth is-outlined is-block is-flex"
                                            onClick={() => handleClick(index)}
                                            style={{ margin: "0" }}
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
                </section>
            </div>
            <PublicFooter />
        </React.Fragment>
    );
}

export default FAQPages;