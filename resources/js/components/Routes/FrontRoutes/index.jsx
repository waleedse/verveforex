import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../../Frontend/Pages/Homepage';
import Aboutus from '../../Frontend/Pages/Aboutus';


function FrontRoutes(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/Homepage" Component={Homepage}></Route>
                    <Route path="/Aboutus" Component={Aboutus}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default FrontRoutes;
