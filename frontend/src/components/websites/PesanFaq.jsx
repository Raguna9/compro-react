import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PesanFaq = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [messageContent, setMessageContent] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const [showAnswers, setShowAnswers] = useState({});
    const [activeQuestion, setActiveQuestion] = useState(-1);
    const [faq, setFAQs] = useState([]);

    const saveInbox = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/inboxs", {
                email: email,
                subject: subject,
                messageContent: messageContent
            });
    setEmail("");
    setSubject("");
    setMessageContent("");
            toast.success('Pesan berhasil dikirim!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
                toast.error('Form tidak boleh kosong!!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000
                });
            }
        }
    };

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
                                    <form onSubmit={saveInbox}>
                                        <h4 className="subtitle has-text-centered">Pesan</h4>
                                        <div className="field">
                                            <label className="label">Email</label>
                                            <div className="control">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
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
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    placeholder="Tittle"
                                                />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Isi Pesan</label>
                                            <div className="control">
                                                <textarea
                                                    className="textarea"
                                                    value={messageContent}
                                                    onChange={(e) => setMessageContent(e.target.value)}
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

                                                <ToastContainer />
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
                                        <div key={index}>
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
                                    <a href="gallerypages" className="button is-primary is-fullwidth mt-4">Selengkapnya</a>

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