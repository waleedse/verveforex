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
            <div>
                <iframe className='mb-3' src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,4,6,13,14,12,20,39,41,113,1984,1975,15656,358&border=show&speed=60&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,chg_per&tp_scl=ltr&lang=en&font=Arial, sans-serif" width="100%" height={85} style={{ border: 'unset' }} />
            </div>
            <Promotions></Promotions>
            <OurPartners></OurPartners>
            <ChooseUs></ChooseUs>
            <Blog></Blog>
            <Testimonials></Testimonials>
        </div>

    );
}

export default Homepage;
