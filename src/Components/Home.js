import React from 'react';
import AboutUs from './AboutUs';
import Header from './Header';
import Navigation from './Navigation';
import Shop from './Shop';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <AboutUs></AboutUs>
            <Shop></Shop>
        </div>
    );
};

export default Home;