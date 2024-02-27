import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const AddPromotion = lazy(() => import("../../AdminPanel/modules/promotions/AddPromotion"))
const ManagePromotion = lazy(() => import("../../adminPanel/modules/promotions/managePromotion"))
const Dashboard = lazy(() => import("../../adminPanel/modules/dasboard"))

function AdminRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Suspense><Dashboard /></Suspense>}></Route>
            <Route path="add-promotion" element={<Suspense> <AddPromotion></AddPromotion> </Suspense>}></Route>
            <Route path="edit-promotion/:id" element={<Suspense> <AddPromotion></AddPromotion> </Suspense>}></Route>
            <Route path="manage-promotion" element={<Suspense> <ManagePromotion></ManagePromotion> </Suspense>}></Route>
        </Routes>
    );
}

export default AdminRoutes;
