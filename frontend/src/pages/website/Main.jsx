import React from "react";
import PublicNavbar from "../../components/websites/PublicNavbar";
import Home from "../../components/websites/Home";
import Layanan from "../../components/websites/Layanan";
import Gallery from "../../components/websites/Gallery";
import PublicFooter from "../../components/websites/PublicFooter";
import Blog from "../../components/websites/Blog";



const Main = () => {

    return (
        <React.Fragment>
            <PublicNavbar />
            <Home/> 
            <Layanan/>
            <Gallery/>
            <Blog/>
            <PublicFooter/>
        </React.Fragment>
    );
};

export default Main;