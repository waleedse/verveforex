import React, { useEffect, useState } from 'react';
// import { deletePromotionById, getPromotions } from '../../../services/admin/commonService';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IMAGE_BASE_URL } from '../../../config/constants';
import { addClientPromotion, deactivatePromotion, getClientPromotions } from '../../../services/client/commonService';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER, UPDATE_USER } from '../../../redux/reducers/user';

const ManagePromotion = () => {
    const [promotions, setPromotions] = useState([]);
    const [showModal, setShowModal] = useState(null)
    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch()

    const getAllPromotions = async () => {
        let res = await getClientPromotions();
        setPromotions(res);
    }

    useEffect(() => {
        getAllPromotions();
    }, [])


    const addPormotion = async (id) => {
        let res = await addClientPromotion({ id })
        if (res.status == 200) {
            toast.success("You are now enrolled.")
            setShowModal(null)
            updateUser()

        }
    }

    const updateUser = () => {
        axios.get(`/api/check-auth/client`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }).then((res) => {
            dispatch(SET_USER(res.data?.user));
        }).catch((e) => {
        });
    }

    const deactivateClientPromotion = async () => {
        toast.loading("Deactivating promotion...")
        let res = await deactivatePromotion(user?.client_promotion?.id)
        toast.dismiss()
        if (res.status == 200) {
            toast.success("Promotion deactivated")
            updateUser()
        }
    }

    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                <div class="page-header-title">
                    <h2 class="mb-5">Promotions</h2>
                </div>
                <div className="card    ">
                    <div className="card-body">
                        <div className='row p-4'>
                            {
                                user?.client_promotion ?


                                    < div className=' text-center' style={{ alignItems: 'center', justifyContent: 'center', marginTop: '8%', marginBottom: '8%' }}>
                                        <img src='/assets/images/work-in-progress.png' style={{ width: '150px' }}></img>
                                        <h1 className='mt-3'>You are enrolled into the {user?.client_promotion?.promotion?.title} Promotion</h1>
                                        <p className='text-center'>You will recieve commissions and other benifits of this promotion now. For further assistance please contact support</p>
                                        <button onClick={() => { deactivateClientPromotion() }} className='btn btn-danger' type='button' >Deactivate promotion</button>
                                    </div>

                                    :
                                    <>
                                        {
                                            promotions?.promotion && promotions.promotion?.map((item, index) => (
                                                <div className='col-md-3 px-2'>
                                                    <div className='card '>
                                                        <div className='card-body p-1'>
                                                            <img className='rounder-broder' style={{ width: '100%', borderRadius: '7px' }} src={IMAGE_BASE_URL + item?.image}></img>
                                                            <h3 className='pt-2'>{item?.title}</h3>
                                                            <p className='content-body'>{item?.short_description}</p>
                                                            {/* <div className="row"> */}
                                                            {/* <div className='col-md-6'> */}
                                                            <Link target='_blank' to={item?.link}><button className="btn btn-light-warning col-md-12" type="button">Details</button></Link>
                                                            {/* </div> */}
                                                            {/* <div className='col-md-6 text-right' style={{ textAlign: 'right' }}> */}
                                                            <button onClick={() => { setShowModal(item) }} className="btn mt-2 btn-light-primary col-md-12" type="button">Enroll Now</button>
                                                            {/* </div> */}
                                                            {/* </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </>
                            }
                        </div>

                    </div>
                </div >
            </div >
            {/* [ sample-page ] end */}
            {
                showModal &&
                <div id="exampleModalCenter" className="modal fade show" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" style={{ display: 'block' }} aria-modal="true" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Are you sure you want to enroll in to this promotion</h5>
                                <button onClick={() => { setShowModal(null) }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>You will be enroll into this promotion.</p>
                            </div>
                            <div class="modal-footer">
                                <button onClick={() => { setShowModal(null) }} type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" onClick={(e) => { addPormotion(showModal?.id) }} class="btn btn-success">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >

    );
};

export default ManagePromotion;
