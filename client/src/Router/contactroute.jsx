import React from 'react'
import Header from "../components/header";
import Contact from '../components/contact';
import Footer from '../components/footer';


const contactroute = () => {
  return (
    <div>  
        <Header active4="active" />
        <Contact apiRoute="https://samplevirtualdesignserver.vercel.app/contact" />
        <Footer />

    </div>
  )
}

export default contactroute
