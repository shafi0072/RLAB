import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Carusel from '../../Carusel/Carusel';
import Card from '../../Card/Card';
import Footer from '../../Footer/Footer'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Carusel/>
            <Card/>
            <Footer/>
        </div>
    );
};

export default Home;