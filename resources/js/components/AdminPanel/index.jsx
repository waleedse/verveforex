import React from 'react';
import FrontRoutes from '../Routes/FrontRoutes';
import Navbar from './common/Navbar';
import Dashboard from './modules/dasboard';

function AdminPanel() {
  return (
    <React.Fragment>

        <Navbar></Navbar>

    <Dashboard></Dashboard>
    </ React.Fragment>
  );
}

export default AdminPanel;
