import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { createCommission, getAllClients, getClientommissions } from '../../../../../../../services/admin/commonService';
import { IMAGE_BASE_URL } from '../../../../../../../config/constants';
import { useFormik } from 'formik';
import { addBroker, addCommission } from '../../../../../../../schemas/Admin/modules';

const Commissions = () => {
    const [commissions, setCommisions] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const params = useParams()

    const getCommissions = async () => {
        let res = await getClientommissions(params?.id);
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


    const {
        formik,
        setFieldValue,
        values,
        handleChange,
        touched,
        errors,
        handleSubmit,
        resetForm
    } = useFormik({
        initialValues: initialValues,
        validationSchema: addCommission,
        onSubmit: async (values) => {
            toast.loading("createing commission")
            var formData = new FormData();
            formData.append("commission", values.commission);
            formData.append("paymentType", values.paymentType);
            formData.append("notes", values.notes);
            formData.append("clientBrokerId", params?.id);

            let res = await createCommission(formData);
            toast.dismiss()
            if (res.status == 200) {
                toast.success(`Client commission created`)
                getCommissions()
                setShowModal(false)
            } else {
                toast.error(res.response.data.message)
            }
        },
    });



    return (
        <div className="row">
            {/* [ sample-page ] start */}
            <div className="col-sm-12">
                <div class="page-header-title">
                    <h2 class="mb-5">Manage Commissions</h2>
                </div>
                <div className="card table-card">
                    <div className="card-body">
                        <div className="text-end p-4 pb-sm-2">
                            <button onClick={() => { setShowModal(true) }} className="btn btn-primary">
                                <i className="ti ti-plus f-18" /> Add Commission
                            </button>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover" id="pc-dt-simple">
                                <thead>
                                    <tr>
                                        <th>ID.</th>
                                        <th>Commission</th>
                                        <th>Payment type</th>
                                        <th>Notes</th>
                                        <th>Created By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        commissions && commissions.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.id}</td>

                                                    <td>{item.commission}</td>
                                                    <td>{item.payment_type}</td>
                                                    <td>{item?.notes}</td>
                                                    <td >{item?.author?.first_name}</td>
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
            {
                showModal &&
                <div id="exampleModalCenter" className="modal fade show" tabIndex={-1} aria-labelledby="exampleModalCenterTitle" style={{ display: 'block' }} aria-modal="true" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Add Client Commissions</h5>
                                <button onClick={() => { setShowModal(false) }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form>
                                <div class="modal-body">

                                    <div className="form-group">
                                        <label className="form-label">Enter Commission</label>
                                        <input name="commission" onChange={handleChange} className={`form-control ${errors.commission && touched.commission && 'is-invalid'}`} type="number"></input>
                                        {errors.commission && touched.commission && <p className='invalid-feedback'>{errors.commission}</p>}

                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Payment type</label>
                                        <select name="paymentType" onChange={handleChange} className='form-control' type="text">
                                            <option value={"usd"}>USD</option>
                                            <option value={"pound"}>Pound</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Write your Notes</label>
                                        <textarea name="notes" onChange={handleChange} className='form-control' style={{ height: '200px' }}></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button onClick={() => { setShowModal(false) }} type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" onClick={handleSubmit} class="btn btn-success">Submit Application</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div >

    );
};

export default Commissions;
