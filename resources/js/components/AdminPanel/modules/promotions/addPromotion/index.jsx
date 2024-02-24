import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { addPromotion } from "../../../../schemas/Admin/modules";
import { addWebsitePromotion, getCountries } from "../../../../services/admin/commonService";
import Multiselect from 'multiselect-react-dropdown';
import toast from "react-hot-toast";

const AddPromotion = () => {
    const [countries, setCountries] = useState([]);

    const initialValues = {
        title: "",
        websiteLink: "",
        status: 0,
        type: 1,
        countries: [],
        excludeCheck: false
    };

    const {
        formik,
        setFieldValue,
        values,
        handleChange,
        touched,
        errors,
        handleSubmit,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: addPromotion,
        onSubmit: async (values) => {
            toast.loading("createing promotion")
            let payload = {
                title: values.title,
                link: values.websiteLink,
                selectedCountries: values.countries,
                status: values.status,
                type: values.type
            };
            let res = await addWebsitePromotion(payload);
            toast.dismiss()
            if (res.status == 200) {
                toast.success("Promotion created")
            } else {
                toast.error(res.response.data.message)
            }
        },
    });

    const getAllCountries = async () => {
        let res = await getCountries();
        setCountries(res)
    }
    useEffect(() => {
        getAllCountries()
    }, [])

    const selectCountry = (val) => {
        setFieldValue("countries", val)
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div class="col-md-12">
                    <div class="page-header-title">
                        <h2 class="mb-5">Add Promotion</h2>
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
                                        type="password"
                                        className={`form-control ${errors.websiteLink && touched.websiteLink && 'is-invalid'}`}
                                        id="inputPassword4"
                                        placeholder="Website promotion link"
                                        value={values.websiteLink}
                                    />
                                    {errors.websiteLink && touched.websiteLink && <p className='invalid-feedback'>{errors.websiteLink}</p>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="inputState">
                                        Type
                                    </label>
                                    <select name="type" onChange={handleChange} value={values.type} placeholder="Select type" className={`form-select `}>
                                        <option value={1}>All Countries</option>
                                        <option value={2}>Specific Countries</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="inputState">
                                        Status
                                    </label>
                                    <select name="status" onChange={handleChange} value={values.status} className={`form-select `}>
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
                                Create Promotion
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPromotion;
