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

    const style = {
        paddingTop: '0',
        overflow: 'hidden',
        whiteSpace: 'normal',
        display: 'block',
        textOverflow: 'ellipsis',
        maxHeight: '278px',
        fontSize: '13px'
    }

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
        <div className="container">
            <section id="faq" className='mx-6 py-4'>
                <h1 className="title is-4">Hubungi Kami</h1>
                <div className="columns is-multiline">
                    <div className="column is-8">
                        <div className="card has-background-light">
                            <div className="subtitle has-text-centered pt-3"><strong>Pesan</strong></div>
                            <div className="card-content">
                                <form onSubmit={saveInbox}>
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
                                                rows="2">
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

                    <div className="column is-4">
                        <div className="card has-background-light">
                            <div className="card-header-title subtitle has-text-centered mx-5 px-5"><strong>Frequently Ask Questions</strong></div>
                            <div className="content" style={{
                                paddingTop: '0'
                            }}>
                                {faq.slice(0, 1).map((faq, index) => (
                                    <div
                                        key={index}
                                        className="px-5"
                                        style={style}
                                    >
                                        <div
                                            style={style}
                                        >
                                            <strong className="py-3">
                                                {faq.question}
                                            </strong>
                                            <br />
                                            {faq.answer}
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <footer className="card-footer pb-4 px-4 ">
                                <a href="faqpages" className="button is-info is-rounded card-footer-item">Lihat Semua FAQ</a></footer>
                        </div>
                    </div>
                </div>

                {name && email && messageContent && isOpen &&
                    <div className="modal is-active">
                        <div className="modal-background" onClick={handleRefresh} />
                        <div className="card has-background-white has-text-centered">
                            <div className="card-header-title mx-6 px-6">Pesan Terkirim</div>
                            <p>Terimakasih sudah mengirimkan pesan</p>
                            <div className="mx-4 my-4 pt-3">
                                <button className="button is-primary mx-6" onClick={handleRefresh}>OK</button>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </div>
    );
};

export default PesanFaq;