/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FAQList = () => {
    const [faqs, setFAQs] = useState([]);

    useEffect(() => {
        getFAQs();
    }, []);

    const getFAQs = async () => {
        const response = await axios.get("http://localhost:5000/faqs");
        setFAQs(response.data);
    };

    const deleteFAQ = async (faqId) => {
        const confirmDelete = window.confirm(
            `
                <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                    <p className="modal-card-title">Konfirmasi Hapus</p>
                    <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                    Apakah Anda yakin ingin menghapus data ini?
                    </section>
                    <footer className="modal-card-foot">
                    <button className="button is-danger" onclick="document.querySelector('.modal').classList.remove('is-active')">Tidak</button>
                    <button className="button is-success" onclick="window.confirmDelete()">Ya</button>
                    </footer>
                </div>
                </div>
            `
        );

        if (confirmDelete) {
            await axios.delete(`http://localhost:5000/faqs/${faqId}`);
            getFAQs();
        }
    };

    return (
        <div>
            <h1 className="title">FAQs</h1>
            <h2 className="subtitle">List of FAQs</h2>
            <Link to="/faqs/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth has-shadow" style={{ tableLayout: "auto" }}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {faqs.map((faq, index) => (
                    <tbody
                    // style={{ height: "300px", display: "", overflow: "hidden", wordBreak: "break-all" }}
                    >
                        <tr key={faq.uuid}>
                            <td>{index + 1}</td>
                            <td>{faq.question}</td>
                            <td
                            // style={{ width: "300px" }}
                            >{faq.answer}</td>
                            <td style={{ width: "150px" }} s>
                                <Link
                                    to={`/faqs/edit/${faq.id}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteFAQ(faq.uuid)}
                                    className="button is-small is-danger ml-1"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default FAQList;