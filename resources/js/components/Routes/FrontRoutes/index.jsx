import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from '../../global/spinner';

const Broker = lazy(() => import('../../frontend/Pages/Broker'))
const Aboutus = lazy(() => import('../../frontend/Pages/Aboutus'))
const Homepage = lazy(() => import('../../frontend/Pages/Homepage'))

function FrontRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Suspense fallback={<Spinner />}> <Homepage /> </Suspense>}></Route>
                <Route path="/about-us" Component={<Suspense fallback={<Spinner />}> <Aboutus /> </Suspense>}></Route>
                <Route path="/broker" Component={<Suspense fallback={<Spinner />}> <Broker /> </Suspense>}></Route>
            </Routes>
        </div>
    );
}

export default FrontRoutes;
