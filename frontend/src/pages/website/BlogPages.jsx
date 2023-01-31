import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";

function BlogPages() {
  // const [blogs, setBlogs] = useState([]);
  // const [users, setUsers] = useState('')

  // useEffect(() => {
  //   axios.get('http://localhost:5000/listblogs')
  //     .then(response => setBlogs(response.data))
  //     .catch(error => console.error(error));

  //   // Mengambil data users
  //   const userId = blogs.userId;
  //   axios
  //     .get(`http://localhost:5000/listusers/${userId}`)
  //     .then((response) => {
  //       setUsers(response.data);
  //     });
  // }, []);
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/listblogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const userIds = new Set(blogs.map(blog => blog.userId));
    const promises = Array.from(userIds).map(userId =>
      axios.get(`http://localhost:5000/listusers/${userId}`)
    );

    Promise.all(promises)
      .then(responses => {
        const usersData = responses.reduce((acc, { data }) => ({
          ...acc,
          [data.id]: data
        }), {});
        setUsers(usersData);
      });
  }, [blogs]);





  return (
    <React.Fragment>
      <PublicNavbar />
      <section className="section has-background-grey-lighter">
        <h1 className="title has-text-centered mt-5">Blog</h1>
        <a href="/" className="button is-primary mb-4 ml-2">Back to Homepage</a>
        <div className="container">
          {blogs.map(blog => (
            <div
              key={blog.uuid}
              className="box">
              <p className="title is-4">
                {blog.tittle}
              </p>
              <p className="subtitle is-6">{users && <span>{users.name}</span>}
                <span> ({moment(blog.updatedAt).format('MMMM Do YYYY, h:mm:ss a')})</span>
              </p>
              <figure className="image is-4by3">
                <img src=
                  {blog.urlImage}
                  alt=
                  {blog.tittle}
                />
              </figure>
              <p className="content">
                {blog.content}
              </p>
            </div>
          ))}
        </div>
      </section>
      <PublicFooter />
    </React.Fragment>
  );
}

export default BlogPages;