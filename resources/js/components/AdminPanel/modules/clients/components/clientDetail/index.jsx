import React from 'react';
import ClientProfile from './components/Profile';

const ClientDetail = () => {
    return (
        <div>
            {/* [ breadcrumb ] start */}
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">

                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h2 className="mb-0">Account Profile</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* [ breadcrumb ] end */}
            {/* [ Main Content ] start */}
            <div className="row">
                {/* [ sample-page ] start */}
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body py-0">
                            <ul className="nav nav-tabs profile-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="profile-tab-1" data-bs-toggle="tab" href="#profile-1" role="tab" aria-selected="true">
                                        <i className="ti ti-user me-1" />Personal Details
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab-2" data-bs-toggle="tab" href="#profile-2" role="tab" aria-selected="true">
                                        <i className="ti ti-file-text me-2" />Brokers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab-3" data-bs-toggle="tab" href="#profile-3" role="tab" aria-selected="true">
                                        <i className="ti ti-coin me-2" />Promotions
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab-4" data-bs-toggle="tab" href="#profile-4" role="tab" aria-selected="true">
                                        <i className="ti ti-notes me-2" />Notes
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <ClientProfile></ClientProfile>
                        <div className="tab-pane" id="profile-2" role="tabpanel" aria-labelledby="profile-tab-2">
                            <h1>Brokers will show here</h1>
                        </div>
                        <div className="tab-pane" id="profile-3" role="tabpanel" aria-labelledby="profile-tab-3">
                            <h1>Promotions will show here</h1>
                        </div>
                        <div className="tab-pane" id="profile-4" role="tabpanel" aria-labelledby="profile-tab-4">
                            <div className="chat-wrapper">
                                <div className="col-sm-12">
                                    <div className="chat-content">
                                        <div className="card mb-0">
                                            <div className="card-header p-3">
                                                <div className="d-flex align-items-center">
                                                    <ul className="list-inline me-auto mb-0">

                                                        <li className="list-inline-item">
                                                            <div className="media align-items-center">

                                                                <div className="media-body mx-3 d-none d-sm-inline-block">
                                                                    <h6 className="mb-0">Notes</h6>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                            <div style={{ overflowY: 'scroll' }} className="scroll-block chat-message">
                                                <div className="card-body">
                                                    <div className="message-out">
                                                        <div className="d-flex align-items-end flex-column">
                                                            <p className="mb-1 text-muted"><small>9h ago</small></p>
                                                            <div className="message d-flex align-items-end flex-column">
                                                                <div className="d-flex align-items-center mb-1 chat-msg">
                                                                    <div className="flex-shrink-0">
                                                                        <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                            <li className="list-inline-item">
                                                                                <div className="dropdown">
                                                                                    <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <i className="ti ti-dots-vertical f-18" />
                                                                                    </a>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-back-up" /> Reply</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-forward-up" />
                                                                                            Forward</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-copy" /> Copy</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-trash" /> Delete</a>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                    <i className="ti ti-edit-circle f-18" />
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div className="msg-content bg-primary">
                                                                            <p className="mb-0">Hi...Henny!!</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center mb-1 chat-msg">
                                                                    <div className="flex-shrink-0">
                                                                        <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                            <li className="list-inline-item">
                                                                                <div className="dropdown">
                                                                                    <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <i className="ti ti-dots-vertical f-18" />
                                                                                    </a>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-back-up" /> Reply</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-forward-up" />
                                                                                            Forward</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-copy" /> Copy</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-trash" /> Delete</a>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                    <i className="ti ti-edit-circle f-18" />
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div className="msg-content bg-primary">
                                                                            <p className="mb-0">How can i cap you today?</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message-in">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <div className="chat-avtar">
                                                                    <img className="rounded-circle img-fluid wid-40" src="/admin/assets/images/user/avatar-3.jpg" alt="User image" />
                                                                    <i className="chat-badge bg-success" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 mx-3">
                                                                <div className="d-flex align-items-start flex-column">
                                                                    <p className="mb-1 text-muted">Agilulf Fuxg <small>11:23 AM</small></p>
                                                                    <div className="message d-flex align-items-start flex-column">
                                                                        <div className="d-flex align-items-center mb-1 chat-msg">
                                                                            <div className="flex-grow-1 me-3">
                                                                                <div className="msg-content card mb-0">
                                                                                    <p className="mb-0">Hey.. Bill</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex-shrink-0">
                                                                                <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                                    <li className="list-inline-item">
                                                                                        <div className="dropdown">
                                                                                            <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <i className="ti ti-dots-vertical f-18" />
                                                                                            </a>
                                                                                            <div className="dropdown-menu">
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-arrow-back-up" />
                                                                                                    Reply</a>
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-arrow-forward-up" />
                                                                                                    Forward</a>
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-copy" /> Copy</a>
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-trash" /> Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li className="list-inline-item">
                                                                                        <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                            <i className="ti ti-edit-circle f-18" />
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex align-items-center mb-1 chat-msg">
                                                                            <div className="flex-grow-1 me-3">
                                                                                <div className="msg-content card mb-0">
                                                                                    <p className="mb-0">nice to meet you!</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex-shrink-0">
                                                                                <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                                    <li className="list-inline-item">
                                                                                        <div className="dropdown">
                                                                                            <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <i className="ti ti-dots-vertical f-18" />
                                                                                            </a>
                                                                                            <div className="dropdown-menu">
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-arrow-back-up" />
                                                                                                    Reply</a>
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-arrow-forward-up" />
                                                                                                    Forward</a>
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-copy" /> Copy</a>
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-trash" /> Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li className="list-inline-item">
                                                                                        <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                            <i className="ti ti-edit-circle f-18" />
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message-out">
                                                        <div className="d-flex align-items-end flex-column">
                                                            <p className="mb-1 text-muted"><small>9h ago</small></p>
                                                            <div className="message d-flex align-items-end flex-column">
                                                                <div className="d-flex align-items-center mb-1 chat-msg">
                                                                    <div className="flex-shrink-0">
                                                                        <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                            <li className="list-inline-item">
                                                                                <div className="dropdown">
                                                                                    <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <i className="ti ti-dots-vertical f-18" />
                                                                                    </a>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-back-up" /> Reply</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-forward-up" />
                                                                                            Forward</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-copy" /> Copy</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-trash" /> Delete</a>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                    <i className="ti ti-edit-circle f-18" />
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div className="msg-content bg-primary">
                                                                            <p className="mb-0">Hi...Henny!!</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center mb-1 chat-msg">
                                                                    <div className="flex-shrink-0">
                                                                        <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                            <li className="list-inline-item">
                                                                                <div className="dropdown">
                                                                                    <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <i className="ti ti-dots-vertical f-18" />
                                                                                    </a>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-back-up" /> Reply</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-forward-up" />
                                                                                            Forward</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-copy" /> Copy</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-trash" /> Delete</a>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                    <i className="ti ti-edit-circle f-18" />
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div className="msg-content bg-primary">
                                                                            <p className="mb-0">Are u listening me ?</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center mb-1 chat-msg">
                                                                    <div className="flex-shrink-0">
                                                                        <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                            <li className="list-inline-item">
                                                                                <div className="dropdown">
                                                                                    <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <i className="ti ti-dots-vertical f-18" />
                                                                                    </a>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-back-up" /> Reply</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-forward-up" />
                                                                                            Forward</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-copy" /> Copy</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-trash" /> Delete</a>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                    <i className="ti ti-edit-circle f-18" />
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div className="msg-content bg-primary">
                                                                            <p className="mb-0">How can i cap you today?</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message-in">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <div className="chat-avtar">
                                                                    <img className="rounded-circle img-fluid wid-40" src="/admin/assets/images/user/avatar-3.jpg" alt="User image" />
                                                                    <i className="chat-badge bg-success" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 mx-3">
                                                                <div className="d-flex align-items-start flex-column">
                                                                    <p className="mb-1 text-muted">Agilulf Fuxg <small>11:23 AM</small></p>
                                                                    <div className="message d-flex align-items-start flex-column">
                                                                        <div className="d-flex align-items-center mb-1 chat-msg">
                                                                            <div className="flex-grow-1 me-3">
                                                                                <div className="msg-content card mb-0">
                                                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                                                                        1500s.</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex-shrink-0">
                                                                                <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                                    <li className="list-inline-item">
                                                                                        <div className="dropdown">
                                                                                            <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <i className="ti ti-dots-vertical f-18" />
                                                                                            </a>
                                                                                            <div className="dropdown-menu">
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-arrow-back-up" />
                                                                                                    Reply</a>
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-arrow-forward-up" />
                                                                                                    Forward</a>
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-copy" /> Copy</a>
                                                                                                <a className="dropdown-item" href="#"><i className="ti ti-trash" /> Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li className="list-inline-item">
                                                                                        <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                            <i className="ti ti-edit-circle f-18" />
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message-out">
                                                        <div className="d-flex align-items-end flex-column">
                                                            <p className="mb-1 text-muted"><small>9h ago</small></p>
                                                            <div className="message d-flex align-items-end flex-column">
                                                                <div className="d-flex align-items-center mb-1 chat-msg">
                                                                    <div className="flex-shrink-0">
                                                                        <ul className="list-inline ms-auto mb-0 chat-msg-option">
                                                                            <li className="list-inline-item">
                                                                                <div className="dropdown">
                                                                                    <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <i className="ti ti-dots-vertical f-18" />
                                                                                    </a>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-back-up" /> Reply</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-arrow-forward-up" />
                                                                                            Forward</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-copy" /> Copy</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ti ti-trash" /> Delete</a>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                                    <i className="ti ti-edit-circle f-18" />
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div className="msg-content bg-primary">
                                                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                                                                1500s.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer py-2 px-3">
                                                <textarea className="form-control border-0 shadow-none px-0" placeholder="Type a Message" rows={2} defaultValue={""} />
                                                <hr className="my-2" />
                                                <div className="d-sm-flex align-items-center">
                                                    <ul className="list-inline me-auto mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                <i className="ti ti-paperclip f-18" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                <i className="ti ti-photo f-18" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                <i className="ti ti-mood-smile f-18" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="avtar avtar-xs btn-link-secondary">
                                                                <i className="ti ti-volume f-18" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul className="list-inline ms-auto mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="avtar avtar-s btn-link-primary">
                                                                <i className="ti ti-send f-18" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* [ sample-page ] end */}
            </div>
            {/* [ Main Content ] end */}

        </div>

    );
};

export default ClientDetail;
