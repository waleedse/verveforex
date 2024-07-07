import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../../global/spinner';
import AddNews from '../../adminPanel/modules/news/addNews';
import ManageNews from '../../adminPanel/modules/news/manageNews';
import ManagePromotion from '../../clientPanel/modules/managePromotion';
import Dashboard from '../../clientPanel/modules/dashboard';
import ManageBrokers from '../../clientPanel/modules/ManageBrokers';
import IntroducingBroker from '../../clientPanel/modules/IntroducingBroker';
import MyAccount from '../../clientPanel/modules/MyAccount';
import UpdateBrokerLinks from '../../clientPanel/modules/IntroducingBroker/Components/UpdateBrokerLinks';



function ClientRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<Spinner></Spinner>}><Dashboard /></Suspense>}></Route>
            <Route path="promotions" element={<Suspense fallback={<Spinner></Spinner>}> <ManagePromotion></ManagePromotion> </Suspense>}></Route>
            <Route path="brokers" element={<Suspense fallback={<Spinner></Spinner>}> <ManageBrokers></ManageBrokers> </Suspense>}></Route>
            <Route path="introducing-broker" element={<Suspense fallback={<Spinner></Spinner>}> <IntroducingBroker></IntroducingBroker> </Suspense>}></Route>
            <Route path="my-account" element={<Suspense fallback={<Spinner></Spinner>}> <MyAccount></MyAccount> </Suspense>}></Route>
            <Route path="update-broker-links" element={<Suspense fallback={<Spinner></Spinner>}> <UpdateBrokerLinks></UpdateBrokerLinks> </Suspense>}></Route>


        </Routes>
    );
}

export default ClientRoutes;
