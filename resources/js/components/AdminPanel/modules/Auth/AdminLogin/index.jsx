import { useFormik } from 'formik';
import React from 'react';
import { loginSchema } from '../../../../schemas/Admin/Auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../../../redux/reducers/admin';

const AdminLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { formik, setFieldValue, values, handleChange, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            let payload = {
                email: values.email,
                password: values.password
            }
            axios.post('/api/login', payload).then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token)
                dispatch(SET_USER(res.data))
                navigate('/adminpanel')

            }).catch(e => {
                toast.error(e.response.data.message)
            })
        },
    });
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
                                    <span>Admin Login</span>
                                </div>
                                <h4 className="text-center f-w-500 mb-3">Login with your email</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input type="email" name='email' onChange={handleChange} className={`form-control ${errors.email && touched.email && 'is-invalid'}`} id="floatingInput" placeholder="Email Address" />
                                        {errors.email && touched.email && <p className='invalid-feedback'>{errors.email}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" onChange={handleChange} name='password' className={`form-control ${errors.email && touched.email && 'is-invalid'}`} id="floatingInput1" placeholder="Password" />
                                        {errors.password && touched.password && <p className='invalid-feedback'> {errors.password}</p>}
                                    </div>
                                    <div className="d-flex mt-1 justify-content-between align-items-center">
                                        <div className="form-check">
                                            <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" defaultChecked />
                                            <label className="form-check-label text-muted" htmlFor="customCheckc1">Remember me?</label>
                                        </div>
                                        <h6 className="text-secondary f-w-400 mb-0">Forgot Password?</h6>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                {/* <div className="d-flex justify-content-between align-items-end mt-4">
            <h6 className="f-w-500 mb-0">Don't have an Account?</h6>
            <a href="#" className="link-primary">Create Account</a>
          </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminLogin;
