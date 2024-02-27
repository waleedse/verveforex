import React, { lazy } from "react";

import AdminRoutes from "../routes/AdminRoutes";

const Navbar = lazy(() => import("./common/Navbar"))
function AdminPanel() {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <section className="pc-container">
                <div className="pc-content">
                    {/* [ Main Content ] start */}
                    <AdminRoutes />
                </div>
            </section>
        </React.Fragment>
    );
}

export default AdminPanel;
