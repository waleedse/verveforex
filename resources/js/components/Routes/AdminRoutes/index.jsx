import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../../AdminPanel/modules/dasboard';
import AddPromotion from '../../AdminPanel/modules/promotions/AddPromotion';


function AdminRoutes(props) {
    return (
                <Routes>
                    <Route path="/" Component={Dashboard}></Route>
                    <Route path="add-promotion" Component={AddPromotion}></Route>
                </Routes>
    );
}

export default AdminRoutes;
