import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPromotions } from "../../../services/front/commonService";
import { SET_PROMOTIONS, SET_RESPONSE } from "../../../redux/reducers/promotions";
import { useDispatch, useSelector } from "react-redux";


function Navbar(props) {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [activeNavItem, setActiveNavItem] = useState('')
    const dispatch = useDispatch();
    const promotions = useSelector((state) => state.promotions)
    const [promtoions, setPromotions] = useState([])

    const handleActiveNavItem = (item) => {
        setActiveNavItem(item != activeNavItem ? item : '')
    }
    const brokers = [
        { name: 'Cabana Capitals', link: '/broker/cabana-capitals' },
        { name: 'OctaFx', link: '/broker/octafx' },
        { name: 'Naga', link: '/broker/naga' },
        { name: 'Ic Markets', link: '/broker/ic-markets' },
        { name: 'Multibank Group', link: '/broker/multibank-group' },
        { name: 'Exness', link: '/broker/exness' },
        { name: 'GTC', link: '/broker/gtc' },
        { name: 'Equiti', link: '/broker/equiti' },
        { name: 'FBS Forex', link: '/broker/fbs' },

    ]

    const getAllPromotions = async () => {
        let res = await getPromotions();
        dispatch(SET_PROMOTIONS(res?.promotion))
        dispatch(SET_RESPONSE(res))
    }

    useEffect(() => {
        getAllPromotions();
    }, [])
    const nav = () => {


        return (
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                    <li className={`dropdown`}><Link to="/about-us">About Us</Link>
                    </li>
                    <li className={`dropdown`}><Link to="/why-us">Why Us</Link>
                    </li>
                    <li onClick={() => { handleActiveNavItem('promotions') }} className="dropdown"><a href="#">Promotions</a>
                        <ul className={activeNavItem == 'promotions' && `active`}>
                            {
                                promotions?.promotions && promotions.promotions?.map((promotion, index) => (
                                    <li><Link to={promotion?.link}>{promotion?.title}</Link></li>

                                ))
                            }
                            {
                                !promotions &&
                                <li>No Promotions</li>

                            }
                            {/* <li><a href="platform.html">Cash Back</a></li>
                            <li><a href="account.html">Dubai Offer</a></li>
                            <li><a href="account-details.html">Bike Offer</a></li>
                            <li><a href="account-details-2.html">Other Gifts</a></li> */}
                            {/* <li><a href="account-details-3.html">STP Pro Account</a></li> */}
                        </ul>
                        <div className="dropdown-btn"><span className="fas fa-angle-down" /></div></li>
                    <li className=" dropdown"><Link to="/brokers">Brokers</Link>
                        <ul className={activeNavItem == 'brokers' && `active`}>
                            {
                                brokers.map(broker => (
                                    <li><Link to={broker.link}>{broker.name}</Link></li>

                                ))
                            }
                        </ul>
                        <div onClick={() => { handleActiveNavItem('brokers') }} className="dropdown-btn"><span className="fas fa-angle-down" /></div>
                    </li>
                    {/* <li className="dropdown"><a href="">Introducing Broker</a>
                        <ul>
                            <li><a href="education.html">Become an IB</a></li>
                            <li><a href="education-details.html">IB Promotions</a></li>
                        </ul>
                        <div className="dropdown-btn"><span className="fas fa-angle-down" /></div></li> */}
                    <li onClick={() => { handleActiveNavItem('news') }} className="dropdown"><a href="#">Market Analysis</a>
                        <ul className={activeNavItem == 'news' && `active`}>
                            <li><a href="/news">News</a></li>
                            {/* <li><a href="history.html">Technical Analysis</a></li> */}
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
                                <div className="icon-box"><img src="/assets/images/icons/icon-48.png" alt /></div>
                                <p><a href="mailto:support@qondzo.com">support@qondzo.com</a></p>
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
                                        <div className="icon"><img src="/assets/images/icons/icon-49.png" alt /></div>
                                        <a href="/login">Login</a>
                                    </li>
                                    <li>
                                        <div className="icon"><img src="/assets/images/icons/icon-50.png" alt /></div>
                                        <a href="/signup">Signup</a>
                                    </li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li><a href="https://www.instagram.com/qondzo1/"><i className="fa-brands fa-instagram" /></a></li>
                                    <li><a href="https://www.tiktok.com/@qondzo?is_from_webapp=1&sender_device=pc"><i className="fa-brands fa-tiktok" /></a></li>
                                    <li><a href="https://www.facebook.com/profile.php?id=61581452656239"><i className="fa-brands fa-facebook" /></a></li>
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
                                <figure className="logo"><a href="/"><img src="/assets/images/logoblack.png" alt /></a></figure>
                            </div>
                            <div className="menu-area">
                                {/*Mobile Navigation Toggler*/}
                                <div onClick={() => { setShowMobileNav(!showMobileNav) }} className="mobile-nav-toggler">
                                    <i className="icon-bar" />
                                    <i className="icon-bar" />
                                    <i className="icon-bar" />
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light">

                                    {nav()}
                                </nav>
                                <div className="menu-right-content">
                                    <div className="btn-box"><a href="/signup" className="theme-btn btn-one mt-3"><span>Open an A/c</span></a></div>
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
                                <figure className="logo"><a href="/"><img src="/assets/images/logo.png" alt /></a></figure>
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
                                    <div className="btn-box"><a href="/signup" className="theme-btn btn-one mt-3"><span>Open an A/c</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Mobile Menu  */}
            <div className="mobile-menu">
                <div className="menu-backdrop" />
                <div onClick={() => { setShowMobileNav(false) }} className="close-btn"><i className="fas fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo logo"><a href="index.html"><img src="/assets/images/logowhite.png" alt title /></a></div>
                    <div className="menu-outer">
                        {nav()}
                    </div>

                </nav>
            </div>{/* End Mobile Menu */}


        </div>
    );
}

export default Navbar;
