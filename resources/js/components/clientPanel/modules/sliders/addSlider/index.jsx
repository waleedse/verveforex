import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { addPromotion, sliderSchema } from "../../../../schemas/Admin/modules";
import { addWebsitePromotion, addWebsiteSlider, getCountries, getPromotionById, getSliderById, upateWebsitePromotion, upateWebsiteSlider } from "../../../../services/admin/commonService";
import Multiselect from 'multiselect-react-dropdown';
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { sassNull } from "sass";
import { IMAGE_BASE_URL } from "../../../../config/constants";

const AddSlider = () => {
    const [countries, setCountries] = useState([]);
    const [imgUrl, setImageUrl] = useState(null);
    const params = useParams();
    const location = useLocation();
    const isEdit = location.pathname.includes('edit-slider')

    const navigate = useNavigate()

    useEffect(() => {
        if (isEdit) {
            getSById();
        }
    }, [])
    const initialValues = {
        title: "",
        index: "",
        status: 0,
        type: 1,
        countries: [],
        excludeCheck: false,
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
        validationSchema: sliderSchema,
        onSubmit: async (values) => {
            toast.loading("Createing Slider")
            var formData = new FormData();
            formData.append("title", values.title);
            formData.append("index", values.index);
            formData.append("selected_countries", values.countries);
            formData.append("status", values.status);
            formData.append("type", values.type);
            formData.append("id", params.id);
            formData.append("image", values.image);
            formData.append("excluded", values.excludeCheck);
            formData.append("content", values.content);

            let res;
            if (!isEdit) {
                res = await addWebsiteSlider(formData);
            } else {
                res = await upateWebsiteSlider(formData);
            }
            toast.dismiss()
            if (res.status == 200) {
                toast.success(`Slider ${isEdit ? 'Updated' : 'Created'}`)
                navigate('/adminpanel/manage-sliders')
            } else {
                toast.error(res.response.data.message)
            }
        },
    });

    const getAllCountries = async () => {
        let res = await getCountries();
        setCountries(res)
    }

    const getSById = async () => {
        toast.loading("Loading Slider")
        let res = await getSliderById(params?.id);
        toast.dismiss()
        if (res) {
            setFieldValue("title", res.title)
            setFieldValue("index", res.index)
            setFieldValue("countries", res.countries ? JSON.parse(res.countries) : [])
            setFieldValue("type", res.type)
            setFieldValue("status", res.status)
            setFieldValue("image", res.image)
            setFieldValue("content", res.content)
        } else {
            toast.error("Promotion Not found")
            navigate('/adminpanel/manage-promotions')
        }
    }
    useEffect(() => {
        getAllCountries()
    }, [])

    const selectCountry = (val) => {
        setFieldValue("countries", val)
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
                        <h2 class="mb-5">{isEdit ? 'Edit' : 'Add'} Slider</h2>
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
                                        Index
                                    </label>
                                    <input
                                        name="index"
                                        onChange={handleChange}
                                        type="text"
                                        className={`form-control ${errors.index && touched.index && 'is-invalid'}`}
                                        id="inputPassword4"
                                        placeholder="Slider index"
                                        value={values.index}
                                    />
                                    {errors.index && touched.index && <p className='invalid-feedback'>{errors.index}</p>}
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="form-label" htmlFor="inputPassword4">
                                        Slider Content
                                    </label>
                                    <textarea
                                        name="content"
                                        onChange={handleChange}
                                        type="text"
                                        className={`form-control `}
                                        id="inputPassword4"
                                        placeholder="Slider content"
                                        value={values.content}
                                        style={{ height: '300px' }}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="inputState">
                                        Type
                                    </label>
                                    <select name="type" onChange={handleChange} value={values.type} placeholder="Select type" className={`form-select`}>
                                        <option value={1}>All Countries</option>
                                        <option value={2}>Specific Countries</option>
                                    </select>
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
                            </div>
                            {
                                values.type == 2 &&
                                <div className="row">

                                    <div className="form-group col-md-6">
                                        <label className="form-label" htmlFor="inputState">
                                            Countries
                                        </label>
                                        <Multiselect
                                            options={countries} // Options to display in the dropdown
                                            selectedValues={values.countries} // Preselected value to persist in dropdown
                                            onSelect={selectCountry} // Function will trigger on select event
                                            onRemove={selectCountry}
                                            displayValue="name"
                                            className="form-select p-1"
                                        />
                                    </div>
                                </div>
                            }
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <p><span className="text-danger">*</span> Recommended resolution is 1920 * 1080 with file size</p>
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


                            <div className="form-group col-md-4">

                                <label className="form-label" htmlFor="inputState">
                                    Check to exclude countries
                                </label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck"
                                        name="excludeCheck"
                                        checked={values.excludeCheck}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Exclude
                                    </label>
                                </div>
                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                                {isEdit ? 'Update' : 'Create'}  Slider
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSlider;
