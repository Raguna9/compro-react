import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import "moment/locale/id";
import { BsFillPersonFill, BsCalendarDate, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [users, setUsers] = useState([])

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
        <div className="container">
            <section id="blog" className='mx-6 pt-4 pb-6'>
                <h1 className="title has-text-centered">Blog</h1>
                <p className="subtitle is-6 has-text-centered">Jika Anda mempunyai waktu yang singkat, dan ingin dimanfaatkan, kami telah menyediakan Anda beberapa blog yang mungkin bermanfaat.</p>
                <div className="columns is-multiline">
                    {blogs.slice(0, 3).map((blog, index) => (
                        <div key={index} className="column">
                            <div className="card has-background-light" style={{ height: '300px', width: '336px' }}>
                                <Link onClick={() => window.location.assign('/blogpages')}>
                                    <div className="card-image">
                                        <img src={blog.urlImage} alt={blog.tittle} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
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
                        </div>
                    ))}
                </div>
                <div className="has-text-right">
                    <a href="blogpages" className="button is-info is-rounded">Lihat lebih banyak</a>
                </div>
            </section>
        </div>
    );
};

export default Blog;