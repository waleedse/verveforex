import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IMAGE_BASE_URL } from '../../../config/constants';
import { useFormik } from 'formik';
import { getCountries } from '../../../services/front/commonService';
import { MyAccountSchema } from '../../../schemas/ClientSchema/Auth';
import toast from 'react-hot-toast';
import { updateProfile } from '../../../services/client/commonService';

const MyAccount = () => {

    const user = useSelector((state) => state.user?.user)
    const [countries, setCountries] = useState(null);
    const [imgUrl, setImageUrl] = useState(null);

    const { formik, setFieldValue, values, handleChange, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            email: user?.email,
            firstName: user?.first_name,
            lastName: user?.last_name,
            phone: user?.phone,
            zipCode: user?.zipcode,
            address: user?.address,
            country: user?.country,
            image: user?.image
        },
        validationSchema: MyAccountSchema,
        onSubmit: async values => {

            toast.loading("Updating your profile...")

            var formData = new FormData();
            formData.append("firstName", values.firstName);
            formData.append("lastName", values.lastName);
            formData.append("email", values.email);
            formData.append("zipcode", values.zipCode);
            formData.append("address", values.address);
            formData.append("phone", values.phone);
            formData.append("image", values.image);
            formData.append("country", values.country);
            console.log(formData)
            let res = await updateProfile(formData);
            toast.dismiss()
            toast.success("Your profile has been updated successfully")
        },
    });

    const getAllCountries = async () => {
        let res = await getCountries();
        setCountries(res)
    }

    useEffect(() => {
        getAllCountries();
    }, [])

    const uploadImage = (e) => {
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        setImageUrl(imageUrl);
        setFieldValue("image", e.target.files[0])

    }

    console.log(errors)
    return (
        <div>
            <div class="page-header-title">
                <h2 class="mb-5">My Account</h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Personal Information</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-12 text-center mb-3">
                                    <div className="user-upload wid-75">
                                        <img src={imgUrl ? imgUrl : IMAGE_BASE_URL + user?.image} alt="img" className="img-fluid" />
                                        <label htmlFor="uplfile" className="img-avtar-upload">
                                            <i className="ti ti-camera f-24 mb-1" />
                                            <span>Upload</span>
                                        </label>
                                        <input onChange={uploadImage} type="file" id="uplfile" className="d-none" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="form-label">First Name</label>
                                        <input onChange={handleChange} name='firstName' value={values.firstName} type="text" className={`form-control ${errors.firstName && touched.firstName && 'is-invalid'}`} defaultValue="Anshan" />
                                        {errors.firstName && touched.firstName && <p className='invalid-feedback'> {errors.firstName}</p>}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="form-label">Last Name</label>
                                        <input onChange={handleChange} name='lastName' value={values.lastName} type="text" className={`form-control ${errors.lastName && touched.lastName && 'is-invalid'}`} defaultValue="Handgun" />
                                        {errors.lastName && touched.lastName && <p className='invalid-feedback'> {errors.lastName}</p>}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="form-label">Country</label>
                                        <select value={values.country} type="select" onChange={handleChange} name='country' className={`form-control ${errors.country && touched.country && 'is-invalid'}`} id="floatingInput1"  >
                                            <option>Select your country</option>
                                            {
                                                countries && countries?.map((item, index) => (
                                                    <option key={index} value={item?.id}>{item?.name}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.country && touched.country && <p className='invalid-feedback'> {errors.country}</p>}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="form-label">Zip code</label>
                                        <input onChange={handleChange} name='zipCode' value={values.zipCode} type="text" className={`form-control ${errors.zipCode && touched.zipCode && 'is-invalid'}`} />
                                        {errors.zipCode && touched.zipCode && <p className='invalid-feedback'> {errors.zipCode}</p>}

                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group" onClick={() => { navigator.clipboard.writeText(window.location?.origin + '/signup?refferal=' + user?.introducing_broker?.refferal_link), toast.dismiss(), toast.success("Copied.") }}>
                                        <label className="form-label" style={{ cursor: 'pointer' }}>Refferal URL (Click to copy)</label>
                                        <input type="text" onClick={() => { navigator.clipboard.writeText(window.location?.origin + '/signup?refferal=' + user?.introducing_broker?.refferal_link), toast.dismiss(), toast.success("Copied.") }} disabled defaultValue={window.location?.origin + '/signup?refferal=' + user?.introducing_broker?.refferal_link} style={{ cursor: 'pointer' }} className={`form-control cursor-pointer ${errors.country && touched.country && 'is-invalid'}`} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">

                    <div className="card">
                        <div className="card-header">
                            <h5>Contact Information</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="form-label">Contact Phone</label>
                                        <input onChange={handleChange} name='phone' value={values.phone} type="text" className={`form-control ${errors.phone && touched.phone && 'is-invalid'}`} defaultValue="(+99) 9999 999 999" />
                                        {errors.phone && touched.phone && <p className='invalid-feedback'> {errors.phone}</p>}

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="form-label">Email <span className="text-danger">*</span></label>
                                        <input onChange={handleChange} value={values.email} type="text" name='email' className={`form-control ${errors.email && touched.email && 'is-invalid'}`} defaultValue="demo@sample.com" />
                                        {errors.email && touched.email && <p className='invalid-feedback'> {errors.email}</p>}

                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="form-label">Address</label>
                                        <textarea onChange={handleChange} value={values.address} name='address' className={`form-control ${errors.address && touched.address && 'is-invalid'}`} />
                                        {errors.address && touched.address && <p className='invalid-feedback'> {errors.address}</p>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-end btn-page">
                        <div className="btn btn-outline-secondary">Cancel</div>
                        <div className="btn btn-primary" onClick={handleSubmit}>Update Profile</div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyAccount;
