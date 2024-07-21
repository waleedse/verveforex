import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Nabar(props) {
    const [activeTab, setActiveTab] = useState('')
    const [showSidebar, setShowSidebar] = useState(false)
    const [showMobSidebar, setShowMobSidebar] = useState(false)
    const user = useSelector(state => state.user.user);
    const navigate = useNavigate();

    const handleActiveTab = (tab) => {
        let handleTab = tab == activeTab ? '' : tab;
        setActiveTab(handleTab)
    }

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }

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
                                            <h6 className="mb-0">{user?.first_name} {user?.last_name}</h6>
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
                                            <Link to="/client/my-account">
                                                <i className="ti ti-user" />
                                                <span>My Account</span>
                                            </Link>

                                            <a style={{ cursor: "pointer" }} className='cursor-pointer' onClick={() => { logout() }}>
                                                <i className="ti ti-power" />
                                                <span>Logout</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="pc-navbar">
                                <li className="pc-item pc-caption">
                                    <label>Navigation</label>
                                </li>
                                <li className="pc-item pc-hasmenu">
                                    <Link to="/client" className="pc-link">
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
                                <li className="pc-item pc-hasmenu">
                                    <Link to="/client/brokers" className="pc-link">
                                        <span className="pc-micon">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-status-up" />
                                            </svg>
                                        </span>
                                        <span className="pc-mtext">Brokers</span>
                                        {/* <span className="pc-arrow"><i data-feather="chevron-right" /></span> */}
                                        {/* <span className="pc-badge">2</span> */}
                                    </Link>

                                </li>
                                <li className="pc-item pc-hasmenu">
                                    <Link to="/client/promotions" className="pc-link">
                                        <span className="pc-micon">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-status-up" />
                                            </svg>
                                        </span>
                                        <span className="pc-mtext">Promotions</span>
                                        {/* <span className="pc-arrow"><i data-feather="chevron-right" /></span> */}
                                        {/* <span className="pc-badge">2</span> */}
                                    </Link>

                                </li>
                                <li className="pc-item pc-hasmenu">
                                    <Link to="/client/introducing-broker" className="pc-link">
                                        <span className="pc-micon">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-status-up" />
                                            </svg>
                                        </span>
                                        <span className="pc-mtext">Introducing Broker</span>
                                        {/* <span className="pc-arrow"><i data-feather="chevron-right" /></span> */}
                                        {/* <span className="pc-badge">2</span> */}
                                    </Link>

                                </li>
                                {
                                    // user?.introducing_broker &&
                                    <li className="pc-item pc-hasmenu">
                                        <Link to="/client/client-commissions" className="pc-link">
                                            <span className="pc-micon">
                                                <svg className="pc-icon">
                                                    <use xlinkHref="#custom-status-up" />
                                                </svg>
                                            </span>
                                            <span className="pc-mtext">Client Commissions</span>
                                        </Link>

                                    </li>
                                }


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
