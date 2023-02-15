import React from 'react';
import PublicNavbar from "../../components/websites/PublicNavbar";
import Home from "../../components/websites/Home";
import Layanan from "../../components/websites/Layanan";
import Gallery from "../../components/websites/Gallery";
import PublicFooter from "../../components/websites/PublicFooter";
import Blog from "../../components/websites/Blog";
import BackToTop from '../../utils/BackToTop';
import PesanFaq from '../../components/websites/PesanFaq';
import Partner from '../../components/websites/Partner';
// import { BsArrowUpCircle } from "react-icons/bs";



const Main = () => {

    return (
        <React.Fragment>
            <PublicNavbar />
            <Home />
            <BackToTop/>
            <Layanan />
            <Gallery />
            <Blog />
            <Partner />
            <PesanFaq />
            <PublicFooter />
        </React.Fragment>
    );
};

export default Main;