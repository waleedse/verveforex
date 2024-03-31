import React, { useEffect, useState } from 'react';
import { deletePromotionById, getPromotions } from '../../../services/admin/commonService';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IMAGE_BASE_URL } from '../../../config/constants';

const IntroducingBroker = () => {
    const [promotions, setPromotions] = useState([]);

    const getAllPromotions = async () => {
        let res = await getPromotions();
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
                    <h2 class="mb-5">Introducing Brokers</h2>
                </div>
                <div className="card table-card">
                    <div className="card-body">
                        <div className="text-end p-4 pb-sm-2">

                        </div>

                    </div>
                </div>
            </div>
            {/* [ sample-page ] end */}
        </div>

    );
};

export default IntroducingBroker;
