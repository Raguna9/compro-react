/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const Blog = () => {

    const [blog, setBlog] = useState('')
    const [users, setUsers] = useState('')

    useEffect(() => {
        axios
            .get("http://localhost:5000/listblogs")
            .then(response => {
                setBlog(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        // Mengambil data users
        // const userId = blog[0].userId;
        axios
            .get(`http://localhost:5000/listusers/3`)
            .then((response) => {
                setUsers(response.data);
            });
    }, []);

    // const updatedAt = blog.updatedAt ? moment(blog[0].updatedAt).format('MMMM Do YYYY, h:mm:ss a') : '';

    return (
        <section id="blog" class="section has-background-grey-lighter">
            <h1 class="title has-text-centered">Blog</h1>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-3by2">
                        {blog.length > 0 && (
                            <>
                                <img src={blog[0].urlImage} alt="Placeholder image" />
                            </>
                        )}

                    </figure>
                </div>
                <div className="card-content">
                    {blog.length > 0 && (
                        <>
                            <p className="title is-4">{blog[0].tittle}</p>
                            <p className="subtitle is-6">{users.name} 
                                <span> ({moment(blog[0].updatedAt).format('MMMM Do YYYY, h:mm:ss a')})</span>
                                </p>
                            <p className="content">{blog[0].content}</p>
                        </>
                    )}
                    <a href="blogpages" className="button is-primary">Selengkapnya</a>
                </div>
            </div>
        </section>
    );
};

export default Blog;