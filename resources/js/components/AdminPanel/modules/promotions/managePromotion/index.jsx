import React, { useEffect, useState } from 'react';
import { getPromotions } from '../../../../services/admin/commonService';

const ManagePromotion = () => {
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
                <div className="card table-card">
                    <div className="card-body">
                        <div className="text-end p-4 pb-sm-2">
                            <a href="ecom_product-add.html" className="btn btn-primary">
                                <i className="ti ti-plus f-18" /> Add Product
                            </a>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover" id="pc-dt-simple">
                                <thead>
                                    <tr>
                                        <th className="text-end">#</th>
                                        <th>Product Detail</th>
                                        <th>Categories</th>
                                        <th className="text-end">Price</th>
                                        <th className="text-end">Qty</th>
                                        <th>Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-end">7</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-1.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td className="text-end">$14.59</td>
                                        <td className="text-end">70</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">2</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-2.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Boat On-Ear Wireless</h6>
                                                    <p className="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td className="text-end">$81.99</td>
                                        <td className="text-end">45</td>
                                        <td><span className="badge bg-light-danger  f-12">Out of Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">5</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-3.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Fitbit MX30 Smart Watch</h6>
                                                    <p className="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Fashion, Watch</td>
                                        <td className="text-end">$49.9</td>
                                        <td className="text-end">21</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">7</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-4.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td className="text-end">$14.59</td>
                                        <td className="text-end">70</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">2</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-5.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Boat On-Ear Wireless</h6>
                                                    <p className="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td className="text-end">$81.99</td>
                                        <td className="text-end">45</td>
                                        <td><span className="badge bg-light-danger  f-12">Out of Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">5</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-6.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Fitbit MX30 Smart Watch</h6>
                                                    <p className="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Fashion, Watch</td>
                                        <td className="text-end">$49.9</td>
                                        <td className="text-end">21</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">7</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-7.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td className="text-end">$14.59</td>
                                        <td className="text-end">70</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">2</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-8.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Boat On-Ear Wireless</h6>
                                                    <p className="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td className="text-end">$81.99</td>
                                        <td className="text-end">45</td>
                                        <td><span className="badge bg-light-danger  f-12">Out of Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">7</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-1.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td className="text-end">$14.59</td>
                                        <td className="text-end">70</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">2</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-2.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Boat On-Ear Wireless</h6>
                                                    <p className="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td className="text-end">$81.99</td>
                                        <td className="text-end">45</td>
                                        <td><span className="badge bg-light-danger  f-12">Out of Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">5</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-3.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Fitbit MX30 Smart Watch</h6>
                                                    <p className="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Fashion, Watch</td>
                                        <td className="text-end">$49.9</td>
                                        <td className="text-end">21</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">7</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-4.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td className="text-end">$14.59</td>
                                        <td className="text-end">70</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">2</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-5.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Boat On-Ear Wireless</h6>
                                                    <p className="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td className="text-end">$81.99</td>
                                        <td className="text-end">45</td>
                                        <td><span className="badge bg-light-danger  f-12">Out of Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">5</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-6.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Fitbit MX30 Smart Watch</h6>
                                                    <p className="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Fashion, Watch</td>
                                        <td className="text-end">$49.9</td>
                                        <td className="text-end">21</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">7</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-7.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td className="text-end">$14.59</td>
                                        <td className="text-end">70</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">2</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-8.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Boat On-Ear Wireless</h6>
                                                    <p className="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td className="text-end">$81.99</td>
                                        <td className="text-end">45</td>
                                        <td><span className="badge bg-light-danger  f-12">Out of Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">7</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-1.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td className="text-end">$14.59</td>
                                        <td className="text-end">70</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">2</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-2.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Boat On-Ear Wireless</h6>
                                                    <p className="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td className="text-end">$81.99</td>
                                        <td className="text-end">45</td>
                                        <td><span className="badge bg-light-danger  f-12">Out of Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">5</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-3.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Fitbit MX30 Smart Watch</h6>
                                                    <p className="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Fashion, Watch</td>
                                        <td className="text-end">$49.9</td>
                                        <td className="text-end">21</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">7</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-4.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td className="text-end">$14.59</td>
                                        <td className="text-end">70</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">2</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-5.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Boat On-Ear Wireless</h6>
                                                    <p className="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td className="text-end">$81.99</td>
                                        <td className="text-end">45</td>
                                        <td><span className="badge bg-light-danger  f-12">Out of Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">5</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-6.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Fitbit MX30 Smart Watch</h6>
                                                    <p className="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Fashion, Watch</td>
                                        <td className="text-end">$49.9</td>
                                        <td className="text-end">21</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">7</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-7.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                                                    <p className="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Laptop</td>
                                        <td className="text-end">$14.59</td>
                                        <td className="text-end">70</td>
                                        <td><span className="badge bg-light-success  f-12">In Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">2</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-auto pe-0">
                                                    <img src="/admin/assets/images/application/img-prod-8.jpg" alt="user-image" className="wid-40 rounded" />
                                                </div>
                                                <div className="col">
                                                    <h6 className="mb-1">Boat On-Ear Wireless</h6>
                                                    <p className="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Electronics, Headphones</td>
                                        <td className="text-end">$81.99</td>
                                        <td className="text-end">45</td>
                                        <td><span className="badge bg-light-danger  f-12">Out of Stock</span> </td>
                                        <td className="text-center">
                                            <ul className="list-inline me-auto mb-0">
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                                                    <a href="#" className="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal" data-bs-target="#cust-modal">
                                                        <i className="ti ti-eye f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                                                    <a href="ecom_product-add.html" className="avtar avtar-xs btn-link-success btn-pc-default">
                                                        <i className="ti ti-edit-circle f-18" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                                                    <a href="#" className="avtar avtar-xs btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
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
