/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";
import "moment/locale/id";
import { BsFillPersonFill, BsCalendarDate, BsFillArrowRightCircleFill } from "react-icons/bs";

function BlogPages() {
    const [blogs, setBlogs] = useState([]);
    const [users, setUsers] = useState([]);
    const style = {
        overflow: 'hidden',
        display: 'block',
        textOverflow: 'ellipsis',
        maxHeight: '100px',
        height: '100px'
    }

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
        <React.Fragment>
            <PublicNavbar />
            <div className="container mt-6 pt-4">
                {/* <h1 className="title has-text-centered mt-5">Blog</h1> */}
                <nav class="breadcrumb mt-5" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Beranda</a></li>
                        <li class="is-active"><a href="#">Blog</a></li>
                    </ul>
                </nav>
                <div className="section">
                    {blogs.map((blog, index) => (
                        <div className="pb-6">
                            <div className="columns has-background-light" style={{ height: '250px', width: '100%', objectFit: 'cover' }} >
                                <div className="column is-4">
                                    <img src={blog.urlImage} alt={blog.tittle} style={{ height: '220px', width: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="column">
                                    <p># {index + 1}</p>
                                    <div className="subtitle is-5 py-4" style={style}>
                                        <strong> {blog.tittle}</strong>
                                    </div>
                                    <a href={`/blogpages/${blog.uuid}`}>
                                        <div className="columns">
                                            <div className="column is-10 subtitle is-5">
                                                <span className="pr-1">
                                                    <BsFillPersonFill />
                                                </span>
                                                <span style={{ fontSize: '15px' }}>
                                                    {users.find(user => user.id === blog.userId)?.name}
                                                </span>
                                                <br />
                                                <span className="pr-1">
                                                    <BsCalendarDate />
                                                </span>
                                                <span style={{ fontSize: '15px' }}>
                                                    {moment(blog.updatedAt).format('Do MMMM  YYYY')}
                                                </span>
                                            </div>
                                            <div className="column is-2 mt-4">
                                                <BsFillArrowRightCircleFill />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <PublicFooter />
        </React.Fragment>
    );
}

export default BlogPages;