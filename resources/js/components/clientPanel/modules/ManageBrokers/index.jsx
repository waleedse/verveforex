import React, { useEffect, useState } from 'react';
import { deletePromotionById, getPromotions } from '../../../services/admin/commonService';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IMAGE_BASE_URL } from '../../../config/constants';

const ManageBrokers = () => {
    const [promotions, setPromotions] = useState([]);

    const getAllPromotions = async () => {
        let res = await getPromotions();
        setPromotions(res);
    }

    useEffect(() => {
        getAllPromotions();
    }, [])

    const deleteCurrentPromotion = async (item) => {
        let res = deletePromotionById(item?.id)
        getAllPromotions();
        toast.success('Promotion deleted')
    }


    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                <div class="page-header-title">
                    <h2 class="mb-5">Manage Promotions</h2>
                </div>
                <div className="card table-card">
                    <div className="card-body">
                        <div className="text-end p-4 pb-sm-2">
                            <Link to="/adminpanel/add-promotion" className="btn btn-primary">
                                <i className="ti ti-plus f-18" /> Add Promotion
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            {/* [ sample-page ] end */}
        </div>

    );
};

export default ManageBrokers;
