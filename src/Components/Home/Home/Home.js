import React from 'react';
import Achievement from '../Achievements/Achievement';
import Contact from '../Contact/Contact';
import DedicatedTeam from '../DedicatedTeam/DedicatedTeam';
import HeaderMain from '../HeaderMain/HeaderMain';
import Mailbox from '../Mailbox/Mailbox';
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
            <DedicatedTeam />
            <Mailbox />
        </div>
    );
};

export default Home;