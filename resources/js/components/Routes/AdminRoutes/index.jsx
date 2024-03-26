import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../../global/spinner';
import AddNews from '../../adminPanel/modules/news/addNews';
import ManageNews from '../../adminPanel/modules/news/manageNews';
import ClientDetail from '../../adminPanel/modules/clients/components/clientDetail';

const AddPromotion = lazy(() => import("../../AdminPanel/modules/promotions/AddPromotion"))
const ManageSlider = lazy(() => import("../../adminPanel/modules/sliders/manageSliders"))
const AddSlider = lazy(() => import("../../adminPanel/modules/sliders/addSlider"))
const ManagePromotion = lazy(() => import("../../adminPanel/modules/promotions/managePromotion"))
const Dashboard = lazy(() => import("../../adminPanel/modules/dasboard"))
const ManageClients = lazy(() => import("../../adminPanel/modules/clients"))

function ClientRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<Spinner></Spinner>}><Dashboard /></Suspense>}></Route>
            <Route path="add-promotion" element={<Suspense fallback={<Spinner></Spinner>}>  <AddPromotion></AddPromotion> </Suspense>}></Route>
            <Route path="edit-promotion/:id" element={<Suspense fallback={<Spinner></Spinner>}> <AddPromotion></AddPromotion> </Suspense>}></Route>
            <Route path="manage-promotion" element={<Suspense fallback={<Spinner></Spinner>}> <ManagePromotion></ManagePromotion> </Suspense>}></Route>

            {/* Sliders */}
            <Route path="add-slider" element={<Suspense fallback={<Spinner></Spinner>}>  <AddSlider></AddSlider> </Suspense>}></Route>
            <Route path="edit-slider/:id" element={<Suspense fallback={<Spinner></Spinner>}> <AddSlider></AddSlider> </Suspense>}></Route>
            <Route path="manage-sliders" element={<Suspense fallback={<Spinner></Spinner>}> <ManageSlider></ManageSlider> </Suspense>}></Route>

            {/* Sliders */}
            <Route path="add-news" element={<Suspense fallback={<Spinner></Spinner>}>  <AddNews></AddNews> </Suspense>}></Route>
            <Route path="edit-news/:id" element={<Suspense fallback={<Spinner></Spinner>}> <AddNews></AddNews> </Suspense>}></Route>
            <Route path="manage-news" element={<Suspense fallback={<Spinner></Spinner>}> <ManageNews></ManageNews> </Suspense>}></Route>

            <Route path="manage-clients" element={<Suspense fallback={<Spinner></Spinner>}> <ManageClients></ManageClients> </Suspense>}></Route>
            <Route path="client-detail/:id" element={<Suspense fallback={<Spinner></Spinner>}> <ClientDetail></ClientDetail> </Suspense>}></Route>
        </Routes>
    );
}

export default ClientRoutes;
