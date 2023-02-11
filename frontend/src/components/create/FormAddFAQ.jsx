/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormAddFAQ = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveFAQ = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/faqs", {
                question: question,
                answer: answer
            });
            navigate("/faqs");
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

    return (
        <div>
            <h1 className="title">FAQs</h1>
            <h2 className="subtitle">Add New FAQ</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveFAQ}>
                            <p className="has-text-centered">{msg}</p>
                            <div className="field">
                                <label className="label">Question</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                        placeholder="Question"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Answer</label>
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        placeholder="Answer"
                                        rows="10">
                                    </textarea>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success">
                                        Save
                                    </button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAddFAQ;