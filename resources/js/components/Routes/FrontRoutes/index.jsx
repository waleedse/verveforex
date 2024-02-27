import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Broker = lazy(() => import('../../Frontend/Pages/Broker'))
const Aboutus = lazy(() => import('../../frontend/Pages/Aboutus'))
const Homepage = lazy(() => import('../../frontend/Pages/Homepage'))

function FrontRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path="/" Component={Homepage}></Route>
                <Route path="/about-us" Component={Aboutus}></Route>
                <Route path="/broker" Component={Broker}></Route>
            </Routes>
        </div>
    );
}

export default FrontRoutes;
