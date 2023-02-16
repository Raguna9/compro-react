import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import "moment/locale/id";
import { BsFillPersonFill, BsCalendarDate } from "react-icons/bs";

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        moment.locale("id");

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
                    {blogs.slice(0, 2).map((blog, index) => (
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
                                        <span className="pr-1">
                                            <BsFillPersonFill />
                                        </span>
                                        <span style={{ fontSize: '14px' }}>
                                            {users.find(user => user.id === blog.userId)?.name}
                                        </span>
                                        <span className="pl-5 pr-1">
                                            <BsCalendarDate />
                                        </span>
                                        <span style={{ fontSize: '14px' }}>
                                            {moment(blog.updatedAt).format('dddd, Do MMMM  YYYY, HH:mm')}
                                        </span>
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