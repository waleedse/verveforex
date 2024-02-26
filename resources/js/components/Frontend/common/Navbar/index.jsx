import React, { Fragment, useState } from "react";


function Navbar(props) {
    const [showMobileNav , setShowMobileNav] = useState(false)
    const [activeNavItem , setActiveNavItem] = useState('')

    const handleActiveNavItem = (item) => {
        setActiveNavItem(item != activeNavItem ? item : '')
    }
    const nav =  () => {
        return(
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                            <li  className="current dropdown"><a href="/">Home</a>
                                                <ul className={activeNavItem == 'home' && `active` }>
                                                    <li><a href="index.html">Why Verve Forex</a></li>
                                                </ul>
                                                <div onClick={()=>{handleActiveNavItem('home')}} className="dropdown-btn"><span className="fas fa-angle-down" /></div>
                                            </li>
                                            <li className={`dropdown`}><a href="/about-us">About Us</a>
                                            </li>
                                            <li className="dropdown"><a href="index.html">Promotions</a>
                                                <ul>
                                                    <li><a href="platform.html">Cash Back</a></li>
                                                    <li><a href="account.html">Dubai Offer</a></li>
                                                    <li><a href="account-details.html">Bike Offer</a></li>
                                                    <li><a href="account-details-2.html">Other Gifts</a></li>
                                                    {/* <li><a href="account-details-3.html">STP Pro Account</a></li> */}
                                                </ul>
                                                <div className="dropdown-btn"><span className="fas fa-angle-down" /></div></li>
                                            <li className="dropdown"><a href="/broker">Introducing Broker</a>
                                                <ul>
                                                    <li><a href="education.html">Become an IB</a></li>
                                                    <li><a href="education-details.html">IB Promotions</a></li>
                                                </ul>
                                                <div className="dropdown-btn"><span className="fas fa-angle-down" /></div></li>
                                            <li className="dropdown"><a href="index.html">Market Analysis</a>
                                                <ul>
                                                    <li><a href="about.html">News</a></li>
                                                    <li><a href="history.html">Technical Analysis</a></li>
                                                </ul>
                                                <div className="dropdown-btn"><span className="fas fa-angle-down" /></div></li>
                                        </ul>
                                    </div>
        )
    }
    return (

        <div className={`${showMobileNav && 'mobile-menu-visible'}`}>
            <header className="main-header header-style-three">
                {/* header-top */}
                <div className="header-top">
                    <div className="auto-container">
                        <div className="top-inner">
                            <div className="support-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-48.png" alt /></div>
                                <p><a href="mailto:support@verveforex.com">support@verveforex.com</a></p>
                            </div>
                            <div className="right-column">
                                {/* <div className="language-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-48.png" alt /></div>
                                    <div className="select-box">
                                        <select className="wide" style={{ display: 'none' }}>
                                            <option data-display="English">English</option>
                                            <option value={1}>Chinese</option>
                                            <option value={2}>Hindi</option>
                                            <option value={3}>Spanish</option>
                                            <option value={4}>Turky</option>
                                        </select><div className="nice-select wide" tabIndex={0}><span className="current">English</span><ul className="list"><li data-value="English" data-display="English" className="option selected">English</li><li data-value={1} className="option">Chinese</li><li data-value={2} className="option">Hindi</li><li data-value={3} className="option">Spanish</li><li data-value={4} className="option">Turky</li></ul></div>
                                    </div>
                                </div> */}
                                <ul className="registration-box clearfix">
                                    <li>
                                        <div className="icon"><img src="assets/images/icons/icon-49.png" alt /></div>
                                        <a href="index-3.html">Login</a>
                                    </li>
                                    <li>
                                        <div className="icon"><img src="assets/images/icons/icon-50.png" alt /></div>
                                        <a href="index-3.html">Signup</a>
                                    </li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li><a href="index-3.html"><i className="fa-brands fa-instagram" /></a></li>
                                    <li><a href="index-3.html"><i className="fa-brands fa-square-twitter" /></a></li>
                                    <li><a href="index-3.html"><i className="fa-brands fa-facebook" /></a></li>
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
                                <figure className="logo"><a href="/"><img src="assets/images/logo.png" alt /></a></figure>
                            </div>
                            <div className="menu-area">
                                {/*Mobile Navigation Toggler*/}
                                <div onClick={()=>{setShowMobileNav(!showMobileNav)}} className="mobile-nav-toggler">
                                    <i className="icon-bar" />
                                    <i className="icon-bar" />
                                    <i className="icon-bar" />
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light">

                                {nav()}
                                </nav>
                                <div className="menu-right-content">
                                    <div className="btn-box"><a href="index.html" className="theme-btn btn-one"><span>Open an A/c</span></a></div>
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
                                <figure className="logo"><a href="index.html"><img src="assets/images/logo.png" alt /></a></figure>
                            </div>
                            <div className="menu-area">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler">
                                    <i className="icon-bar" />
                                    <i className="icon-bar" />
                                    <i className="icon-bar" />
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light">

                                {nav()}
                                </nav>
                                <div className="menu-right-content">
                                    {/* <div className="search-box-outer search-toggler"><i className="flaticon-search" /></div> */}
                                    <div className="btn-box"><a href="index.html" className="theme-btn btn-one"><span>Open an A/c</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
{/* Mobile Menu  */}
<div className="mobile-menu">
  <div className="menu-backdrop" />
  <div onClick={()=>{setShowMobileNav(false)}} className="close-btn"><i className="fas fa-times" /></div>
  <nav className="menu-box">
    <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-6.png" alt title /></a></div>
    <div className="menu-outer">
   {nav()}
    </div>
    <div className="contact-info">
      <h4>Contact Info</h4>
      <ul>
        <li>Chicago 12, Melborne City, USA</li>
        <li><a href="tel:+8801682648101">+88 01682648101</a></li>
        <li><a href="mailto:info@example.com">info@example.com</a></li>
      </ul>
    </div>
    <div className="social-links">
      <ul className="clearfix">
        <li><a href="index.html"><span className="fab fa-twitter" /></a></li>
        <li><a href="index.html"><span className="fab fa-facebook-square" /></a></li>
        <li><a href="index.html"><span className="fab fa-pinterest-p" /></a></li>
        <li><a href="index.html"><span className="fab fa-instagram" /></a></li>
        <li><a href="index.html"><span className="fab fa-youtube" /></a></li>
      </ul>
    </div>
  </nav>
</div>{/* End Mobile Menu */}


        </div>
    );
}

export default Navbar;
