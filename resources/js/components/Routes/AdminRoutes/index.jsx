import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../../global/spinner';
const AddPromotion = lazy(() => import("../../AdminPanel/modules/promotions/AddPromotion"))
const ManagePromotion = lazy(() => import("../../adminPanel/modules/promotions/managePromotion"))
const Dashboard = lazy(() => import("../../adminPanel/modules/dasboard"))

function AdminRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<Spinner></Spinner>}><Dashboard /></Suspense>}></Route>
            <Route path="add-promotion" element={<Suspense fallback={<Spinner></Spinner>}>  <AddPromotion></AddPromotion> </Suspense>}></Route>
            <Route path="edit-promotion/:id" element={<Suspense fallback={<Spinner></Spinner>}> <AddPromotion></AddPromotion> </Suspense>}></Route>
            <Route path="manage-promotion" element={<Suspense fallback={<Spinner></Spinner>}> <ManagePromotion></ManagePromotion> </Suspense>}></Route>
        </Routes>
    );
}

export default AdminRoutes;
