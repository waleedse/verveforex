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
                                    <figure className="footer-logo"><a href="index-2.html"><img src="assets/images/logo-4.png" alt /></a></figure>
                                    <div className="widget-content">
                                        <div className="year-box">
                                            {/* <h4>Since</h4>
                                            <h2>2012</h2> */}
                                            <div className="link-box">
                                                <a href="index-2.html"><span>Have Queries? Support@verveforex.com</span></a>
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
                                            <li><a href="index-2.html">About Us</a></li>
                                            <li><a href="index-2.html">Contact Us</a></li>
                                            <li><a href="index-2.html">Introducing Brokers</a></li>
                                            <li><a href="index-2.html">FAQs</a></li>
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
                                            <li><a href="index-2.html">Privacy Policy</a></li>
                                            <li><a href="index-2.html">Terms & Conditions</a></li>
                                            <li><a href="index-2.html">Legal Notice</a></li>
                                            {/* <li><a href="index-2.html">Platform Tutorials</a></li>
                                            <li><a href="index-2.html">ebooks</a></li> */}
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
                                            <li><a href="index-2.html">Trading Tools</a></li>
                                            <li><a href="index-2.html">Pricing List</a></li>
                                            <li><a href="index-2.html">Account Types</a></li>
                                            <li><a href="index-2.html">MT4 Platform</a></li>
                                            <li><a href="index-2.html">Mobile App</a></li>
                                            <li><a href="index-2.html">Policies</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-two">
                    <div className="auto-container">
                        <div className="bottom-inner">
                            <div className="guide-box">
                                <h5><a href="index-2.html"><i className="flaticon-download" />Free <br />Trading Guides</a></h5>
                            </div>
                            <div className="copyright-box">
                                <p>© <span>2023 <a href="index-2.html">Bullion</a>.</span> All Rights Reserved.</p>
                                <ul className="footer-nav clearfix">
                                    <li><a href="index-2.html">Legal Notice</a></li>
                                    <li><a href="index-2.html">Privacy Policy</a></li>
                                    <li><a href="index-2.html">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                            <ul className="social-links clearfix">
                                <li><a href="index-2.html"><i className="fa-brands fa-facebook" /></a></li>
                                <li><a href="index-2.html"><i className="fa-brands fa-instagram" /></a></li>
                                <li><a href="index-2.html"><i className="fa-brands fa-square-pinterest" /></a></li>
                                <li className="scroll-to-target" data-target="html"><i className="flaticon-up-arrow" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;
