import { useFormik } from 'formik';
import React from 'react';
import { loginSchema } from '../../../../schemas/Admin/Auth';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../../../redux/reducers/user';
import { ResetPasswordSchema } from '../../../../schemas/ClientSchema/Auth';

const ResetPassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams();
    const location = useLocation()

    const { formik, setFieldValue, values, handleChange, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            confirmPassword: '',
            password: '',
        },
        validationSchema: ResetPasswordSchema,
        onSubmit: async values => {
            const queryParams = new URLSearchParams(window.location.search);
            const email = queryParams.get('email');
            toast.loading("Reseting you password")
            let payload = {
                password_confirmation: values.confirmPassword,
                password: values.password,
                token: params?.token,
                email: email
            }
            await axios.post('/api/reset-password', payload).then(res => {
                toast.dismiss()
                toast.success("Password reset successfully. please login.")
                navigate('/login')

            }).catch(e => {
                toast.dismiss()
                toast.error(e.response.data.message)
                navigate("/login")
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
                                <div className="text-left">
                                    <a href="/"><img src="/assets/images/logo.png" alt="img" className='mb-4 img-fluid' /></a>
                                </div>
                                <div className="mb-4">
                                    <h3 className="mb-2"><b>Reset Password</b></h3>
                                    <p className="text-muted">Please choose your new password</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input type="password" name='password' onChange={handleChange} className={`form-control ${errors.password && touched.password && 'is-invalid'}`} id="floatingInput" placeholder="New password" />
                                        {errors.password && touched.password && <p className='invalid-feedback'>{errors.password}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" onChange={handleChange} name='password' className={`form-control ${errors.confirmPassword && touched.confirmPassword && 'is-invalid'}`} id="floatingInput1" placeholder="Confrim new password" />
                                        {errors.confirmPassword && touched.confirmPassword && <p className='invalid-feedback'> {errors.confirmPassword}</p>}
                                    </div>
                                    {/* <div className="d-flex mt-1 justify-content-between align-items-center">
                                        <div className="form-check">
                                            <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" defaultChecked />
                                            <label className="form-check-label text-muted" htmlFor="customCheckc1">Remember me?</label>
                                        </div>
                                    </div> */}
                                    <div className="d-grid mt-4">
                                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Reset Password</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResetPassword;
