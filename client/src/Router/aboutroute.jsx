import React from 'react'
import Header from "../components/header";
import Footer from '../components/footer';
import Photography from '../components/photography';
import Wiphotography from '../components/wiphotography';
import Aboutuscopy from "../components/aboutuscopy";


const Aboutroute = () => {
  return (
    <div>
        <Header active2="active" />
        <Photography />
        <Wiphotography />
        <Aboutuscopy />
        <Footer />

    </div>
  )
}

export default Aboutroute