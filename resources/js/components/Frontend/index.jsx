import React from 'react';
import FrontRoutes from '../routes/FrontRoutes';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

function Frontend() {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <FrontRoutes></FrontRoutes>
            <Footer></Footer>
        </ React.Fragment>
    );
}

export default Frontend;
