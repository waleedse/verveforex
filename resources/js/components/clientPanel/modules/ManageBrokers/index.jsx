import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IMAGE_BASE_URL } from '../../../config/constants';
import { createClientBrokerRequest, getClientBrokers, getClientPromotions } from '../../../services/client/commonService';
import Multiselect from 'multiselect-react-dropdown';

const ManageBrokers = () => {
    const [brokers, setBrokers] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [broker, setBroker] = useState('')
    const [brokerId, setBrokerId] = useState('')

    const getAllBrokers = async () => {
        let res = await getClientBrokers();
        setBrokers(res);
    }

    useEffect(() => {
        getAllBrokers();
    }, [])


    const createCommisionRequest = async () => {
        if (broker && brokerId) {
            toast.loading("Submitting your request...");
            let payload = { brokerId: broker, broker_signup_id: brokerId }
            console.log(payload)
            let res = await createClientBrokerRequest(payload)
            toast.dismiss()
            if (res?.status == 200) {
                toast.success("Broker commission claim requested.")
                setShowModal(false)
            } else {
                toast.error(res?.message ?? "Something went wrong")
            }
        } else {
            toast.error("Please fill the all required fields")
        }
    }



    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                <div class="page-header-title row">
                    <h2 class="mb-5 col-md-10">Manage Brokers</h2>
                    <div className='col-md-2 ml-auto '>
                        <button onClick={() => { setShowModal(true) }} className='btn btn-success col-md-12'>Claim broker commission</button>
                    </div>
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
                                                {/* <div className="row"> */}
                                                <div className=' '>
                                                    <button style={{ width: '100%' }} onClick={() => { window.open(item?.link) }} className="btn btn-light-warning col-md-12" type="button">Details</button>
                                                </div>
                                                <div className='mt-2  ' style={{ width: '100%' }}>
                                                    <button style={{ width: '100%' }} onClick={() => { window.open(item?.link) }} className="btn btn-light-success col-md-12" type="button">Sign Up</button>
                                                </div>
                                                {/* </div> */}
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

            {
                showModal &&
                <div id="exampleModalCenter" className="modal fade show" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" style={{ display: 'block' }} aria-modal="true" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Submit your commission claim request</h5>
                                <button onClick={() => { setShowModal(false) }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="form-group">
                                    <label className="form-label">Select broker</label>
                                    <select onChange={(e) => { setBroker(e.target.value) }} className='form-control'>
                                        <option>Select broker</option>
                                        {
                                            brokers && brokers?.map((broker, index) => {
                                                return (
                                                    <option value={broker?.id} key={index}>{broker.title}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Enter the broker signup ID</label>
                                    <textarea onChange={(e) => { setBrokerId(e.target.value) }} className='form-control' style={{ height: '200px' }}></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button onClick={() => { setShowModal(false) }} type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" onClick={(e) => { createCommisionRequest(e) }} class="btn btn-success">Submit Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
};

export default ManageBrokers;
