import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IMAGE_BASE_URL } from '../../../config/constants';
import { getClientBrokers, getClientPromotions } from '../../../services/client/commonService';

const ManageBrokers = () => {
    const [brokers, setBrokers] = useState([]);

    const getAllBrokers = async () => {
        let res = await getClientBrokers();
        setBrokers(res);
    }

    useEffect(() => {
        getAllBrokers();
    }, [])




    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                <div class="page-header-title">
                    <h2 class="mb-5">Manage Brokers</h2>
                </div>
                <div className="card    ">
                    <div className="card-body">
                        <div className='row p-4'>
                            {
                                brokers && brokers?.map((item, index) => (
                                    <div className='col-md-3 px-2'>
                                        <div className='card '>
                                            <div className='card-body p-1'>
                                                <img className='rounder-broder' style={{ width: '100%', borderRadius: '7px' }} src={IMAGE_BASE_URL + item?.image}></img>
                                                <h3 className='pt-2'>{item?.title}</h3>
                                                <p className='content-body'>{item?.short_description}</p>
                                                <div className="row">
                                                    <div className='col-md-6'>
                                                        <button onClick={() => { window.open(item?.link) }} className="btn btn-light-warning col-md-12" type="button">Details</button>
                                                    </div>
                                                    <div className='col-md-6 text-right' style={{ textAlign: 'right' }}>
                                                        <button onClick={() => { window.open(item?.client_broker?.broker_link ?? item?.link) }} className="btn btn-light-success col-md-12" type="button">Sign Up</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
            {/* [ sample-page ] end */}
        </div>

    );
};

export default ManageBrokers;
