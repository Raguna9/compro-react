import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [isOpen, setIsOpen] = useState(null);

    const style = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'inline-block',
        textOverflow: 'ellipsis',
        maxWidth: '450px'
    }
    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const response = await axios.get("http://localhost:5000/blogs");
        setBlogs(response.data);
    };

    const deleteBlog = async (blogId) => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');

        if (confirmDelete) {
            await axios.delete(`http://localhost:5000/blogs/${blogId}`);
            getBlogs();
        }
    };

    return (
        <div className="container mr-2">
            <h1 className="title">Blogs</h1>
            <h2 className="subtitle">List of Blogs</h2>
            <Link to="/blogs/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth has-shadow">
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
                    <tbody key={blog.uuid}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{blog.tittle}</td>
                            <td style={style}>{blog.content}</td>
                            <td>
                                <img src={blog.urlImage} alt={blog.tittle} onClick={() => setIsOpen(blog.urlImage)} />
                            </td>
                            <td>{blog.user.name}</td>
                            <td style={{ width: "150px" }}>
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

            {isOpen &&
                <div className="modal is-active">
                    <div className="modal-background" onClick={() => setIsOpen(null)} />
                    <div className="modal-content">
                        <p className="image">
                            <img src={isOpen} alt={isOpen} />
                        </p>
                    </div>
                    <button className="modal-close is-large" aria-label="close"
                        onClick={() => setIsOpen(null)} />
                </div>
            }
        </div>
    );
};

export default BlogList;