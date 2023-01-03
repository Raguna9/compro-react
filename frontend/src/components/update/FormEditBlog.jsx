import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditBlog = () => {
    const [tittle, setTittle] = useState("");
    const [content, setContent] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getBlogById = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/blogs/${id}`
                );
                setTittle(response.data.tittle);
                setContent(response.data.content);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getBlogById();
    }, [id]);

    const updateBlog = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/blogs/${id}`, {
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
            <h2 className="subtitle">Edit Blog</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateBlog}>
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
                                        Update
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

export default FormEditBlog;