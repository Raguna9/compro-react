import React from 'react';
import PublicNavbar from "../../components/websites/PublicNavbar";
import PublicFooter from "../../components/websites/PublicFooter";
import SingleBlog from "./../../components/websites/blog/SingleBlog";

function BlogPages() {

    return (
        <React.Fragment>
            <PublicNavbar />
            <SingleBlog />
            <PublicFooter />
        </React.Fragment>
    );
}

export default BlogPages;