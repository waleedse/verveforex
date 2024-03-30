import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Nabar(props) {
    const [activeTab, setActiveTab] = useState('')
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
                <nav className="pc-sidebar">
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
                                            <a href="#!">
                                                <i className="ti ti-settings" />
                                                <span>Settings</span>
                                            </a>
                                            <a href="#!">
                                                <i className="ti ti-lock" />
                                                <span>Lock Screen</span>
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


                                {/* <li className="pc-item">
            <a href="../widget/w_chart.html" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-presentation-chart" />
                </svg>
              </span>
              <span className="pc-mtext">Chart</span></a>
          </li>
          <li className="pc-item pc-caption">
            <label>UI Components</label>
            <svg className="pc-icon">
              <use xlinkHref="#custom-box-1" />
            </svg>
          </li>
          <li className="pc-item">
            <a href="../elements/bc_alert.html" className="pc-link" target="_blank"><span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-box-1" />
                </svg> </span><span className="pc-mtext">Components</span></a>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link"><span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-mouse-circle" />
                </svg> </span><span className="pc-mtext">Icons</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../elements/icon-feather.html">Feather</a></li>
              <li className="pc-item"><a className="pc-link" href="../elements/icon-fontawesome.html">Font Awesome 5</a></li>
              <li className="pc-item"><a className="pc-link" href="../elements/icon-material.html">Material</a></li>
              <li className="pc-item"><a className="pc-link" href="../elements/icon-tabler.html">Tabler</a></li>
              <li className="pc-item"><a className="pc-link" href="../elements/icon-phosphor.html">Phosphor</a></li>
              <li className="pc-item"><a className="pc-link" href="../elements/icon-custom.html">Custom</a></li>
            </ul>
          </li>
          <li className="pc-item pc-caption">
            <label>Forms</label>
            <svg className="pc-icon">
              <use xlinkHref="#custom-element-plus" />
            </svg>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-element-plus" />
                </svg>
              </span>
              <span className="pc-mtext">Forms Elements</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../forms/form_elements.html">Form Basic</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form_floating.html">Form Floating</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_basic.html">Form Options</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_input_group.html">Input Groups</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_checkbox.html">Checkbox</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_radio.html">Radio</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_switch.html">Switch</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_megaoption.html">Mega option</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-cpu-charge" />
                </svg>
              </span>
              <span className="pc-mtext">Forms Plugins</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#">Date<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="../forms/form2_datepicker.html">Datepicker</a></li>
                  <li className="pc-item"><a className="pc-link" href="../forms/form2_daterangepicker.html">Date Range Picker</a> </li>
                  <li className="pc-item"><a className="pc-link" href="../forms/form2_timepicker.html">Timepicker</a></li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#">Select<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="../forms/form2_choices.html">Choices js</a></li>
                </ul>
              </li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_recaptcha.html">Google reCaptcha</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_inputmask.html">Input Masks</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_clipboard.html">Clipboard</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_nouislider.html">Nouislider</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_switchjs.html">Bootstrap Switch</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_typeahead.html">Typeahead</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-text-block" />
                </svg>
              </span>
              <span className="pc-mtext">Text Editors</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../forms/form2_tinymce.html">Tinymce</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_quill.html">Quill</a></li>
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#">CK editor<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="../forms/editor-classic.html">classic</a></li>
                  <li className="pc-item"><a className="pc-link" href="../forms/editor-document.html">Document</a></li>
                  <li className="pc-item"><a className="pc-link" href="../forms/editor-inline.html">Inline</a></li>
                  <li className="pc-item"><a className="pc-link" href="../forms/editor-balloon.html">Balloon</a></li>
                </ul>
              </li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_markdown.html">Markdown</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-row-vertical" />
                </svg>
              </span>
              <span className="pc-mtext">Form Layouts</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../forms/form2_lay-default.html">Layouts</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_lay-multicolumn.html">Multicolumn</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_lay-actionbars.html">Actionbars</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_lay-stickyactionbars.html">Sticky Action bars</a> </li>
            </ul>
          </li> */}
                                {/* <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-document-upload" />
                </svg>
              </span>
              <span className="pc-mtext">File upload</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../forms/file-upload.html">Dropzone</a></li>
              <li className="pc-item"><a className="pc-link" href="../forms/form2_flu-uppy.html">Uppy</a></li>
            </ul>
          </li>
          <li className="pc-item">
            <a href="../forms/form-validation.html" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-password-check" />
                </svg>
              </span>
              <span className="pc-mtext">Form Validation</span></a>
          </li>
          <li className="pc-item"><a href="../forms/image_crop.html" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-crop" />
                </svg>
              </span>
              <span className="pc-mtext">Image cropper</span></a></li>
          <li className="pc-item pc-caption">
            <label>table</label>
            <svg className="pc-icon">
              <use xlinkHref="#custom-text-align-justify-center" />
            </svg>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-text-align-justify-center" />
                </svg>
              </span>
              <span className="pc-mtext">Bootstrap Table</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../table/tbl_bootstrap.html">Basic table</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_sizing.html">Sizing table</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_border.html">Border table</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_styling.html">Styling table</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-keyboard" />
                </svg>
              </span>
              <span className="pc-mtext">Vanilla Table</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../table/tbl_dt-simple.html">Basic initialization</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_dt-dynamic-import.html">Dynamic Import</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_dt-render-column-cells.html">Render Column Cells</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_dt-column-manipulation.html">Column Manipulation</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_dt-datetime-sorting.html">Datetime Sorting</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_dt-methods.html">Methods</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_dt-add-rows.html">Add Rows</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_dt-fetch-api.html">Fetch API</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_dt-filters.html">Filters</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/tbl_dt-export.html">Export</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-graph" />
                </svg>
              </span>
              <span className="pc-mtext">Data table</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../table/dt_advance.html">Advance initialization</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_styling.html">Styling</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_api.html">API</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_plugin.html">Plug-in</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_sources.html">Data sources</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-add-item" />
                </svg>
              </span>
              <span className="pc-mtext">DT extensions</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../table/dt_ext_autofill.html">Autofill</a></li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Button<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="../table/dt_ext_basic_buttons.html">Basic button</a></li>
                  <li className="pc-item"><a className="pc-link" href="../table/dt_ext_export_buttons.html">Data export</a></li>
                </ul>
              </li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_ext_col_reorder.html">Col reorder</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_ext_fixed_columns.html">Fixed columns</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_ext_fixed_header.html">Fixed header</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_ext_key_table.html">Key table</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_ext_responsive.html">Responsive</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_ext_row_reorder.html">Row reorder</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_ext_scroller.html">Scroller</a></li>
              <li className="pc-item"><a className="pc-link" href="../table/dt_ext_select.html">Select table</a></li>
            </ul>
          </li>
          <li className="pc-item pc-caption">
            <label>Charts ∧ Maps</label>
            <svg className="pc-icon">
              <use xlinkHref="#custom-graph" />
            </svg>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-graph" />
                </svg>
              </span>
              <span className="pc-mtext">Charts</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../chart/chart-apex.html">Apex Chart</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-shapes" />
                </svg>
              </span>
              <span className="pc-mtext">Maps</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../chart/map-vector.html">Vector Maps</a></li>
            </ul>
          </li>
          <li className="pc-item pc-caption">
            <label>Application</label>
            <svg className="pc-icon">
              <use xlinkHref="#custom-shopping-bag" />
            </svg>
          </li>
          <li className="pc-item">
            <a href="../application/calendar.html" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-calendar-1" />
                </svg>
              </span>
              <span className="pc-mtext">Calendar</span></a>
          </li>
          <li className="pc-item">
            <a href="../application/chat.html" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-message-2" />
                </svg>
              </span>
              <span className="pc-mtext">Chat</span></a>
          </li>
          <li className="pc-item">
            <a href="../application/cust_customer_list.html" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-notification-status" />
                </svg>
              </span>
              <span className="pc-mtext">Customer</span></a>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-shopping-bag" />
                </svg>
              </span>
              <span className="pc-mtext">E-commerce</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../application/ecom_product.html">Product</a></li>
              <li className="pc-item"><a className="pc-link" href="../application/ecom_product-details.html">Product details</a></li>
              <li className="pc-item"><a className="pc-link" href="../application/ecom_product-list.html">Product List</a></li>
              <li className="pc-item"><a className="pc-link" href="../application/ecom_product-add.html">Add New Product</a></li>
              <li className="pc-item"><a className="pc-link" href="../application/ecom_checkout.html">Checkout</a></li>
            </ul>
          </li>
          <li className="pc-item">
            <a href="../application/file-manager.html" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-document-filter" />
                </svg>
              </span>
              <span className="pc-mtext">File manager</span></a>
          </li>
          <li className="pc-item">
            <a href="../application/mail.html" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-direct-inbox" />
                </svg>
              </span>
              <span className="pc-mtext">Mail</span></a>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-user-square" />
                </svg>
              </span>
              <span className="pc-mtext">Users</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../application/account-profile.html">Account Profile</a></li>
              <li className="pc-item"><a className="pc-link" href="../application/social-media.html">Social media</a></li>
            </ul>
          </li>
          <li className="pc-item pc-caption">
            <label>Pages</label>
            <svg className="pc-icon">
              <use xlinkHref="#custom-flag" />
            </svg>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-shield" />
                </svg>
              </span>
              <span className="pc-mtext">Authentication</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Authentication 1<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/login-v1.html">Login</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/register-v1.html">Register</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/forgot-password-v1.html">Forgot Password</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/check-mail-v1.html">check mail</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/reset-password-v1.html">reset password</a> </li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/code-verification-v1.html">code verification</a></li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Authentication 2<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/login-v2.html">Login</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/register-v2.html">Register</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/forgot-password-v2.html">Forgot password</a> </li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/check-mail-v2.html">check mail</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/reset-password-v2.html">reset password</a> </li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/code-verification-v2.html">code verification</a></li>
                </ul>
              </li>
              <li className="pc-item">
                <a href="../pages/login-v3.html" target="_blank" className="pc-link">Authentication 3</a>
              </li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-flag" />
                </svg>
              </span>
              <span className="pc-mtext">Maintenance</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/error-404.html">Error 404</a></li>
              <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/error-500.html">Error 500</a></li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Under construction<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/under-construction-v1.html">Under Construction 1</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/under-construction-v2.html">Under Construction 2</a></li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Coming soon<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/coming-soon-v1.html">Coming soon 1</a> </li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="../pages/coming-soon-v2.html">Coming soon 2</a> </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pc-item"><a href="../pages/contact-us.html" className="pc-link" target="_blank">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-24-support" />
                </svg>
              </span>
              <span className="pc-mtext">Contact us</span>
            </a>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-dollar-square" />
                </svg>
              </span>
              <span className="pc-mtext">Price</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="../pages/price-v1.html">Price 1</a></li>
              <li className="pc-item"><a className="pc-link" href="../pages/price-v2.html">Price 2</a></li>
            </ul>
          </li>
          <li className="pc-item"><a href="../pages/landing.html" className="pc-link" target="_blank"><span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-airplane" />
                </svg> </span><span className="pc-mtext">Landing</span></a>
          </li>
          <li className="pc-item pc-caption">
            <label>Other</label>
            <svg className="pc-icon">
              <use xlinkHref="#custom-notification-status" />
            </svg>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link"><span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-level" />
                </svg> </span><span className="pc-mtext">Menu levels</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="#!">Level 2.1</a></li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Level 2.2<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="#!">Level 3.1</a></li>
                  <li className="pc-item"><a className="pc-link" href="#!">Level 3.2</a></li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">Level 3.3<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                    <ul className="pc-submenu">
                      <li className="pc-item"><a className="pc-link" href="#!">Level 4.1</a></li>
                      <li className="pc-item"><a className="pc-link" href="#!">Level 4.2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Level 2.3<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="#!">Level 3.1</a></li>
                  <li className="pc-item"><a className="pc-link" href="#!">Level 3.2</a></li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">Level 3.3<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                    <ul className="pc-submenu">
                      <li className="pc-item"><a className="pc-link" href="#!">Level 4.1</a></li>
                      <li className="pc-item"><a className="pc-link" href="#!">Level 4.2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pc-item"><a href="../other/sample-page.html" className="pc-link">
              <span className="pc-micon">
                <svg className="pc-icon">
                  <use xlinkHref="#custom-notification-status" />
                </svg>
              </span>
              <span className="pc-mtext">Sample page</span></a></li> */}
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
                                <li className="pc-h-item pc-sidebar-collapse">
                                    <a href="#" className="pc-head-link ms-0" id="sidebar-hide">
                                        <i className="ti ti-menu-2" />
                                    </a>
                                </li>
                                <li className="pc-h-item pc-sidebar-popup">
                                    <a href="#" className="pc-head-link ms-0" id="mobile-collapse">
                                        <i className="ti ti-menu-2" />
                                    </a>
                                </li>
                                <li className="dropdown pc-h-item">
                                    <a className="pc-head-link dropdown-toggle arrow-none m-0 trig-drp-search" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <svg className="pc-icon">
                                            <use xlinkHref="#custom-search-normal-1" />
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu pc-h-dropdown drp-search">
                                        <form className="px-3 py-2">
                                            <input type="search" className="form-control border-0 shadow-none" placeholder="Search here. . ." />
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* [Mobile Media Block end] */}
                        <div className="ms-auto">
                            <ul className="list-unstyled">
                                <li className="dropdown pc-h-item">
                                    <a className="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <svg className="pc-icon">
                                            <use xlinkHref="#custom-sun-1" />
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
                                        <a href="#!" className="dropdown-item" onclick="layout_change('dark')">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-moon" />
                                            </svg>
                                            <span>Dark</span>
                                        </a>
                                        <a href="#!" className="dropdown-item" onclick="layout_change('light')">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-sun-1" />
                                            </svg>
                                            <span>Light</span>
                                        </a>
                                        <a href="#!" className="dropdown-item" onclick="layout_change_default()">
                                            <svg className="pc-icon">
                                                <use xlinkHref="#custom-setting-2" />
                                            </svg>
                                            <span>Default</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown pc-h-item">
                                    <a className="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <svg className="pc-icon">
                                            <use xlinkHref="#custom-setting-2" />
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
                                        <a href="#!" className="dropdown-item">
                                            <i className="ti ti-user" />
                                            <span>My Account</span>
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            <i className="ti ti-settings" />
                                            <span>Settings</span>
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            <i className="ti ti-headset" />
                                            <span>Support</span>
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            <i className="ti ti-lock" />
                                            <span>Lock Screen</span>
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            <i className="ti ti-power" />
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="pc-h-item">
                                    <a href="#" className="pc-head-link me-0" data-bs-toggle="offcanvas" data-bs-target="#announcement" aria-controls="announcement">
                                        <svg className="pc-icon">
                                            <use xlinkHref="#custom-flash" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="dropdown pc-h-item">
                                    <a className="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <svg className="pc-icon">
                                            <use xlinkHref="#custom-notification" />
                                        </svg>
                                        <span className="badge bg-success pc-h-badge">3</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
                                        <div className="dropdown-header d-flex align-items-center justify-content-between">
                                            <h5 className="m-0">Notifications</h5>
                                            <a href="#!" className="btn btn-link btn-sm">Mark all read</a>
                                        </div>
                                        <div className="dropdown-body text-wrap header-notification-scroll position-relative" style={{ maxHeight: 'calc(100vh - 215px)' }}>
                                            <p className="text-span">Today</p>
                                            <div className="card mb-2">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <svg className="pc-icon text-primary">
                                                                <use xlinkHref="#custom-layer" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <span className="float-end text-sm text-muted">2 min ago</span>
                                                            <h5 className="text-body mb-2">UI/UX Design</h5>
                                                            <p className="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                                                type and scrambled it to make a type</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-2">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <svg className="pc-icon text-primary">
                                                                <use xlinkHref="#custom-sms" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <span className="float-end text-sm text-muted">1 hour ago</span>
                                                            <h5 className="text-body mb-2">Message</h5>
                                                            <p className="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-span">Yesterday</p>
                                            <div className="card mb-2">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <svg className="pc-icon text-primary">
                                                                <use xlinkHref="#custom-document-text" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <span className="float-end text-sm text-muted">2 hour ago</span>
                                                            <h5 className="text-body mb-2">Forms</h5>
                                                            <p className="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                                                type and scrambled it to make a type</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-2">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <svg className="pc-icon text-primary">
                                                                <use xlinkHref="#custom-user-bold" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <span className="float-end text-sm text-muted">12 hour ago</span>
                                                            <h5 className="text-body mb-2">Challenge invitation</h5>
                                                            <p className="mb-2"><span className="text-dark">Jonny aber</span> invites to join the challenge</p>
                                                            <button className="btn btn-sm btn-outline-secondary me-2">Decline</button>
                                                            <button className="btn btn-sm btn-primary">Accept</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-2">
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <svg className="pc-icon text-primary">
                                                                <use xlinkHref="#custom-security-safe" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <span className="float-end text-sm text-muted">5 hour ago</span>
                                                            <h5 className="text-body mb-2">Security</h5>
                                                            <p className="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                                                type and scrambled it to make a type</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center py-2">
                                            <a href="#!" className="link-danger">Clear all Notifications</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown pc-h-item header-user-profile">
                                    <a className="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" data-bs-auto-close="outside" aria-expanded="false">
                                        <img src="/admin/assets/images/user/avatar-2.jpg" alt="user-image" className="user-avtar" />
                                    </a>
                                    <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                                        <div className="dropdown-header d-flex align-items-center justify-content-between">
                                            <h5 className="m-0">Profile</h5>
                                        </div>
                                        <div className="dropdown-body">
                                            <div className="profile-notification-scroll position-relative" style={{ maxHeight: 'calc(100vh - 225px)' }}>
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0">
                                                        <img src="/admin/assets/images/user/avatar-2.jpg" alt="user-image" className="user-avtar wid-35" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Carson Darrin 🖖</h6>
                                                        <span>carson.darrin@company.io</span>
                                                    </div>
                                                </div>
                                                <hr className="border-secondary border-opacity-50" />
                                                <div className="card">
                                                    <div className="card-body py-3">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h5 className="mb-0 d-inline-flex align-items-center"><svg className="pc-icon text-muted me-2">
                                                                <use xlinkHref="#custom-notification-outline" /></svg>Notification</h5>
                                                            <div className="form-check form-switch form-check-reverse m-0">
                                                                <input className="form-check-input f-18" type="checkbox" role="switch" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-span">Manage</p>
                                                <a href="#" className="dropdown-item">
                                                    <span>
                                                        <svg className="pc-icon text-muted me-2">
                                                            <use xlinkHref="#custom-setting-outline" />
                                                        </svg>
                                                        <span>Settings</span>
                                                    </span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <span>
                                                        <svg className="pc-icon text-muted me-2">
                                                            <use xlinkHref="#custom-share-bold" />
                                                        </svg>
                                                        <span>Share</span>
                                                    </span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <span>
                                                        <svg className="pc-icon text-muted me-2">
                                                            <use xlinkHref="#custom-lock-outline" />
                                                        </svg>
                                                        <span>Change Password</span>
                                                    </span>
                                                </a>
                                                <hr className="border-secondary border-opacity-50" />
                                                <p className="text-span">Team</p>
                                                <a href="#" className="dropdown-item">
                                                    <span>
                                                        <svg className="pc-icon text-muted me-2">
                                                            <use xlinkHref="#custom-profile-2user-outline" />
                                                        </svg>
                                                        <span>UI Design team</span>
                                                    </span>
                                                    <div className="user-group">
                                                        <img src="/admin/assets/images/user/avatar-1.jpg" alt="user-image" className="avtar" />
                                                        <span className="avtar bg-danger text-white">K</span>
                                                        <span className="avtar bg-success text-white">
                                                            <svg className="pc-icon m-0">
                                                                <use xlinkHref="#custom-user" />
                                                            </svg>
                                                        </span>
                                                        <span className="avtar bg-light-primary text-primary">+2</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <span>
                                                        <svg className="pc-icon text-muted me-2">
                                                            <use xlinkHref="#custom-profile-2user-outline" />
                                                        </svg>
                                                        <span>Friends Groups</span>
                                                    </span>
                                                    <div className="user-group">
                                                        <img src="/admin/assets/images/user/avatar-1.jpg" alt="user-image" className="avtar" />
                                                        <span className="avtar bg-danger text-white">K</span>
                                                        <span className="avtar bg-success text-white">
                                                            <svg className="pc-icon m-0">
                                                                <use xlinkHref="#custom-user" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <span>
                                                        <svg className="pc-icon text-muted me-2">
                                                            <use xlinkHref="#custom-add-outline" />
                                                        </svg>
                                                        <span>Add new</span>
                                                    </span>
                                                    <div className="user-group">
                                                        <span className="avtar bg-primary text-white">
                                                            <svg className="pc-icon m-0">
                                                                <use xlinkHref="#custom-add-outline" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </a>
                                                <hr className="border-secondary border-opacity-50" />
                                                <div className="d-grid mb-3">
                                                    <button className="btn btn-primary">
                                                        <svg className="pc-icon me-2">
                                                            <use xlinkHref="#custom-logout-1-outline" /></svg>Logout
                                                    </button>
                                                </div>
                                                <div className="card border-0 shadow-none drp-upgrade-card mb-0" style={{ backgroundImage: 'url(/admin/assets/images/layout/img-profile-card.jpg)' }}>
                                                    <div className="card-body">
                                                        <div className="user-group">
                                                            <img src="/admin/assets/images/user/avatar-1.jpg" alt="user-image" className="avtar" />
                                                            <img src="/admin/assets/images/user/avatar-2.jpg" alt="user-image" className="avtar" />
                                                            <img src="/admin/assets/images/user/avatar-3.jpg" alt="user-image" className="avtar" />
                                                            <img src="/admin/assets/images/user/avatar-4.jpg" alt="user-image" className="avtar" />
                                                            <img src="/admin/assets/images/user/avatar-5.jpg" alt="user-image" className="avtar" />
                                                            <span className="avtar bg-light-primary text-primary">+20</span>
                                                        </div>
                                                        <h3 className="my-3 text-dark">245.3k <small className="text-muted">Followers</small></h3>
                                                        <div className="btn btn btn-warning">
                                                            <svg className="pc-icon me-2">
                                                                <use xlinkHref="#custom-logout-1-outline" />
                                                            </svg>
                                                            Upgrade to Business
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
