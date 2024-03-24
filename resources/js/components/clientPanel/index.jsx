import React, { lazy } from "react";
import ClientRoutes from "../routes/ClientRoutes";

const Navbar = lazy(() => import("./common/Navbar"))

function ClientPanel() {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <section className="pc-container">
                <div className="pc-content">
                    {/* [ Main Content ] start */}
                    <ClientRoutes />
                </div>
            </section>
        </React.Fragment>
    );
}

export default ClientPanel;
