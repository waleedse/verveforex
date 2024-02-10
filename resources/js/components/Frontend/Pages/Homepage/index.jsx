import React from 'react';
import HomeSlider from './components/HomeSlider';
import Promotions from './components/Promotions';
import OurPartners from './components/OurPartners';
import ChooseUs from './components/ChooseUs';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';

function Homepage(props) {
    return (

            <div>
                <HomeSlider></HomeSlider>
                <Promotions></Promotions>
                <OurPartners></OurPartners>
                <ChooseUs></ChooseUs>
                <Blog></Blog>
                <Testimonials></Testimonials>
            </div>
            
    );
}

export default Homepage;
