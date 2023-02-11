/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";
import BackToTop from '../../utils/BackToTop';

function BlogPages() {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/listblogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (!blogs.length) return;

    const userIds = new Set(blogs.map(blog => blog.userId));
    const promises = Array.from(userIds).map(userId =>
      axios.get(`http://localhost:5000/listusers/${userId}`)
        .then(({ data }) => data)
    );

    Promise.all(promises)
      .then(usersData => {
        const usersDataObject = usersData.reduce((acc, data) => ({
          ...acc,
          [data.id]: data
        }), {});
        setUsers(usersDataObject);
      })
      .catch(error => console.error(error));
  }, [blogs]);



  return (
    <React.Fragment>
      <PublicNavbar />
      <section className="section has-background-grey-lighter">
        <h1 className="title has-text-centered mt-5">Blog</h1>
        
        <div className="container is-hidden-desktop">
          <form class="navbar-end field has-addons mb-4">
            <div class="control is-expanded">
              <input class="input" type="text" placeholder="Cari Blog" />
            </div>
            <div class="control">
              <button class="button is-info">
                Cari
              </button>
            </div>
          </form>
        </div>

        <div className="container is-hidden-mobile">
          <form class="navbar-end field has-addons mb-4"
            style={{
              width: "30%"
            }}>
            <div class="control is-expanded">
              <input class="input" type="text" placeholder="Cari Blog" />
            </div>
            <div class="control">
              <button class="button is-info">
                Cari
              </button>
            </div>
          </form>
        </div>

        <div className="container">
          {blogs.map(blog => (
            <div key={blog.uuid} className="box">
              <p className="title is-4">{blog.tittle}</p>
              <p className="subtitle is-6">
                <span>{users[blog.userId]?.name}</span>
                <span> ({moment(blog.updatedAt).format('MMMM Do YYYY, h:mm:ss a')})</span>
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