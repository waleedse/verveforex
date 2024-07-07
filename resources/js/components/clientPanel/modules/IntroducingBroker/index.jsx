import React, { useEffect, useState } from 'react';
import { deletePromotionById, getPromotions } from '../../../services/admin/commonService';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IMAGE_BASE_URL } from '../../../config/constants';
import { createIB, getClientBrokers } from '../../../services/client/commonService';
import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from '../../../redux/reducers/user';
import { getIbWithRefferals } from '../../../services/front/commonService';

const IntroducingBroker = () => {
    const [brokers, setBrokers] = useState([]);
    const [selectedBrokers, setSelectedBrokers] = useState([])
    const user = useSelector(state => state.user?.user)
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [clients, setClients] = useState([])
    const [showMore, setSHowMore] = useState([])

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

    const getIbs = async (id) => {
        setIsLoading(true)
        let res = await getIbWithRefferals(id)
        setClients(res)
    }

    useEffect(() => {
        if (user?.introducing_broker && user?.introducing_broker?.status) {
            getIbs(user?.introducing_broker?.client_id)
        }
    }, [])

    useEffect(() => {
        console.log(showMore)
    }, [showMore])

    const removeShowMore = (id) => {
        let tempArray = showMore;
        let newArray = tempArray.filter((item) => item != id)
        console.log("newArray", newArray)
        setSHowMore(newArray)
    }

    const rowRenderer = (item, index, isChild) => {
        return (
            <>

                <tr key={index} className={`${isChild && 'childRow'}`}>
                    <td className="text-end">
                        {
                            isChild &&
                            <span>
                                <a style={{ fontSize: '24px', cursor: 'pointer' }} className="avtar avtar-xs btn-link-success btn-pc-default">
                                    <i className=" ti ti-corner-down-right" />
                                </a>

                            </span>
                        }
                        {item.id}</td>
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
                    <td >{item.created_at}</td>

                    <td >{item?.introducing_broker ? 'Yes' : 'no'} </td>
                    <td className="text-center">
                        {
                            item?.refferals?.length > 0 &&
                            <ul className="list-inline me-auto mb-0 cursor-pointer">
                                {
                                    showMore.includes(item?.id) ?
                                        <li onClick={() => { removeShowMore(item?.id) }} className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Show">
                                            <a style={{ fontSize: '24px', cursor: 'pointer' }} className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                <i className="ti ti-circle-minus" />
                                            </a>
                                        </li>
                                        :
                                        <li onClick={() => { setSHowMore(prev => prev ? [...prev, item?.id] : [item?.id]); }} className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Show">
                                            <a style={{ fontSize: '24px', cursor: 'pointer' }} className="avtar avtar-xs btn-link-success btn-pc-default">
                                                <i className="ti ti-circle-plus" />
                                            </a>
                                        </li>
                                }
                            </ul>
                        }
                    </td>
                </tr>
                {
                    showMore.includes(item?.id) &&
                    item?.refferals.map((subItem, i) => {
                        return (
                            rowRenderer(subItem, i, true)
                        )
                    })
                }
            </>
        )
    }
    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                <div class="page-header-title">
                    <h2 class="mb-5">Introducing Brokers</h2>
                </div>
                {
                    user?.introducing_broker && user?.introducing_broker?.status == 'pending' &&

                    <div className="card table-card">
                        <div className="card-body" style={{ height: '700px' }}>
                            <div className=' text-center' style={{ alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
                                <img src='/assets/images/work-in-progress.png' style={{ width: '150px' }}></img>
                                <h1 className='mt-3'>Your request is now in progress</h1>
                                <p className='text-center'>Your submission has been received and is currently being processed. You will receive notification via email once your IB Application has been approved</p>
                                <button className='btn btn-success' type='button' >Learn more</button>
                            </div>
                        </div>
                    </div>

                }

            </div>
            {
                !user?.introducing_broker &&

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
            {
                user?.introducing_broker && user?.introducing_broker?.status == 'active' &&

                <div className="card table-card">
                    <div className="card-body" >
                        <div className='row'>
                            <h3 className='mt-3 col-md-10 mb-4'>My Refferals Tree </h3>
                            <div className='col-md-2 p-2'>
                                <Link to={'/client/update-broker-links'}><button className='btn btn-success col-md-12'>Update Broker Links</button></Link>
                            </div>
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
                                    <tr >
                                        <td className="text-end">{clients.id} </td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src={IMAGE_BASE_URL + clients?.image} alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">{clients?.first_name} {clients?.last_name}</h6>
                                                    <p className="text-muted f-12 mb-0">(Your Self)</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{clients.email}</td>
                                        <td>{clients.phone}</td>
                                        <td>{clients?.country?.name}</td>
                                        <td >{clients.created_at}</td>

                                        <td >{clients?.introducing_broker ? 'Yes' : 'no'} </td>
                                        <td className="text-center">

                                        </td>
                                    </tr>
                                    {
                                        clients?.referrals && clients?.referrals.map((item, index) => {
                                            return (
                                                <>
                                                    {
                                                        rowRenderer(item, index)
                                                    }

                                                </>

                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            }


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
