import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { addBroker, addPromotion } from "../../../../schemas/Admin/modules";
import { addWebsiteBroker, addWebsitePromotion, getBrokerById, getCountries, getPromotionById, upateWebsiteBroker, upateWebsitePromotion } from "../../../../services/admin/commonService";
import Multiselect from 'multiselect-react-dropdown';
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { sassNull } from "sass";
import { IMAGE_BASE_URL } from "../../../../config/constants";

const AddBroker = () => {
    const [countries, setCountries] = useState([]);
    const [imgUrl, setImageUrl] = useState(null);
    const params = useParams();
    const location = useLocation();
    const isEdit = location.pathname.includes('edit-broker')

    const navigate = useNavigate()

    useEffect(() => {
        if (isEdit) {
            getProById();
        }
    }, [])
    const initialValues = {
        title: "",
        websiteLink: "",
        signupLink: "",
        status: 0,
        image: null,
        shortDescription: ''
    };

    useEffect(() => {
        resetForm()
    }, [location.pathname])

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
        validationSchema: addBroker,
        onSubmit: async (values) => {
            toast.loading("createing broker")
            var formData = new FormData();
            formData.append("title", values.title);
            formData.append("link", values.websiteLink);
            formData.append("signup_link", values.signupLink);
            formData.append("status", values.status);
            formData.append("id", params.id);
            formData.append("image", values.image);
            formData.append("shortDescription", values.shortDescription);
            // let payload = {
            //     title: values.title,
            //     link: values.websiteLink,
            //     selectedCountries: values.countries,
            //     status: values.status,
            //     type: values.type,
            //     id: params.id,
            //     image: values.image
            // };
            let res;
            if (!isEdit) {
                res = await addWebsiteBroker(formData);
            } else {
                res = await upateWebsiteBroker(formData);
            }
            toast.dismiss()
            if (res.status == 200) {
                toast.success(`Broker ${isEdit ? 'Updated' : 'Created'}`)
                navigate('/adminpanel/manage-brokers')
            } else {
                toast.error(res.response.data.message)
            }
        },
    });

    const getProById = async () => {
        toast.loading("Loading Broker")
        let res = await getBrokerById(params?.id);
        toast.dismiss()
        if (res) {
            setFieldValue("title", res.title)
            setFieldValue("websiteLink", res.link)
            setFieldValue("signupLink", res.signup_link)
            setFieldValue("status", res.status)
            setFieldValue("image", res.image)
            setFieldValue("shortDescription", res.short_description)
        } else {
            toast.error("Broker Not found")
            navigate('/adminpanel/manage-brokers')
        }
    }


    const uploadImage = (e) => {
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        setImageUrl(imageUrl);
        setFieldValue("image", e.target.files[0])

    }
    return (
        <div className="row">
            <div className="col-md-12">
                <div class="col-md-12">
                    <div class="page-header-title">
                        <h2 class="mb-5">{isEdit ? 'Edit' : 'Add'} Broker</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="inputEmail4">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={values.title}
                                        className={`form-control ${errors.title && touched.title && 'is-invalid'}`}
                                        id="inputEmail4"
                                        placeholder="title"
                                        onChange={handleChange}

                                    />
                                    {errors.title && touched.title && <p className='invalid-feedback'>{errors.title}</p>}

                                </div>

                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="inputPassword4">
                                        Website Link
                                    </label>
                                    <input
                                        name="websiteLink"
                                        onChange={handleChange}
                                        type="text"
                                        className={`form-control ${errors.websiteLink && touched.websiteLink && 'is-invalid'}`}
                                        id="inputPassword4"
                                        placeholder="Website promotion link"
                                        value={values.websiteLink}
                                    />
                                    {errors.websiteLink && touched.websiteLink && <p className='invalid-feedback'>{errors.websiteLink}</p>}
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="form-label" htmlFor="inputPassword4">
                                        Short Description
                                    </label>
                                    <input
                                        name="shortDescription"
                                        onChange={handleChange}
                                        type="text"
                                        className={`form-control ${errors.shortDescription && touched.shortDescription && 'is-invalid'}`}
                                        id="inputPassword4"
                                        placeholder="Short description"
                                        value={values.shortDescription}
                                    />
                                    {errors.shortDescription && touched.shortDescription && <p className='invalid-feedback'>{errors.shortDescription}</p>}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="inputState">
                                        Status
                                    </label>
                                    <select name="status" onChange={handleChange} value={values.status} className={`form-select`}>
                                        <option value={1}>Active</option>
                                        <option value={0}>Draft</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="inputPassword4">
                                        Signup Link
                                    </label>
                                    <input
                                        name="signupLink"
                                        onChange={handleChange}
                                        type="text"
                                        className={`form-control ${errors.signupLink && touched.signupLink && 'is-invalid'}`}
                                        id="inputPassword4"
                                        placeholder="Signup promotion link"
                                        value={values.signupLink}
                                    />
                                    {errors.signupLink && touched.signupLink && <p className='invalid-feedback'>{errors.signupLink}</p>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <p><span className="text-danger">*</span> Recommended resolution is 640*640 with file size</p>
                                        <label className="btn btn-outline-secondary" htmlFor="flupld"><i className="ti ti-upload me-2" /> Click to Upload</label>
                                        <input onChange={uploadImage} type="file" id="flupld" className={`d-none ${errors.image && touched.image && 'is-invalid'}`} />
                                        {errors.image && touched.image && <p className='invalid-feedback'>{errors.image}</p>}

                                    </div>
                                </div>
                                {
                                    (imgUrl || values.image) &&
                                    <div className="col-auto ">
                                        <img src={imgUrl ? imgUrl : IMAGE_BASE_URL + values.image} alt="user-image" className="wid-100 rounded" />
                                    </div>
                                }
                            </div>



                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                                {isEdit ? 'Update' : 'Create'}  Broker
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBroker;
