import React from 'react';
import Banner from './components/Banner';
import Leading_plateform from './components/Leading_platform';
import Our_mission from './Our_mission';
import Clients from './components/Clients';

function Aboutus(props) {
    return (

            <div>
                <Banner></Banner>
                <Leading_plateform></Leading_plateform>
                <Our_mission></Our_mission>
                <Clients></Clients>
            </div>
            
    );
}

export default Aboutus;
