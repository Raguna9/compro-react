import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const InboxList = () => {
    const [inboxs, setInboxs] = useState([]);

    useEffect(() => {
        getInboxs();
    }, []);

    const getInboxs = async () => {
        const response = await axios.get("http://localhost:5000/inboxs");
        setInboxs(response.data);
    };

    const deleteInbox = async (inboxId) => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');

        if (confirmDelete) {
            await axios.delete(`http://localhost:5000/inboxs/${inboxId}`);
            getInboxs();
        }
    };

    return (
        <div>
            <h1 className="title">Inboxs</h1>
            <h2 className="subtitle">List of Inboxs</h2>
            <table className="table is-striped is-fullwidth has-shadow" style={{ tableLayout: "auto" }}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message Content</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {inboxs.map((inbox, index) => (
                    <tbody key={inbox.uuid}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{inbox.email}</td>
                            <td>{inbox.subject}</td>
                            <td>{inbox.messageContent}</td>
                            <td>{moment(inbox.updatedAt).format('Do MMMM YYYY, h:mm:ss a')}</td>
                            <td style={{ width: "150px" }}>
                                <a
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${inbox.email}&su=Re: ${inbox.subject}`}
                                    className="button is-small is-primary"
                                    target="_blank" rel="noreferrer"
                                >
                                    Balas
                                </a>
                                <button
                                    onClick={() => deleteInbox(inbox.uuid)}
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

export default InboxList;