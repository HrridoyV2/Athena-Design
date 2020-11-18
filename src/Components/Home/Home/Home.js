import React from 'react';
import Achievement from '../Achievements/Achievement';
import Contact from '../Contact/Contact';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Service></Service>
            <Contact></Contact>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;