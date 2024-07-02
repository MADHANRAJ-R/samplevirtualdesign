import React from 'react'
import Header from "../components/header";
import Galleryimg from '../components/galleryimg';
import Footer from '../components/footer';
import Galleryhp from '../components/galleryhp';


const Galleryroute = () => {
  return (
    <div>
        <Header active3="active" />
        <Galleryhp />
        <Galleryimg />
        <Footer />
    </div>
  )
}

export default Galleryroute