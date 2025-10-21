import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { loginSchema } from '../../../../schemas/Admin/Auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../../../redux/reducers/user';
import { resetPasswordSendEmail } from '../../../../services/client/commonService';

const ClientLogin = () => {
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
            axios.post('/api/client-login', payload).then(res => {
                if (res.data?.status == 200) {
                    localStorage.setItem("token", res.data.token)
                    dispatch(SET_USER(res.data?.user))
                    navigate('/client')
                } else if (res.data?.status == 402) {
                    navigate('/verify-email', { state: { email: values.email } })
                }
                else {
                    toast.error(res?.data?.message)
                }
            }).catch(e => {
                toast.error(e.response.data.message)
            })
        },
    });

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/client")
        }
    }, [])

    const handleForgotPassword = async () => {
        if (!errors.email) {
            toast.loading("Sending reset password email...")
            let res = await resetPasswordSendEmail({ email: values.email });
            toast.dismiss()
            console.log(res)
            if (res.status == 200) {
                toast.success("Reset password email sent. Please check your email")
            } else {
                toast.error(res.response.data?.message)
            }
        } else {
            toast.error("Enter email so, we'll send the reset password link to your email if it registered.")
        }
    }
    return (
        <div>
            <div className="auth-main">
                <div className="auth-wrapper v1">
                    <div className="auth-form">
                        <div className="card my-5">
                            <div className="card-body">
                                <div className="text-center">
                                    <a href="/"><img width={'50%'} src="/assets/images/logoblack.png" alt="img" /></a>
                                </div>
                                <div className="saprator my-3">
                                    <span>Client Login</span>
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
                                        <h6 style={{ cursor: 'pointer' }} onClick={handleForgotPassword} className="text-secondary f-w-400 mb-0">Forgot Password?</h6>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <div className="d-flex justify-content-between align-items-end mt-4">
                                    <h6 className="f-w-500 mb-0">Don't have an Account?</h6>
                                    <a href="/signup" className="link-primary">Create Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClientLogin;
