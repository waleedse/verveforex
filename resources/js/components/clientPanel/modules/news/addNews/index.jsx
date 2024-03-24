import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { addPromotion, newsSchema, sliderSchema } from "../../../../schemas/Admin/modules";
import { addNews, getNewsById, updateNews } from "../../../../services/admin/commonService";
import Multiselect from 'multiselect-react-dropdown';
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { sassNull } from "sass";
import { IMAGE_BASE_URL } from "../../../../config/constants";
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';

const AddNews = () => {
    const [countries, setCountries] = useState([]);
    const [imgUrl, setImageUrl] = useState(null);
    const params = useParams();
    const location = useLocation();
    const isEdit = location.pathname.includes('edit-news')

    const navigate = useNavigate()

    useEffect(() => {
        if (isEdit) {
            getSById();
        }
    }, [])
    const initialValues = {
        title: "",
        status: 0,
        feature: false,
        image: null,
        body: ''
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
        validationSchema: newsSchema,
        onSubmit: async (values) => {
            toast.loading("Createing News")
            var formData = new FormData();
            formData.append("title", values.title);
            formData.append("status", values.status);
            formData.append("id", params.id);
            formData.append("image", values.image);
            formData.append("feature", values.feature);
            formData.append("body", values.body);

            let res;
            if (!isEdit) {
                res = await addNews(formData);
            } else {
                res = await updateNews(formData);
            }
            toast.dismiss()
            if (res.status == 200) {
                toast.success(`News ${isEdit ? 'Updated' : 'Created'}`)
                navigate('/adminpanel/manage-news')
            } else {
                toast.error(res.response.data.message)
            }
        },
    });


    const getSById = async () => {
        toast.loading("Loading news")
        let res = await getNewsById(params?.id);
        toast.dismiss()
        if (res) {
            setFieldValue("title", res.title)
            setFieldValue("status", res.status)
            setFieldValue("image", res.image)
            setFieldValue("body", res.body)
            setFieldValue("feature", res.feature)
        } else {
            toast.error("News Not found")
            navigate('/adminpanel/manage-news')
        }
    }

    const uploadImage = (e) => {
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        setImageUrl(imageUrl);
        setFieldValue("image", e.target.files[0])

    }

    console.log("erros", errors)

    const updateBody = (e) => {
        console.log(e)
        setFieldValue("body", e)
    }
    return (
        <div className="row">
            <div className="col-md-12">
                <div class="col-md-12">
                    <div class="page-header-title">
                        <h2 class="mb-5">{isEdit ? 'Edit' : 'Add'} News</h2>
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
                                    <label className="form-label" htmlFor="inputState">
                                        Status
                                    </label>
                                    <select name="status" onChange={handleChange} value={values.status} className={`form-select`}>
                                        <option value={1}>Active</option>
                                        <option value={0}>Draft</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-12">
                                    <label className="form-label" htmlFor="inputPassword4">
                                        News Content
                                    </label>
                                    <ReactQuill
                                        name="body"
                                        onChange={updateBody}
                                        className={`form-control p-0 ${errors.body && touched.body && 'is-invalid'}`}
                                        id="inputPassword4"
                                        placeholder="News body"
                                        value={values.body || ""}
                                        style={{ minHeight: '300px' }}
                                    // style={{ height: '300px' }}
                                    />
                                    {errors.body && touched.body && <p className='invalid-feedback'>{errors.body}</p>}
                                </div>


                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        {/* <p><span className="text-danger">*</span> Recommended resolution is 1920 * 1080 with file size</p> */}
                                        <label className="btn btn-outline-secondary" htmlFor="flupld"><i className="ti ti-upload me-2" /> Click to Upload</label>
                                        <input onChange={uploadImage} type="file" id="flupld" className={`d-none ${errors.image && touched.image && 'is-invalid'}`} />
                                        {errors.image && touched.image && <p className='invalid-feedback'>{errors.image}</p>}

                                    </div>
                                </div>
                                {
                                    (imgUrl || values.image) &&
                                    <div className="col-auto ">
                                        <img src={imgUrl ? imgUrl : IMAGE_BASE_URL + values.image} alt="user-image" className="wid-150 rounded" />
                                    </div>
                                }
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">

                                    <label className="form-label" htmlFor="inputState">
                                        Check to Feature on homepage
                                    </label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                            name="feature"
                                            checked={values.feature}
                                            onChange={() => { setFieldValue('feature', !values.feature) }}
                                        />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Feature
                                        </label>
                                    </div>

                                </div>

                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                                {isEdit ? 'Update' : 'Create'}  News
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNews;
