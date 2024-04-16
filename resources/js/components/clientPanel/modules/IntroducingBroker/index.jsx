import React, { useEffect, useState } from 'react';
import { deletePromotionById, getPromotions } from '../../../services/admin/commonService';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IMAGE_BASE_URL } from '../../../config/constants';
import { createIB, getClientBrokers } from '../../../services/client/commonService';
import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from '../../../redux/reducers/user';

const IntroducingBroker = () => {
    const [brokers, setBrokers] = useState([]);
    const [selectedBrokers, setSelectedBrokers] = useState([])
    const user = useSelector(state => state.user?.user)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();

    const getAllBrokers = async () => {
        let res = await getClientBrokers();
        setBrokers(res);
    }

    useEffect(() => {
        getAllBrokers();
    }, [])


    const selectCountry = (val) => {
        setSelectedBrokers(val)
    }

    const createIntroducingBroker = async (e) => {
        e.preventDefault();

        if (selectedBrokers?.length) {
            let payload = {
                brokers: selectedBrokers,
            }
            toast.loading("Submitting your application");
            let res = await createIB(payload);
            let tempUser = JSON.parse(JSON.stringify(user))
            tempUser.introducing_broker = { status: 'pending' };
            dispatch(SET_USER(tempUser))
            setShowModal(false)
            toast.dismiss()
            toast.success("Your request has been submitted successfully")
        } else {
            toast.error("Please select brokers first")
        }
    }

    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                <div class="page-header-title">
                    <h2 class="mb-5">Introducing Brokers</h2>
                </div>
                {
                    user?.introducing_broker && user?.introducing_broker?.status == 'pending' ?

                        <div className="card table-card">
                            <div className="card-body" style={{ height: '700px' }}>
                                <div className=' text-center' style={{ alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
                                    <img src='/assets/images/work-in-progress.png' style={{ width: '150px' }}></img>
                                    <h1 className='mt-3'>Your request is now in progress</h1>
                                    <p className='text-center'>Your request has been submitted and right now its in progress you will be notified by email notification in any case </p>
                                    <button className='btn btn-success' type='button' >Learn more</button>
                                </div>
                            </div>
                        </div>

                        :

                        <div className="card table-card">
                            <div className="card-body" style={{ height: '700px' }}>
                                <div className=' text-center' style={{ alignItems: 'center', justifyContent: 'center', marginTop: '20%' }}>
                                    <h1>Become an Introducing Broker</h1>
                                    <p className='text-center'>Click on the below button to proceed with the application</p>
                                    <button onClick={() => { setShowModal(true) }} className='btn btn-success' type='button' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Get Started</button>
                                </div>
                            </div>
                        </div>

                }
            </div>


            {
                showModal &&
                <div id="exampleModalCenter" className="modal fade show" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" style={{ display: 'block' }} aria-modal="true" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Submit your application for Introducing broker</h5>
                                <button onClick={() => { setShowModal(false) }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="form-group">
                                    <label className="form-label">Select your current brokers you are signed up</label>
                                    <Multiselect
                                        options={brokers} // Options to display in the dropdown
                                        // Preselected value to persist in dropdown
                                        onSelect={selectCountry} // Function will trigger on select event
                                        onRemove={selectCountry}
                                        displayValue="title"
                                        className="form-select p-1"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Write your application or message</label>
                                    <textarea className='form-control' style={{ height: '200px' }}></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button onClick={() => { setShowModal(false) }} type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" onClick={(e) => { createIntroducingBroker(e) }} class="btn btn-success">Submit Application</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >

    );
};

export default IntroducingBroker;
