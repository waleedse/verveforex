import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getAllClients } from '../../../../../../../services/admin/commonService';
import { IMAGE_BASE_URL } from '../../../../../../../config/constants';
import { getClientBrokerLinks } from '../../../../../../../services/client/commonService';

const ManageClientBrokers = () => {
    const [clients, setClients] = useState([]);
    const params = useParams()
    const getClients = async () => {
        let res = await getClientBrokerLinks(params?.id);
        setClients(res.brokers);
    }

    useEffect(() => {
        getClients();
    }, [])




    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">

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
                                        <th>Broker</th>
                                        <th>Client broker link</th>
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
                                                                <img src={IMAGE_BASE_URL + item.broker?.image} alt="user-image" className="wid-40 rounded" />
                                                            </div>
                                                            <div className="col">
                                                                <h6 className="mb-1">{item.broker?.title}</h6>
                                                                {/* <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p> */}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{item.broker_link ?? 'Client did not updated link yet.'}</td>

                                                    <td className="text-center">
                                                        <ul className="list-inline me-auto mb-0">


                                                            <li onClick={() => { approveBroker(item) }} className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                                <Link to={`/adminpanel/manage-client-commissions/${item?.id}`}> <button className="btn-sm btn btn-success text-light">
                                                                    <i className="ti ti-check f-18" /> Manage Commisions
                                                                </button></Link>
                                                            </li>
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

export default ManageClientBrokers;
