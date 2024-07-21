import React, { useEffect, useState } from 'react';
import { getClientDashboardStats } from '../../../services/client/commonService';
import Commissions from '../commissions';

const Dashboard = () => {
    const [stats, setStats] = useState(null)

    const getStats = async () => {
        let res = await getClientDashboardStats();
        setStats(res)
    }

    useEffect(() => {
        getStats()
    }, [])
    return (
        <div>

            {/* [ breadcrumb ] start */}
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0)">Dashboard</a></li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h2 className="mb-0">Dashboard</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* [ breadcrumb ] end */}
            {/* [ Main Content ] start */}
            <div className="row">
                <div className="col-md-6 col-xxl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="avtar avtar-s bg-light-primary">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M13 9H7" stroke="#4680FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22.0002 10.9702V13.0302C22.0002 13.5802 21.5602 14.0302 21.0002 14.0502H19.0402C17.9602 14.0502 16.9702 13.2602 16.8802 12.1802C16.8202 11.5502 17.0602 10.9602 17.4802 10.5502C17.8502 10.1702 18.3602 9.9502 18.9202 9.9502H21.0002C21.5602 9.9702 22.0002 10.4202 22.0002 10.9702Z" stroke="#4680FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z" stroke="#4680FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h6 className="mb-0">All Commissions</h6>
                                </div>
                            </div>
                            <div className="bg-body p-3 mt-3 rounded">
                                <div className="mt-3 row align-items-center">
                                    <div className="col-7">
                                        {/* <div id="all-earnings-graph" /> */}
                                    </div>
                                    <div className="col-5">
                                        <h5 className="mb-1">${stats?.commissions}</h5>
                                        {/* <p className="text-primary mb-0"><i className="ti ti-arrow-up-right" /> 30.6%</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="avtar avtar-s bg-light-warning">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="#E58A00" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.6" d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#E58A00" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.6" d="M8 13H12" stroke="#E58A00" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.6" d="M8 17H16" stroke="#E58A00" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h6 className="mb-0">My Brokers</h6>
                                </div>
                            </div>
                            <div className="bg-body p-3 mt-3 rounded">
                                <div className="mt-3 row align-items-center">
                                    <div className="col-7">
                                        {/* <div id="page-views-graph" /> */}
                                    </div>
                                    <div className="col-5">
                                        <h5 className="mb-1">{stats?.brokers}</h5>
                                        {/* <p className="text-warning mb-0"><i className="ti ti-arrlledow-up-right" /> 30.6%</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="avtar avtar-s bg-light-success">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 2V5" stroke="#2ca87f" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 2V5" stroke="#2ca87f" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.4" d="M3.5 9.08984H20.5" stroke="#2ca87f" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#2ca87f" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.4" d="M15.6947 13.7002H15.7037" stroke="#2ca87f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.4" d="M15.6947 16.7002H15.7037" stroke="#2ca87f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.4" d="M11.9955 13.7002H12.0045" stroke="#2ca87f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.4" d="M11.9955 16.7002H12.0045" stroke="#2ca87f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.4" d="M8.29431 13.7002H8.30329" stroke="#2ca87f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.4" d="M8.29395 16.7002H8.30293" stroke="#2ca87f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h6 className="mb-0">My promtoion</h6>
                                </div>
                            </div>
                            <div className="bg-body p-3 mt-3 rounded">
                                <div className="mt-3 row align-items-center">
                                    <div className="col-7">
                                        {/* <div id="total-task-graph" /> */}
                                    </div>
                                    <div className="col-12">
                                        <h5 className="mb-1">{stats?.promotion ? stats?.promotion?.promotion.title : 'You have not enrolled in promotion'}</h5>
                                        {/* <p className="text-success mb-0"><i className="ti ti-arrow-up-right" /> New</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Commissions></Commissions>
            </div>
            {/* [ Main Content ] end */}
        </div>

    );
};

export default Dashboard;
