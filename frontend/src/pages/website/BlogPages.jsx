import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";
import BackToTop from '../../utils/BackToTop';
import "moment/locale/id";
import { BsFillPersonFill, BsCalendarDate, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

function BlogPages() {
    const [blogs, setBlogs] = useState([]);
    const [users, setUsers] = useState([]);
    const style = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'inline-block',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
        paddingBottom: '6px'
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
                    <h1 className="title has-text-centered mt-5">Blog</h1>
                    <form className="navbar-end field has-addons mb-4">
                        <div className="control is-expanded">
                            <input className="input" type="text" placeholder="Cari Blog" />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                Cari
                            </button>
                        </div>
                    </form>

                    <div className="columns">
                        <div className="column is-three-quarters">
                            {blogs.slice(0, 1).map((blog) => (
                                <div key={blog.uuid} className="box">
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
                                    <figure className="image is-4by3">
                                        <img src={blog.urlImage} alt={blog.tittle} />
                                    </figure>
                                    <p className="content">{blog.content}</p>
                                    <BackToTop />
                                </div>
                            ))}
                        </div>
                        <div className="column">
                            {blogs.slice(0, 3).map((blog) => (
                                <div className="card has-background-light mb-4" style={{ height: '260px', width: '270px' }}>
                                <Link onClick={() => window.location.assign('/blogpages')}>
                                    <div className="card-image">
                                        <img src={blog.urlImage} alt={blog.tittle} style={{ height: '150px', width: '100%', objectFit: 'cover' }} />
                                    </div>
                                </Link>
                                <div className="card-content pt-3">
                                    <h3 className="is-6" style={style}>
                                        <strong> {blog.tittle}</strong>
                                    </h3>
                                    <Link onClick={() => window.location.assign('/blogpages')}>
                                        <div className="columns">
                                            <div className="column is-10 subtitle is-7 ">
                                                <span className="pr-1">
                                                    <BsFillPersonFill />
                                                </span>
                                                <span style={{ fontSize: '12px' }}>
                                                    {users.find(user => user.id === blog.userId)?.name}
                                                </span>
                                                <br />
                                                <span className="pr-1">
                                                    <BsCalendarDate />
                                                </span>
                                                <span style={{ fontSize: '12px' }}>
                                                    {moment(blog.updatedAt).format('Do MMMM  YYYY')}
                                                </span>
                                            </div>
                                            <div className="column is-2 mt-1">
                                                <BsFillArrowRightCircleFill />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
            </div>
            <PublicFooter />
        </React.Fragment>
    );
}

export default BlogPages;