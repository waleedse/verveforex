import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from '../../global/spinner';

const Broker = lazy(() => import('../../frontend/Pages/Broker'))
const Aboutus = lazy(() => import('../../frontend/Pages/Aboutus'))
const Homepage = lazy(() => import('../../frontend/Pages/Homepage'))
const SingleNews = lazy(() => import('../../frontend/Pages/SingleNews'))
const News = lazy(() => import('../../frontend/Pages/News'))

function FrontRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Suspense fallback={<Spinner />}> <Homepage /> </Suspense>}></Route>
                <Route path="/about-us" element={<Suspense fallback={<Spinner />}> <Aboutus /> </Suspense>}></Route>
                <Route path="/broker" element={<Suspense fallback={<Spinner />}> <Broker /> </Suspense>}></Route>
                <Route path="/news/:slug" element={<Suspense fallback={<Spinner />}> <SingleNews /> </Suspense>}></Route>
                <Route path="/news" element={<Suspense fallback={<Spinner />}> <News /> </Suspense>}></Route>
            </Routes>
        </div>
    );
}

export default FrontRoutes;
