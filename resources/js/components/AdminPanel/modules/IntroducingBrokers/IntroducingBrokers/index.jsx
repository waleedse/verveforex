import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getAllIntroducingBroker } from '../../../../services/admin/commonService';
import { IMAGE_BASE_URL } from '../../../../config/constants';

const IntroducingBrokers = () => {
    const [clients, setClients] = useState([]);

    const getClients = async () => {
        let res = await getAllIntroducingBroker();
        setClients(res);
    }

    useEffect(() => {
        getClients();
    }, [])




    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                <div class="page-header-title">
                    <h2 class="mb-5">Manage Introducing Brokers</h2>
                </div>
                <div className="card table-card">
                    <div className="card-body">
                        <div className="text-end p-4 pb-sm-2">
                            {/* <Link to="/adminpanel/add-promotion" className="btn btn-primary">
                                <i className="ti ti-plus f-18" /> Add Promotion
                            </Link> */}
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover" id="pc-dt-simple">
                                <thead>
                                    <tr>
                                        <th className="text-end">#</th>
                                        <th>Client</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Country</th>
                                        <th >Email verification</th>
                                        <th >Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        clients && clients.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="text-end">{item.id}</td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-auto pe-0">
                                                                <img src={IMAGE_BASE_URL + item.image} alt="user-image" className="wid-40 rounded" />
                                                            </div>
                                                            <div className="col">
                                                                <h6 className="mb-1">{item.first_name} {item?.last_name}</h6>
                                                                {/* <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p> */}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item?.country?.name}</td>
                                                    <td >{item.email_verified_at ? "Verified" : "Pending email verification"}</td>

                                                    <td ><span className={`badge bg-light-${item.status != 'active' ? 'danger' : 'success'}  f-12`}>{item.status}</span> </td>
                                                    <td className="text-center">
                                                        <ul className="list-inline me-auto mb-0">

                                                            <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                                <Link to={`/adminpanel/client-detail/${item.id}`} className="avtar avtar-xs btn-link-success btn-pc-default">
                                                                    <i className="ti ti-eye f-18" />
                                                                </Link>
                                                            </li>
                                                            {/* <li onClick={() => { deleteCurrentPromotion(item) }} className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                                <a className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                                    <i className="ti ti-trash f-18" />
                                                                </a>
                                                            </li> */}
                                                        </ul>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* [ sample-page ] end */}
        </div>

    );
};

export default IntroducingBrokers;
