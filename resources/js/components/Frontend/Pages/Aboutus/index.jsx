import React from 'react';
import Banner from './components/Banner';
import Leading_plateform from './components/Leading_platform';
import OurMission from './ourMission';
import OurPartners from '../Homepage/components/OurPartners';

function Aboutus(props) {
    return (
            <div>
                <Banner></Banner>
                <Leading_plateform></Leading_plateform>
                <OurMission></OurMission>
                <OurPartners></OurPartners>
            </div>
    );
}

export default Aboutus;
