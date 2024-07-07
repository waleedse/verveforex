import React, { useEffect, useState } from 'react';
// import { deletePromotionById, getPromotions } from '../../../services/admin/commonService';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IMAGE_BASE_URL } from '../../../config/constants';
import { getClientPromotions } from '../../../services/client/commonService';

const ManagePromotion = () => {
    const [promotions, setPromotions] = useState([]);

    const getAllPromotions = async () => {
        let res = await getClientPromotions();
        setPromotions(res);
    }

    useEffect(() => {
        getAllPromotions();
    }, [])




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
                                promotions?.promotion && promotions.promotion?.map((item, index) => (
                                    <a href={item?.link} target='_blank' className='col-md-3 px-2'>
                                        <div className='card '>
                                            <div className='card-body p-1'>
                                                <img className='rounder-broder' style={{ width: '100%', borderRadius: '7px' }} src={IMAGE_BASE_URL + item?.image}></img>
                                                <h3 className='pt-2'>{item?.title}</h3>
                                                <p className='content-body'>{item?.short_description}</p>
                                                <div className="row">
                                                    <div className='col-md-6'>
                                                        <button className="btn btn-light-warning col-md-12" type="button">Details</button>
                                                    </div>
                                                    <div className='col-md-6 text-right' style={{ textAlign: 'right' }}>
                                                        <button className="btn btn-light-primary col-md-12" type="button">Enroll Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
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

export default ManagePromotion;
