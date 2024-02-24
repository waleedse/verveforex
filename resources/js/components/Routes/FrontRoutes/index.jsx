import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../../frontend/Pages/Homepage';
import Aboutus from '../../frontend/Pages/Aboutus';


function FrontRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path="/" Component={Homepage}></Route>
                <Route path="/about-us" Component={Aboutus}></Route>
            </Routes>
        </div>
    );
}

export default FrontRoutes;
