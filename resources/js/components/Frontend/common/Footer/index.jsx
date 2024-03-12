import React, { Fragment } from "react";

function Footer(props) {
    return (
        <Fragment>
            <footer className="footer-style-two">
                <div className="widget-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                            {/* Brand  */}
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo"><a href="/"><img src="/assets/images/logolight.png" alt /></a></figure>
                                    <div className="widget-content">
                                        <div className="year-box">
                                            {/* <h4>Since</h4>
                                            <h2>2012</h2> */}
                                            <div className="link-box">
                                                <a href="/"><span>Have Queries? Support@verveforex.com</span></a>
                                            </div>
                                        </div>
                                        <div className="text-box">
                                            <p>Impedit quo minus id quod maxime place at facere possimus, omnis voluptas assumenda omnis dolors.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Company Start  */}
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml_60">
                                    <div className="widget-title">
                                        <h3>Company</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><a href="/">About Us</a></li>
                                            <li><a href="/">Contact Us</a></li>
                                            <li><a href="/">Introducing Brokers</a></li>
                                            <li><a href="/">FAQs</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Education Start  */}
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml_15">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><a href="/">Privacy Policy</a></li>
                                            <li><a href="/">Terms & Conditions</a></li>
                                            <li><a href="/">Legal Notice</a></li>
                                            {/* <li><a href="/">Platform Tutorials</a></li>
                                            <li><a href="/">ebooks</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Useful links Start */}
                            {/* <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml_80">
                                    <div className="widget-title">
                                        <h3>Useful links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><a href="/">Trading Tools</a></li>
                                            <li><a href="/">Pricing List</a></li>
                                            <li><a href="/">Account Types</a></li>
                                            <li><a href="/">MT4 Platform</a></li>
                                            <li><a href="/">Mobile App</a></li>
                                            <li><a href="/">Policies</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-two">
                    <div className="auto-container">
                        <div className="bottom-inner text-center">
                            {/* <div className="guide-box">
                                <h5><a href="/"><i className="flaticon-download" />Free <br />Trading Guides</a></h5>
                            </div> */}
                            <div className="copyright-box ">
                                <p className="text-center"> Copyright Verve Forex 2024. All rights reserved.</p>
                                {/* <ul className="footer-nav clearfix">
                                    <li><a href="/">Legal Notice</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Terms &amp; Conditions</a></li>
                                </ul> */}
                            </div>
                            {/* <ul className="social-links clearfix">
                                <li><a href="/"><i className="fa-brands fa-facebook" /></a></li>
                                <li><a href="/"><i className="fa-brands fa-instagram" /></a></li>
                                <li><a href="/"><i className="fa-brands fa-square-pinterest" /></a></li>
                                <li className="scroll-to-target" data-target="html"><i className="flaticon-up-arrow" /></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;
