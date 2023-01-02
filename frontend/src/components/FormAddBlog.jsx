import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddBlog = () => {
    const [tittle, setTittle] = useState("");
    const [content, setContent] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveBlog = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/blogs", {
                tittle: tittle,
                content: content,
            });
            navigate("/blogs");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div>
            <h1 className="title">Blogs</h1>
            <h2 className="subtitle">Add New Blog</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveBlog}>
                            <p className="has-text-centered">{msg}</p>
                            <div className="field">
                                <label className="label">Tittle</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={tittle}
                                        onChange={(e) => setTittle(e.target.value)}
                                        placeholder="Tittle"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Content</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        placeholder="Content"
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAddBlog;