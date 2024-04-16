import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { approveIbRequests, getAllIbRequests } from '../../../../services/admin/commonService';
import { IMAGE_BASE_URL } from '../../../../config/constants';

const IntroducingBrokerRequests = () => {
    const [requests, setRequests] = useState([]);

    const getIbRequests = async () => {
        let res = await getAllIbRequests();
        setRequests(res);
    }

    useEffect(() => {
        getIbRequests();
    }, [])


    const approveBroker = async (ib) => {
        toast.loading("Approving Introducing Broker...")
        let res = await approveIbRequests(ib?.id);
        toast.dismiss();
        if (res.status == 200) {
            toast.success("Introducing broker request approved successfully")
        } else {
            toast.error("Something went wrong")
        }
    }
    const declineBroker = async (ib) => {
        toast.loading("Declining Introducing Broker...")
        let res = await approveIbRequests(ib?.id);
        toast.dismiss();
        if (res.status == 200) {
            toast.success("Introducing broker request declined successfully")
        } else {
            toast.error("Something went wrong")
        }
    }


    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                <div class="page-header-title">
                    <h2 class="mb-5">Manage IB Requests</h2>
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
                                        <th >Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        requests && requests.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="text-end">{item.id}</td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-auto pe-0">
                                                                <img src={IMAGE_BASE_URL + item?.client?.image} alt="user-image" className="wid-40 rounded" />
                                                            </div>
                                                            <div className="col">
                                                                <h6 className="mb-1">{item?.client?.first_name} {item?.client?.last_name}</h6>
                                                                {/* <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p> */}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{item?.client?.email}</td>
                                                    <td>{item?.client?.phone}</td>
                                                    <td ><span className={`badge bg-light-${item.status != 'active' ? 'danger' : 'success'}  f-12`}>{item.status}</span> </td>
                                                    <td className="text-center">
                                                        <ul className="list-inline me-auto mb-0">


                                                            <li onClick={() => { approveBroker(item) }} className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                                <button className="btn-sm btn btn-success text-light">
                                                                    <i className="ti ti-check f-18" /> Approve
                                                                </button>
                                                            </li>
                                                            <li onClick={() => { declineBroker(item) }} className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                                <button className="btn-sm btn btn-danger text-light">
                                                                    <i className="ti ti-user-off f-18" /> Decline
                                                                </button>
                                                            </li>
                                                            <li className="list-inline-item align-bottom" title="See client details">
                                                                <button className="btn-sm btn btn-primary    text-light">
                                                                    <Link to={`/adminpanel/client-detail/${item?.client?.id}`} className='text-light'>
                                                                        <i className="ti ti-eye f-18" /> View Client
                                                                    </Link>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    {
                                        requests.length == 0 &&
                                        <tr>
                                            <td className='text-center' colSpan={6}>No new requests</td>
                                        </tr>
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

export default IntroducingBrokerRequests;
