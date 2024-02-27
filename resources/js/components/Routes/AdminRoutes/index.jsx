import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../../adminPanel/modules/dasboard';
import AddPromotion from '../../adminPanel/modules/promotions/AddPromotion';
import ManagePromotion from '../../adminPanel/modules/promotions/managePromotion';


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
