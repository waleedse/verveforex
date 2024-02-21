import React from 'react';
import FrontRoutes from '../Routes/FrontRoutes';
import Navbar from './common/Navbar';
import AdminRoutes from '../Routes/AdminRoutes';

function AdminPanel() {
  return (
    <React.Fragment>

        <Navbar></Navbar>
      <section className="pc-container">
  <div className="pc-content">
    {/* [ Main Content ] start */}
    <div className="row">
      <div className="col-md-12">
        <AdminRoutes />
      </div>
    </div>
  </div>
</section>

    </ React.Fragment>
  );
}

export default AdminPanel;
