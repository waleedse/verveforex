import React, { useEffect, useState } from 'react';
// import { deletePromotionById, getPromotions } from '../../../services/admin/commonService';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IMAGE_BASE_URL } from '../../../../../../../config/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getClientPromotion } from '../../../../../../../services/admin/commonService';

const Promotions = () => {
    const [promotions, setPromotions] = useState([]);
    const [showModal, setShowModal] = useState(null)
    const params = useParams()

    const dispatch = useDispatch()

    const getAllPromotions = async () => {
        let res = await getClientPromotion(params?.id);
        setPromotions(res?.clientPromotion);
    }

    useEffect(() => {
        getAllPromotions();
    }, [])






    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                {/* <div class="page-header-title">
                    <h2 class="mb-5">Promotions</h2>
                </div> */}
                <div className="card    ">
                    <div className="card-body">
                        <div className='row p-4'>


                            {
                                promotions && promotions?.map((item, index) => (
                                    <div className='col-md-3 px-2'>
                                        <div className='card '>
                                            <div className='card-body p-1'>
                                                <img className='rounder-broder' style={{ width: '100%', borderRadius: '7px' }} src={IMAGE_BASE_URL + item?.promotion?.image}></img>
                                                <h3 className='pt-2'>{item?.promotion?.title}</h3>
                                                <p className='content-body'>{item?.promotion?.short_description}</p>
                                                {/* <div className="row"> */}
                                                {/* <div className='col-md-6'> */}
                                                <Link target='_blank' to={item?.promotion?.link}><button className="btn btn-light-warning col-md-12" type="button">Details</button></Link>
                                                {/* </div> */}
                                                {/* <div className='col-md-6 text-right' style={{ textAlign: 'right' }}> */}
                                                {/* </div> */}
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div >
            </div >
            {/* [ sample-page ] end */}

        </div >

    );
};

export default Promotions;
