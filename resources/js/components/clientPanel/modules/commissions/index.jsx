import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getClientCommissions } from '../../../services/client/commonService';

const Commissions = () => {
    const [commissions, setCommisions] = useState([]);

    const getCommissions = async () => {
        let res = await getClientCommissions();
        setCommisions(res?.commissions);
    }

    useEffect(() => {
        getCommissions();
    }, [])


    const initialValues = {
        commission: "",
        paymentType: "usd",
        notes: "",
    };

    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                <div class="page-header-title">
                    <h2 class="mb-5">Manage Commissions</h2>
                </div>
                <div className="card table-card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover" id="pc-dt-simple">
                                <thead>
                                    <tr>
                                        <th>ID.</th>
                                        <th>Broker</th>
                                        <th>Commission</th>
                                        <th>Payment type</th>
                                        <th>Notes</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        commissions && commissions.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.client_broker?.broker?.title}</td>

                                                    <td>{item.commission}</td>
                                                    <td>{item.payment_type}</td>
                                                    <td>{item?.notes}</td>
                                                    <td>{item?.created_at.toLocaleString()}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Commissions;
