import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../../Frontend/Pages/Homepage';
import home from '../index';


function FrontRoutes(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Homepage}></Route>
                    {/* <Route path="/home" Component={home}></Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default FrontRoutes;
