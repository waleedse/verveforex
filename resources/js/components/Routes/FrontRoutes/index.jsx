import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from '../../global/spinner';
import TurkeyPromotion from '../../frontend/Pages/Promotions/TurkeyPromotion';
import CashBackPromotion from '../../frontend/Pages/Promotions/CashBackPromotion';
import Contact from '../../frontend/Pages/Contact';
import Brokers from '../../frontend/Pages/brokers';


const Broker = lazy(() => import('../../frontend/Pages/Broker'))
const Aboutus = lazy(() => import('../../frontend/Pages/Aboutus'))
const Homepage = lazy(() => import('../../frontend/Pages/Homepage'))
const SingleNews = lazy(() => import('../../frontend/Pages/SingleNews'))
const News = lazy(() => import('../../frontend/Pages/News'))
const PrivacyPolicy = lazy(() => import('../../frontend/Pages/static/PrivacyPolicy'))
const DubaiPromotion = lazy(() => import('../../frontend/Pages/Promotions/DubaiPromotion'))
const Legal = lazy(() => import('../../frontend/Pages/static/Legal'))
const Terms = lazy(() => import('../../frontend/Pages/static/terms'))

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
                <Route path="/legal-notice" element={<Suspense fallback={<Spinner />}> <Legal /> </Suspense>}></Route>
                <Route path="/terms-conditions" element={<Suspense fallback={<Spinner />}> <Terms /> </Suspense>}></Route>
                <Route path="/dubai-promotion" element={<Suspense fallback={<Spinner />}> <DubaiPromotion /> </Suspense>}></Route>
                <Route path="/turkey-promotion" element={<Suspense fallback={<Spinner />}> <TurkeyPromotion /> </Suspense>}></Route>
                <Route path="/cashback-promotion" element={<Suspense fallback={<Spinner />}> <CashBackPromotion /> </Suspense>}></Route>
                <Route path="/contact-us" element={<Suspense fallback={<Spinner />}> <Contact /> </Suspense>}></Route>
                <Route path="/brokers" element={<Suspense fallback={<Spinner />}> <Brokers /> </Suspense>}></Route>
            </Routes>
        </div>
    );
}

export default FrontRoutes;
