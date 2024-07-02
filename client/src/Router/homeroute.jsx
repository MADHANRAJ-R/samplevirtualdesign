import React from 'react';
// import Contact from "../components/contact";
import Header from "../components/header";
import Carousel from "../components/homepage";

import Aboutus from "../components/aboutus";
import Ourvision from "../components/ourvision";
// import Photography from "../components/photography";
import Service from "../components/service";
import Whoweare from "../components/whoweare";
import Footer from '../components/footer';
// import Wiphotography from "../components/wiphotography";


const Homeroute = () => {
  return (
    <div id='home'>
    <Header active1="active" />
    {/* <Contact /> */}
    <Carousel />
    <Whoweare />
    <Aboutus />
    <Service />
    <Ourvision />
    <Footer />
    
    {/* <Photography />
    <Wiphotography /> */}
    </div>
  )
}

export default Homeroute