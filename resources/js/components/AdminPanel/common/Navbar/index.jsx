import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

function Nabar(props) {
    const [activeTab, setActiveTab] = useState('')
    const navigate = useNavigate();

    const handleActiveTab = (tab) => {
        let handleTab = tab == activeTab ? '' : tab;
        setActiveTab(handleTab)
    }
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/admin-login")
    }
    const [showSidebar, setShowSidebar] = useState(false)
    const [showMobSidebar, setShowMobSidebar] = useState(false)

    const navRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            navRef.current &&
            navRef.current.classList.contains('mob-sidebar-active') &&
            !navRef.current.contains(event.target)
        ) {
            setShowMobSidebar(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div>
                {/* [ Pre-loader ] start */}
                <div className="loader-bg">
                    <div className="loader-track">
                        <div className="loader-fill" />
                    </div>
                </div>
                {/* [ Pre-loader ] End */}
                {/* [ Sidebar Menu ] start */}
                <nav ref={navRef} className={`pc-sidebar ${showSidebar && 'pc-sidebar-hide'} ${showMobSidebar && 'mob-sidebar-active'} `}>
                    <div className="navbar-wrapper">
                        <div className="m-header">
                            <a href="index.html" className="b-brand text-primary">
                                {/* ========   Change your logo from here   ============ */}
                                <img src="/assets/images/logo.png" className="img-fluid logo-md" alt="logo" />
                                <span className="badge bg-light-success rounded-pill ms-2 theme-version"></span>
                            </a>
                        </div>
                        <div className="navbar-content">
                            <div className="card pc-user-card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <img src="/admin/assets/images/user/avatar-1.jpg" alt="user-image" className="user-avtar wid-45 rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-3 me-2">
                                            <h6 className="mb-0">Jonh Smith</h6>
                                            <small>Administrator</small>
                                        </div>
                                        <a className="btn btn-icon btn-link-secondary avtar" data-bs-toggle="collapse" href="#pc_sidebar_userlink">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-sort-outline" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="collapse pc-user-links" id="pc_sidebar_userlink">
                                        <div className="pt-3">
                                            <a href="#!">
                                                <i className="ti ti-user" />
                                                <span>My Account</span>
                                            </a>

                                            <a style={{ cursor: "pointer" }} className='cursor-pointer' onClick={() => { logout() }}>
                                                <i className="ti ti-power" />
                                                <span>Logout</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="pc-navbar">
                                <li className="pc-item pc-hasmenu">
                                    <Link to="/adminpanel" className="pc-link">
                                        <span className="pc-micon">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-status-up" />
                                            </svg>
                                        </span>
                                        <span className="pc-mtext">Dashboard</span>
                                        {/* <span className="pc-arrow"><i data-feather="chevron-right" /></span> */}
                                        {/* <span className="pc-badge">2</span> */}
                                    </Link>

                                </li>
                                <li className="pc-item pc-caption">
                                    <label>Clients & Brokers</label>
                                </li>

                                <li className={`pc-item pc-hasmenu ${activeTab == 'clients' && 'pc-trigger active'}`}>
                                    <a onClick={() => { handleActiveTab('clients') }} className="pc-link">
                                        <span className="pc-micon">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-document" />
                                            </svg>
                                        </span>
                                        <span className="pc-mtext">Manage clients</span>
                                        <span className="pc-arrow"><i className="fas fa-chevron-right" /></span>
                                    </a>
                                    <ul className="pc-submenu">
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/manage-clients">Clients</Link></li>
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/client-broker-requests">Manage client brokers</Link></li>
                                    </ul>
                                </li>
                                <li className={`pc-item pc-hasmenu ${activeTab == 'brokers' && 'pc-trigger active'}`}>
                                    <a onClick={() => { handleActiveTab('brokers') }} className="pc-link">
                                        <span className="pc-micon">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-document" />
                                            </svg>
                                        </span>
                                        <span className="pc-mtext">Manage brokers</span>
                                        <span className="pc-arrow"><i className="fas fa-chevron-right" /></span>
                                    </a>
                                    <ul className="pc-submenu">
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/add-broker">Add Broker</Link></li>
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/manage-brokers">Manage Brokers</Link></li>
                                    </ul>
                                </li>
                                <li className={`pc-item pc-hasmenu ${activeTab == 'ib' && 'pc-trigger active'}`}>
                                    <a onClick={() => { handleActiveTab('ib') }} className="pc-link">
                                        <span className="pc-micon">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-document" />
                                            </svg>
                                        </span>
                                        <span className="pc-mtext">Introducing Brokers</span>
                                        <span className="pc-arrow"><i className="fas fa-chevron-right" /></span>
                                    </a>
                                    <ul className="pc-submenu">
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/introducing-broker-requests">IB Requests</Link></li>
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/introducing-brokers">Introducing Brokers</Link></li>
                                    </ul>
                                </li>
                                <li className="pc-item pc-caption">
                                    <label>Manage Website</label>
                                </li>

                                <li className={`pc-item pc-hasmenu ${activeTab == 'promotions' && 'pc-trigger active'}`}>
                                    <a onClick={() => { handleActiveTab('promotions') }} className="pc-link">
                                        <span className="pc-micon">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-document" />
                                            </svg>
                                        </span>
                                        <span className="pc-mtext">Manage Promotions</span>
                                        <span className="pc-arrow"><i className="fas fa-chevron-right" /></span>
                                    </a>
                                    <ul className="pc-submenu">
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/add-promotion">Add promotion</Link></li>
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/manage-promotion">Manage Promotion</Link></li>
                                    </ul>
                                </li>
                                <li onClick={() => { handleActiveTab('sliders') }} className={`pc-item pc-hasmenu ${activeTab == 'sliders' && 'pc-trigger'}`}>
                                    <a className="pc-link">
                                        <span className="pc-micon">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-document" />
                                            </svg>
                                        </span>
                                        <span className="pc-mtext">Manage sliders</span>
                                        <span className="pc-arrow"><i className="fas fa-chevron-right" /></span>
                                    </a>
                                    <ul className="pc-submenu">
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/add-slider">Add sliders</Link></li>
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/manage-sliders">Manage sliders</Link></li>
                                    </ul>
                                </li>
                                <li onClick={() => { handleActiveTab('news') }} className={`pc-item pc-hasmenu ${activeTab == 'news' && 'pc-trigger'}`}>
                                    <a href="#!" className="pc-link">
                                        <span className="pc-micon">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-document" />
                                            </svg>
                                        </span>
                                        <span className="pc-mtext">Manage News</span>
                                        <span className="pc-arrow"><i className="fas fa-chevron-right" /></span>
                                    </a>
                                    <ul className="pc-submenu">
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/add-news">Add news</Link></li>
                                        <li className="pc-item"><Link className="pc-link" to="/adminpanel/manage-news">Manage news</Link></li>
                                    </ul>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
                {/* [ Sidebar Menu ] end */} {/* [ Header Topbar ] start */}
                <header className="pc-header">
                    <div className="header-wrapper"> {/* [Mobile Media Block] start */}
                        <div className="me-auto pc-mob-drp">
                            <ul className="list-unstyled">
                                {/* ======= Menu collapse Icon ===== */}
                                <li onClick={() => { setShowSidebar(!showSidebar) }} className="pc-h-item pc-sidebar-collapse">
                                    <a href="#" className="pc-head-link ms-0" id="sidebar-hide">
                                        <i className="ti ti-menu-2" />
                                    </a>
                                </li>
                                <li onClick={() => { setShowMobSidebar(!showMobSidebar) }} className="pc-h-item pc-sidebar-popup">
                                    <a href="#" className="pc-head-link ms-0" id="mobile-collapse">
                                        <i className="ti ti-menu-2" />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </header>


            </div>


        </div>

    );
}

export default Nabar;
