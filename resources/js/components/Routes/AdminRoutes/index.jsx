import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const AddPromotion = lazy(() => import("../../AdminPanel/modules/promotions/AddPromotion"))
const ManagePromotion = lazy(() => import("../../adminPanel/modules/promotions/managePromotion"))
const Dashboard = lazy(() => import("../../adminPanel/modules/dasboard"))

function AdminRoutes(props) {
    return (
        <Routes>
            <Route path="/" Component={Dashboard}></Route>
            <Route path="add-promotion" Component={AddPromotion}></Route>
            <Route path="edit-promotion/:id" Component={AddPromotion}></Route>
            <Route path="manage-promotion" Component={ManagePromotion}></Route>
        </Routes>
    );
}

export default AdminRoutes;
