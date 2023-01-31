/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        await axios.delete(`http://localhost:5000/blogs/${blogId}`);
        toast.success('Data Deleted!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
        getBlogs();
    };
    const styles = {
        width: "200px",
        height: "40%"
    }

    return (
        <div>
            <h1 className="title">Blogs</h1>
            <h2 className="subtitle">List of Blogs</h2>
            <Link to="/blogs/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth">
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
                <tbody style={{height: "40%"}}>
                    {blogs.map((blog, index) => (
                        <tr key={blog.uuid}>
                            <td>{index + 1}</td>
                            <td style={styles}>{blog.tittle}</td>
                            <td style={styles}>{blog.content}</td>
                            <td style={styles}>
                                <figure className="image is-1by1">
                                    <img src={blog.urlImage} alt="Image" />
                                </figure>
                            </td>
                            <td>{blog.user.name}</td>
                            <td>
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
                                <ToastContainer/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogList;