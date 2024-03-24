import React, { useEffect, useState } from 'react';
import { deletePromotionById, getPromotions } from '../../../../services/admin/commonService';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IMAGE_BASE_URL } from '../../../../config/constants';

const ManagePromotion = () => {
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
                        <div className="table-responsive">
                            <table className="table table-hover" id="pc-dt-simple">
                                <thead>
                                    <tr>
                                        <th className="text-end">#</th>
                                        <th>Promotion Title</th>
                                        <th>Website Link</th>
                                        <th>Description</th>
                                        <th className="">Type</th>
                                        <th className="text-center">Countries</th>
                                        <th >Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        promotions && promotions.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="text-end">{item.id}</td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-auto pe-0">
                                                                <img src={IMAGE_BASE_URL + item.image} alt="user-image" className="wid-40 rounded" />
                                                            </div>
                                                            <div className="col">
                                                                <h6 className="mb-1">{item.title}</h6>
                                                                {/* <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p> */}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{item.link}</td>
                                                    <td>{item.short_description}</td>
                                                    <td >{item.type == 1 ? "All Countries" : "Sepecific Countries"}</td>
                                                    <td style={{ width: '150px' }} className='text-center'>
                                                        {!item.countries && '-'}
                                                        {
                                                            item.countries &&
                                                            JSON.parse(item.countries)?.map((country, i) => {

                                                                return (
                                                                    <>
                                                                        {i < 3 ?
                                                                            <p key={i} className={`ml-1 badge bg-light-secondary`}>{country?.name}</p>
                                                                            :
                                                                            ''
                                                                        }

                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </td>
                                                    <td ><span className={`badge bg-light-${item.status == 0 ? 'danger' : 'success'}  f-12`}>{item.status == 0 ? 'Draft' : 'Active'}</span> </td>
                                                    <td className="text-center">
                                                        <ul className="list-inline me-auto mb-0">

                                                            <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                                <Link to={`/adminpanel/edit-promotion/${item.id}`} className="avtar avtar-xs btn-link-success btn-pc-default">
                                                                    <i className="ti ti-edit-circle f-18" />
                                                                </Link>
                                                            </li>
                                                            <li onClick={() => { deleteCurrentPromotion(item) }} className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                                <a className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                                    <i className="ti ti-trash f-18" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
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
            {/* [ sample-page ] end */}
        </div>

    );
};

export default ManagePromotion;
