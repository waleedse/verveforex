import React, { Fragment } from "react";

function Navbar(props) {
    return (
        <Fragment>
            {/* main header */}
            <header className="main-header header-style-three">
                {/* header-top */}
                <div className="header-top">
                    <div className="auto-container">
                        <div className="top-inner">
                            <div className="support-box">
                                <div className="icon-box">
                                    <img
                                        src="assets/images/icons/icon-47.png"
                                        alt
                                    />
                                </div>
                                <p>
                                    <a href="tel:1222567890">+1 222 56 78 90</a>{" "}
                                    or Request for a{" "}
                                    <a href="tel:1222567890">
                                        <span>call back</span>
                                    </a>
                                </p>
                            </div>
                            <div className="right-column">
                                <div className="language-box">
                                    <div className="icon-box">
                                        <img
                                            src="assets/images/icons/icon-48.png"
                                            alt
                                        />
                                    </div>
                                    <div className="select-box">
                                        <select className="wide">
                                            <option data-display="English">
                                                English
                                            </option>
                                            <option value={1}>Chinese</option>
                                            <option value={2}>Hindi</option>
                                            <option value={3}>Spanish</option>
                                            <option value={4}>Turky</option>
                                        </select>
                                    </div>
                                </div>
                                <ul className="registration-box clearfix">
                                    <li>
                                        <div className="icon">
                                            <img
                                                src="assets/images/icons/icon-49.png"
                                                alt
                                            />
                                        </div>
                                        <a href="index-3.html">Login</a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img
                                                src="assets/images/icons/icon-50.png"
                                                alt
                                            />
                                        </div>
                                        <a href="index-3.html">Signup</a>
                                    </li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li>
                                        <a href="index-3.html">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-3.html">
                                            <i className="fa-brands fa-square-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-3.html">
                                            <i className="fa-brands fa-facebook" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo">
                                    <a href="index.html">
                                        <img
                                            src="assets/images/logo-5.png"
                                            alt
                                        />
                                    </a>
                                </figure>
                            </div>
                            <div className="menu-area">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler">
                                    <i className="icon-bar" />
                                    <i className="icon-bar" />
                                    <i className="icon-bar" />
                                </div>
                                <nav className="main-menu navbar-expand navbar-light">
                                    <div
                                        className="collapse navbar-collapse show clearfix"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navigation clearfix">
                                            <li className="current dropdown">
                                                <a href="/">Home</a>
                                                <ul>
                                                    <li>
                                                        <a href="index.html">
                                                           Why Verve Forex
                                                        </a>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="">
                                                <a href="/about-us">About Us</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="index.html">Promotions</a>
                                                <ul>
                                                    <li>
                                                        <a href="/">
                                                        Cash Back Promotion
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                        Dubai Offer
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                        Bike Offer
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                        Other Gifts
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="index.html">Introducing Broker</a>
                                                <ul>
                                                    <li>
                                                        <a href="/">
                                                        Become an Introducing Broker
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                        IB Promotions
                                                        </a>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="">
                                                <a href="index.html">
                                                    Education
                                                </a>

                                            </li>
                                            <li className="dropdown">
                                                <a >Market Analysis</a>
                                                <ul>
                                                    <li>
                                                        <a href="/">
                                                        News
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                        Technical Analysis
                                                        </a>
                                                    </li>

                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="menu-right-content">
                                    {/* <div className="search-box-outer search-toggler">
                                        <i className="flaticon-search" />
                                    </div>
                                    <div className="btn-box">
                                        <a
                                            href="index.html"
                                            className="theme-btn btn-one"
                                        >
                                            <span>Open an A/c</span>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*sticky Header*/}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo">
                                    <a href="index.html">
                                        <img
                                            src="assets/images/logo-5.png"
                                            alt
                                        />
                                    </a>
                                </figure>
                            </div>
                            <div className="menu-area">
                                <nav className="main-menu clearfix">
                                    {/*Keep This Empty / Menu will come through Javascript*/}
                                </nav>
                                <div className="menu-right-content">
                                    <div className="search-box-outer search-toggler">
                                        <i className="flaticon-search" />
                                    </div>
                                    <div className="btn-box">
                                        <a
                                            href="index.html"
                                            className="theme-btn btn-one"
                                        >
                                            <span>Open an A/c</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* main-header end */}
            {/* Mobile Menu  */}
            <div className="mobile-menu">
                <div className="menu-backdrop" />
                <div className="close-btn">
                    <i className="fas fa-times" />
                </div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <a href="index.html">
                            <img src="assets/images/logo-6.png" alt title />
                        </a>
                    </div>
                    <div className="menu-outer">
                        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    </div>
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Chicago 12, Melborne City, USA</li>
                            <li>
                                <a href="tel:+8801682648101">+88 01682648101</a>
                            </li>
                            <li>
                                <a href="mailto:info@example.com">
                                    info@example.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li>
                                <a href="index.html">
                                    <span className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="index.html">
                                    <span className="fab fa-facebook-square" />
                                </a>
                            </li>
                            <li>
                                <a href="index.html">
                                    <span className="fab fa-pinterest-p" />
                                </a>
                            </li>
                            <li>
                                <a href="index.html">
                                    <span className="fab fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="index.html">
                                    <span className="fab fa-youtube" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* End Mobile Menu */}
        </Fragment>
    );
}

export default Navbar;
