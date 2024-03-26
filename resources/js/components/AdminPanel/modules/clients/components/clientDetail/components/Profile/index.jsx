import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../../../../../../services/admin/commonService';
import { IMAGE_BASE_URL } from '../../../../../../../config/constants';

const ClientProfile = () => {
    const params = useParams();
    const [client, setClient] = useState(null);
    useEffect(() => {
        getClient()
    }, [])

    const getClient = async () => {
        let res = await getUserById(params?.id);
        console.log(res)
        if (res.data) {
            setClient(res.data)
        }
    }

    return (
        <div className="tab-pane show active" id="profile-1" role="tabpanel" aria-labelledby="profile-tab-1">
            <div className="row">
                <div className="col-lg-4 col-xxl-3">
                    <div className="card">
                        <div className="card-body position-relative">
                            {/* <div className="position-absolute end-0 top-0 p-3">
                                <span className="badge bg-primary">Pro</span>
                            </div> */}
                            <div className="text-center mt-3">
                                <div className="chat-avtar d-inline-flex mx-auto">
                                    <img className="rounded-circle img-fluid wid-70" src={IMAGE_BASE_URL + client?.image} alt="User image" />
                                </div>
                                <h5 className="mb-0">{client?.first_name} {client?.last_name}</h5>
                                <p className="text-muted text-sm text-center">{"client"}</p>
                                <hr className="my-3 border border-secondary-subtle" />
                                <div className="row g-3">
                                    <div className="col-4">
                                        <h5 className="mb-0">2</h5>
                                        <small className="text-muted">Brokers</small>
                                    </div>
                                    <div className="col-4 border border-top-0 border-bottom-0">
                                        <h5 className="mb-0">3</h5>
                                        <small className="text-muted">Promotions</small>
                                    </div>
                                    <div className="col-4">
                                        <h5 className="mb-0">4</h5>
                                        <small className="text-muted">Clients</small>
                                    </div>
                                </div>
                                <hr className="my-3 border border-secondary-subtle" />
                                <div className="d-inline-flex align-items-center justify-content-start w-100 mb-3">
                                    <i className="ti ti-mail me-2" />
                                    <p className="mb-0">{client?.email}</p>
                                </div>
                                <div className="d-inline-flex align-items-center justify-content-start w-100 mb-3">
                                    <i className="ti ti-phone me-2" />
                                    <p className="mb-0">{client?.phone}</p>
                                </div>
                                <div className="d-inline-flex align-items-center justify-content-start w-100 mb-3">
                                    <i className="ti ti-map-pin me-2" />
                                    <p className="mb-0">{client?.country?.name}</p>
                                </div>
                                <div className="d-inline-flex align-items-center justify-content-start w-100">
                                    <i className="ti ti-link me-2" />
                                    <a href="#" className="link-primary">
                                        <p className="mb-0">https://anshan.dh.url</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-8 col-xxl-9">

                    <div className="card">
                        <div className="card-header">
                            <h5>Personal Details</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-0 pt-0">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-1 text-muted">First Name</p>
                                            <p className="mb-0">{client?.first_name}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-1 text-muted">Last Name</p>
                                            <p className="mb-0">{client?.last_name}</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-1 text-muted">Phone</p>
                                            <p className="mb-0">{client?.phone}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-1 text-muted">Country</p>
                                            <p className="mb-0">{client?.country?.name}</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-1 text-muted">Email</p>
                                            <p className="mb-0">{client?.email}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-1 text-muted">Zip Code</p>
                                            <p className="mb-0">956 754</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0 pb-0">
                                    <p className="mb-1 text-muted">Address</p>
                                    <p className="mb-0">Street 110-B Kalians Bag, Dewan, M.P. New York</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientProfile;
