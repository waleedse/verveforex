import React from 'react';
import ClientProfile from './components/Profile';
import ClientNotes from './components/ClientNotes';
import ManageClientBrokers from './components/Brokers';

const ClientDetail = () => {
    return (
        <div>
            {/* [ breadcrumb ] start */}
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">

                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h2 className="mb-0">Account Profile</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* [ breadcrumb ] end */}
            {/* [ Main Content ] start */}
            <div className="row">
                {/* [ sample-page ] start */}
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body py-0">
                            <ul className="nav nav-tabs profile-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="profile-tab-1" data-bs-toggle="tab" href="#profile-1" role="tab" aria-selected="true">
                                        <i className="ti ti-user me-1" />Personal Details
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab-2" data-bs-toggle="tab" href="#profile-2" role="tab" aria-selected="true">
                                        <i className="ti ti-file-text me-2" />Brokers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab-3" data-bs-toggle="tab" href="#profile-3" role="tab" aria-selected="true">
                                        <i className="ti ti-coin me-2" />Promotions
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab-4" data-bs-toggle="tab" href="#profile-4" role="tab" aria-selected="true">
                                        <i className="ti ti-notes me-2" />Notes
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <ClientProfile></ClientProfile>
                        <div className="tab-pane" id="profile-2" role="tabpanel" aria-labelledby="profile-tab-2">
                            <ManageClientBrokers></ManageClientBrokers>
                        </div>
                        <div className="tab-pane" id="profile-3" role="tabpanel" aria-labelledby="profile-tab-3">
                            <h1>Promotions will show here</h1>
                        </div>
                        <ClientNotes ></ClientNotes>

                    </div>
                </div>
                {/* [ sample-page ] end */}
            </div>
            {/* [ Main Content ] end */}

        </div>

    );
};

export default ClientDetail;
