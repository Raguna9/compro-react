/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormAddBlog = () => {
    const [tittle, setTittle] = useState("");
    const [content, setContent] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    const saveBlog = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("tittle", tittle);
        formData.append("content", content);
        try {
            await axios.post("http://localhost:5000/blogs", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/blogs")
        } catch (error) {
            setMsg(error.response.data.msg);
            toast.error('Form tidak boleh kosong!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        }
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }

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
                                    <textarea
                                        class="textarea"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        placeholder="Content"
                                        rows="10">
                                    </textarea>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Image</label>
                                <div className="control">
                                    <div className="file">
                                        <label className="file-label">
                                            <input
                                                type="file"
                                                className="file-input"
                                                onChange={loadImage}
                                            />
                                            <span className="file-cta">
                                                <span className="file-label">Choose a file...</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {preview ? (
                                <figure className="image is-128x128">
                                    <img src={preview} alt="Preview Image" />
                                </figure>
                            ) : (
                                ""
                            )}

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

export default FormAddBlog;