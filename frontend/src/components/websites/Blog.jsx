import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const Blog = () => {

    const [blogs, setBlogs] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/listblogs')
            .then(response => {
                setBlogs(response.data);
                return response.data;
            })
            .then(blog => {
                const userIds = blog.map(blog => blog.userId);
                return Promise.all(
                    userIds.map(userId =>
                        axios.get(`http://localhost:5000/listusers/${userId}`)
                    )
                );
            })
            .then(responses => {
                const users = responses.map(response => response.data);
                setUsers(users);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <section id="blog" className="section">
            <div className="container">
                <h1 className="title has-text-centered">Blog</h1>
                <div className="columns is-multiline">
                    {blogs.slice(0, 3).map((blog, index) => (
                        <div key={index} className="column is-6">
                            <div className="card has-background-light" style={{ height: '530px' }}>
                                <div className="card-image">
                                    <figure className="image">
                                        <img src={blog.urlImage} alt={blog.tittle} />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <p className="title is-4">{blog.tittle}</p>
                                    <p className="subtitle is-6" >
                                        {users.map((user) => {
                                            if (user.id === blog.userId) {
                                                return <span key={user.uuid}>{user.name}</span>;
                                            } else {
                                                return null;
                                            }
                                        })}
                                        <span> ({moment(blog.updatedAt).format('MMMM Do YYYY, h:mm:ss a')})</span>
                                    </p>
                                    <p className="content" style={{ maxHeight: '100px', overflow: 'scroll' }}>{blog.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <a href="blogpages" className="button is-primary ml-3">Selengkapnya</a>
                </div>
            </div>
        </section>
    );
};

export default Blog;