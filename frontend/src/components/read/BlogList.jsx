/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const response = await axios.get("http://localhost:5000/blogs");
        setBlogs(response.data);
    };

    const deleteBlog = async (blogId) => {
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
            await axios.delete(`http://localhost:5000/blogs/${blogId}`);
            getBlogs();
        }
    };

    return (
        <div>
            <h1 className="title">Blogs</h1>
            <h2 className="subtitle">List of Blogs</h2>
            <Link to="/blogs/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth has-shadow" style={{ tableLayout: "auto" }}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Tittle</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Created By</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {blogs.map((blog, index) => (
                    <tbody
                    // style={{ height: "300px", display: "", overflow: "hidden", wordBreak: "break-all" }}
                    >
                        <tr key={blog.uuid}>
                            <td>{index + 1}</td>
                            <td>{blog.tittle}</td>
                            <td
                            // style={{ width: "300px" }}
                            >{blog.content}</td>
                            <td
                            // style={{ width: "200px" }}
                            >
                                <figure className="image">
                                    <img src={blog.urlImage} alt="Image" />
                                </figure>
                            </td>
                            <td>{blog.user.name}</td>
                            <td style={{ width: "150px" }} s>
                                <Link
                                    to={`/blogs/edit/${blog.uuid}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteBlog(blog.uuid)}
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

export default BlogList;