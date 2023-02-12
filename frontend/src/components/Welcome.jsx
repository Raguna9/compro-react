import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Welcome = () => {
    const { user } = useSelector((state) => state.auth);
    const [countInbox, setCountInbox] = useState(0);
    const [countBlog, setCountBlog] = useState(0);
    const [countGallery, setCountGallery] = useState(0);

    const getCount = async () => {
        try {
            const responseInbox = await axios.get("http://localhost:5000/inboxs/count");
            setCountInbox(responseInbox.data.count);
            const responseBlog = await axios.get("http://localhost:5000/blogs/count");
            setCountBlog(responseBlog.data.count);
            const responseGallery = await axios.get("http://localhost:5000/gallerys/count");
            setCountGallery(responseGallery.data.count);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCount();
    }, []);


    return (
        <div>
            <h1 className="title">Dashboard</h1>
            <h2 className="subtitle">
                Welcome Back <strong>{user && user.name}</strong>
            </h2>
            <div className="container mr-2">
                <div className="columns is-multiline">
                    <div className="column is-3">
                        {/* <h1 className="title has-text-centered">Pesan</h1> */}
                        <div className="card has-background-info">
                            <div className="card-content">
                                <div className="content" style={{ height: "160px" }}>
                                    <div className="has-text-centered pt-5">
                                        <h1 className="title has-text-white-ter">{countInbox}</h1>
                                        <h2 className="title has-text-white-ter">Total Inbox</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        {/* <h1 className="title has-text-centered">FAQ</h1> */}
                        <div className="card has-background-primary">
                            <div className="card-content">
                                <div className="content" style={{ height: "160px" }}>
                                    <div className="has-text-centered pt-5">
                                        <h1 className="title has-text-white-ter">15</h1>
                                        <h2 className="title has-text-white-ter">Total Pengunjung</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        {/* <h1 className="title has-text-centered">FAQ</h1> */}
                        <div className="card has-background-success">
                            <div className="card-content">
                                <div className="content" style={{ height: "160px" }}>
                                    <div className="has-text-centered pt-5">
                                        <h1 className="title has-text-white-ter">{countBlog}</h1>
                                        <h2 className="title has-text-white-ter">Total Blog</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        {/* <h1 className="title has-text-centered">FAQ</h1> */}
                        <div className="card has-background-danger">
                            <div className="card-content">
                                <div className="content" style={{ height: "160px" }}>
                                    <div className="has-text-centered pt-5">
                                        <h1 className="title has-text-white-ter">{countGallery}</h1>
                                        <h2 className="title has-text-white-ter">Total Gallery</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;