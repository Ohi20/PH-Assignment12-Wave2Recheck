import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Extra1 from './Extra1';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extra1></Extra1>
            <Summery></Summery>
            <Footer></Footer>
        </div>
    );
};

export default Home;