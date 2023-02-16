import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";
import BackToTop from '../../utils/BackToTop';
import "moment/locale/id";
import { BsFillPersonFill, BsCalendarDate } from "react-icons/bs";

function BlogPages() {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);

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
      <section className="section has-background-grey-lighter">
        <h1 className="title has-text-centered mt-5">Blog</h1>

        <div className="container is-hidden-desktop">
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
        </div>

        <div className="container is-hidden-mobile">
          <form className="navbar-end field has-addons mb-4"
            style={{
              width: "30%"
            }}>
            <div className="control is-expanded">
              <input className="input" type="text" placeholder="Cari Blog" />
            </div>
            <div className="control">
              <button className="button is-info">
                Cari
              </button>
            </div>
          </form>
        </div>

        <div className="container">
          {blogs.map((blog) => (
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
            </div>
          ))}
          <BackToTop />
        </div>
      </section>
      <PublicFooter />
    </React.Fragment>
  );
}

export default BlogPages;