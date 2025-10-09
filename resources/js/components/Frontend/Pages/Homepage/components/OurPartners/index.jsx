import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function OurPartners() {
    return (
        <Fragment>
            <section className="clients-style-two centred">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Our Partners</span>
                        <h2><span>Partners</span> Around the World </h2>
                    </div>
                    <ul className="clients-logo-list clearfix">
                        <li><figure className="clients-box"><a href="index-2.html"><img src="/assets/images/clients/client-14.png" alt /></a></figure></li>
                        <li><figure className="clients-box"><a href="index-2.html"><img src="/assets/images/clients/client-7.png" alt /></a></figure></li>
                        <li><figure className="clients-box"><a href="index-2.html"><img src="/assets/images/clients/client-9.png" alt /></a></figure></li>
                        <li><figure className="clients-box"><a href="index-2.html"><img src="/assets/images/clients/client-10.png" alt /></a></figure></li>
                        <li><figure className="clients-box"><a href="index-2.html"><img src="/assets/images/clients/client-11.png" alt /></a></figure></li>
                        <li><figure className="clients-box"><a href="index-2.html"><img src="/assets/images/clients/client-12.png" alt /></a></figure></li>
                        <li><figure className="clients-box"><a href="index-2.html"><img src="/assets/images/clients/client-8.png" alt /></a></figure></li>
                    </ul>
                    <div className="link-box centred">
                        <Link to="/brokers"><span>See More</span></Link>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default OurPartners;
