import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PesanFaq = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [messageContent, setMessageContent] = useState("");
    const [msg, setMsg] = useState("");
    const [faq, setFAQs] = useState([]);
    const [isOpen, setIsOpen] = useState(null);

    const saveInbox = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/inboxs", {
                name: name,
                email: email,
                messageContent: messageContent
            });
        } catch (error) {
            setIsOpen(false)
            if (error.response) {
                setMsg(error.response.data.msg);
                toast.error(`${msg}`, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    };
    const handleRefresh = () => {
        window.location.reload();
        setIsOpen(null)
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
                        <div className="card has-background-light">
                            <div className="card-content">
                                <div className="content">
                                    <form onSubmit={saveInbox}>
                                        <h4 className="subtitle has-text-centered">Pesan</h4>
                                        <div className="field">
                                            <label className="label">Nama</label>
                                            <div className="control">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Email</label>
                                            <div className="control">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="example@gmail.com"
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
                                                    placeholder="Isi Pesan ..."
                                                    rows="5">
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <button onClick={() => setIsOpen(true)} type="submit" className="button is-success">
                                                    Kirim
                                                </button>

                                                <ToastContainer limit={1} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="card has-background-light">
                            <div className="card-content">
                                <div className="content" style={{ height: "443px" }}>
                                    <h4 className="subtitle has-text-centered">Frequently Ask Questions</h4>
                                    {faq.slice(0, 1).map((faq, index) => (
                                        <div className="py-3" key={index}>
                                            <h5 className="subtitle is-6">
                                                {faq.question}
                                            </h5>
                                            <p style={{ fontSize: '13px', textAlign: 'justify', textJustify: 'inter-word' }}>{faq.answer}</p>
                                        </div>
                                    ))}
                                    <a href="faqpages" className="button is-primary is-fullwidth mt-4">Lihat Semua FAQ</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {name && email && messageContent && isOpen &&
                        <div className="modal is-active">
                            <div className="modal-background" onClick={() => setIsOpen(null)} />
                                <div className="card has-background-white">
                                    <div className="card-content">
                                        <h3 className="title is-5 has-text-centered mx-6 pb-4">Pesan Terkirim</h3>
                                        <button className="button is-primary is-fullwidth"
                                            onClick={handleRefresh}>OK</button>
                                    </div>
                            </div>
                        </div>
                }                      
                
            </div>

        </section>
    );
};

export default PesanFaq;