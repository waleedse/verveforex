import React from "react";
import FrontRoutes from "../routes/FrontRoutes";
import Navbar from "./common/Navbar";
import AdminRoutes from "../routes/AdminRoutes";

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
