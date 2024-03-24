import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { loginSchema } from '../../../../schemas/Admin/Auth';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../../../redux/reducers/user';
import { getCountries } from '../../../../services/front/commonService';
import { SignUpSchema } from '../../../../schemas/ClientSchema/Auth';
import { createUser } from '../../../../services/client/commonService';

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [countries, setCountries] = useState(null);


    const { formik, setFieldValue, values, handleChange, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            country: '',
        },
        validationSchema: SignUpSchema,
        onSubmit: async values => {
            let res = await createUser(values);
            if (res.status == 200) {
                toast.success("You signed up scueecfully. We have sent you an email please verify.")
                navigate("/login")
            } else {
                toast.error(res?.message)
            }
        },
    });

    const getAllCountries = async () => {
        let res = await getCountries();
        setCountries(res)
    }

    useEffect(() => {
        getAllCountries();
    }, [])

    return (
        <div>
            <div className="auth-main">
                <div className="auth-wrapper v1">
                    <div className="auth-form">
                        <div className="card my-5">
                            <div className="card-body">
                                <div className="text-center">
                                    <a href="/"><img src="/assets/images/logo.png" alt="img" /></a>
                                </div>
                                <div className="saprator my-3">
                                    <span>Client Signup</span>
                                </div>
                                <h4 className="text-center f-w-500 mb-3">Signup with your email</h4>
                                <form onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group mb-3">
                                                <input type="text" name='firstName' onChange={handleChange} className={`form-control ${errors.firstName && touched.firstName && 'is-invalid'}`} placeholder="First Name" />
                                                {errors.firstName && touched.firstName && <p className='invalid-feedback'>{errors.firstName}</p>}

                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group mb-3">
                                                <input type="text" onChange={handleChange} name='lastName' className={`form-control ${errors.lastName && touched.lastName && 'is-invalid'}`} placeholder="Last Name" />
                                                {errors.lastName && touched.lastName && <p className='invalid-feedback'>{errors.lastName}</p>}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="email" name='email' onChange={handleChange} className={`form-control ${errors.email && touched.email && 'is-invalid'}`} id="floatingInput" placeholder="Email Address" />
                                        {errors.email && touched.email && <p className='invalid-feedback'>{errors.email}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" onChange={handleChange} name='password' className={`form-control ${errors.password && touched.password && 'is-invalid'}`} id="floatingInput1" placeholder="Password" />
                                        {errors.password && touched.password && <p className='invalid-feedback'> {errors.password}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" onChange={handleChange} name='confirmPassword' className={`form-control ${errors.confirmPassword && touched.confirmPassword && 'is-invalid'}`} id="floatingInput1" placeholder="Confirm Password" />
                                        {errors.confirmPassword && touched.confirmPassword && <p className='invalid-feedback'> {errors.confirmPassword}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="phone" onChange={handleChange} name='phone' className={`form-control ${errors.phone && touched.phone && 'is-invalid'}`} id="floatingInput1" placeholder="Phone number" />
                                        {errors.phone && touched.phone && <p className='invalid-feedback'> {errors.phone}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <select type="select" onChange={handleChange} name='country' className={`form-control ${errors.country && touched.country && 'is-invalid'}`} id="floatingInput1"  >
                                            <option>Select your country</option>
                                            {
                                                countries && countries?.map((item, index) => (
                                                    <option key={index} value={item?.id}>{item?.name}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.country && touched.country && <p className='invalid-feedback'> {errors.country}</p>}
                                    </div>
                                    <div class="d-flex mt-1 justify-content-between">
                                        <div class="form-check">
                                            <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" />
                                            <label class="form-check-label text-muted" for="customCheckc1">I agree to all the Terms & Condition</label>
                                        </div>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Signup</button>
                                    </div>
                                </form>
                                <div className="d-flex justify-content-between align-items-end mt-4">
                                    <h6 className="f-w-500 mb-0">Already have an Account?</h6>
                                    <Link to={'/login'} className="link-primary">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;
