import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from '../../global/spinner';
// import DubaiPromotion from '../../Frontend/Pages/Promotions/DubaiPromotion';

const Broker = lazy(() => import('../../frontend/Pages/Broker'))
const Aboutus = lazy(() => import('../../frontend/Pages/Aboutus'))
const Homepage = lazy(() => import('../../frontend/Pages/Homepage'))
const SingleNews = lazy(() => import('../../frontend/Pages/SingleNews'))
const News = lazy(() => import('../../frontend/Pages/News'))
const PrivacyPolicy = lazy(() => import('../../Frontend/Pages/static/PrivacyPolicy'))
const DubaiPromotion = lazy(() => import('../../Frontend/Pages/Promotions/DubaiPromotion'))

function FrontRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Suspense fallback={<Spinner />}> <Homepage /> </Suspense>}></Route>
                <Route path="/about-us" element={<Suspense fallback={<Spinner />}> <Aboutus /> </Suspense>}></Route>
                <Route path="/broker/:slug" element={<Suspense fallback={<Spinner />}> <Broker /> </Suspense>}></Route>
                <Route path="/news/:slug" element={<Suspense fallback={<Spinner />}> <SingleNews /> </Suspense>}></Route>
                <Route path="/news" element={<Suspense fallback={<Spinner />}> <News /> </Suspense>}></Route>
                <Route path="/privacy-policy" element={<Suspense fallback={<Spinner />}> <PrivacyPolicy /> </Suspense>}></Route>
                <Route path="/dubai-promotion" element={<Suspense fallback={<Spinner />}> <DubaiPromotion /> </Suspense>}></Route>
            </Routes>
        </div>
    );
}

export default FrontRoutes;
