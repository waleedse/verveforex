import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ResendVerificationEmail } from '../../../../services/client/commonService';

const EmailVerification = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location?.state?.email) {
            navigate('/login')
        }
    }, [location])

    const resendEmail = async () => {
        toast.loading(`Re-sending email to  ${location?.state?.email}`)
        let res = await ResendVerificationEmail(location?.state?.email);
        toast.dismiss();

        if (res.status == 200) {
            toast.success(res.message)
        } else {
            toast.error(res.message)
        }
    }

    return (

        <div className="auth-main">
            <div className="auth-wrapper v1">
                <div className="auth-form">
                    <div className="card my-5">
                        <div className="card-body">
                            <div className="mb-4">
                                <a href="#"><img src="/assets/images/logo.png" className="mb-4 img-fluid" alt="img" /></a>
                                <h3 className="mb-2"><b>Verify Your Email</b></h3>
                                <p className="text-muted mb-4">We send you a link on mail.</p>
                                <p className>We`ve send you link on </p>
                            </div>
                            {/* <div className="row my-4 text-center">
                                <div className="col">
                                    <input type="number" className="form-control text-center" placeholder={0} />
                                </div>
                                <div className="col">
                                    <input type="number" className="form-control text-center" placeholder={0} />
                                </div>
                                <div className="col">
                                    <input type="number" className="form-control text-center" placeholder={0} />
                                </div>
                                <div className="col">
                                    <input type="number" className="form-control text-center" placeholder={0} />
                                </div>
                            </div> */}
                            <div className="d-grid mt-4 col-md-12">
                                <Link><button type="button" className="btn btn-primary">Login</button></Link>
                            </div>
                            <div className="d-flex justify-content-start align-items-end mt-3">
                                <p className="mb-0">Did not receive the email?</p>
                                <a style={{ cursor: 'pointer' }} onClick={resendEmail} className="link-primary ms-2">Resend code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EmailVerification;
