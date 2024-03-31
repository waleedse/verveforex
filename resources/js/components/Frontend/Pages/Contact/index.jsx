import React from 'react';

const Contact = () => {
    return (
        <div>
            <div>
                {/* page-title */}
                <section className="page-title centred">
                    <div className="bg-layer" style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)' }} />
                    <div className="line-box">
                        <div className="line-1" />
                        <div className="line-2" />
                    </div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>Contact</h1>
                            <p>Deaching of the great explorer of the truth the builder</p>
                            <ul className="bread-crumb clearfix">
                                <li><a href="index.html">Home</a></li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* page-title end */}
                {/* contact-style-two */}
                <section className="contact-style-two sec-pad">
                    <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-49.png)' }} />
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <span className="sub-title">Need Help</span>
                                        <h2><span>Connecting</span> World for <br />Better Solving</h2>
                                        <p>Occasionally circumstances occur in which toil and pain can procure him some great.</p>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 info-block">
                                            <div className="info-block-one">
                                                <div className="inner-box">
                                                    <div className="icon-box"><img src="/assets/images/icons/icon-84.png" alt /></div>
                                                    <h4>Request Call Back</h4>
                                                    <p>Just Share your ph num, we will back.</p>
                                                    <div className="link-box">
                                                        <a href="tel:000000000"><span>Your Ph Num</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 info-block">
                                            <div className="info-block-one">
                                                <div className="inner-box">
                                                    <div className="icon-box"><img src="/assets/images/icons/icon-85.png" alt /></div>
                                                    <h4>Live Chat Support</h4>
                                                    <p>Chat live with our forex specialist.</p>
                                                    <div className="link-box">
                                                        <button><span>Start Chat</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 inner-column">
                                <div className="inner-content">
                                    <h3>Contact Info</h3>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt /></div>
                                            <p>191 Integer Rd, 2nd Street, LA 08219 USA.</p>
                                        </li>
                                        <li>
                                            <div className="icon-box"><img src="assets/images/icons/icon-87.png" alt /></div>
                                            <p><a href="tel:122256789091">+1 222 56 78 90 &amp; 91</a></p>
                                        </li>
                                        <li>
                                            <div className="icon-box"><img src="assets/images/icons/icon-88.png" alt /></div>
                                            <p><a href="mailto:customercare@example.com">customercare@example.com</a></p>
                                        </li>
                                    </ul>
                                    <ul className="social-links clearfix">
                                        <li><a href="contact.html"><i className="fa-brands fa-facebook" /></a></li>
                                        <li><a href="contact.html"><i className="fa-brands fa-square-twitter" /></a></li>
                                        <li><a href="contact.html"><i className="fa-brands fa-instagram" /></a></li>
                                        <li><a href="contact.html"><i className="fa-brands fa-square-pinterest" /></a></li>
                                    </ul>
                                    <div className="btn-box">
                                        <a href="https://www.google.com/maps" target="_blank" className="theme-btn btn-two"><span>View On Google Map</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact-style-two end */}
                {/* contact-section */}
                <section className="contact-section alternat-2 sec-pad centred">
                    <div className="auto-container">
                        <div className="sec-title">
                            <span className="sub-title">Drop a Line</span>
                            <h2>Send Your <span>Message</span> to us</h2>
                        </div>
                        <form method="post" action="https://azim.hostlin.com/Bullion/sendemail.php" id="contact-form">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                    <div className="left-content">
                                        <div className="form-group">
                                            <input type="text" name="username" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="phone" placeholder="Phone" required />
                                            <div className="language-picker js-language-picker">
                                                <label htmlFor="language-picker-select" />
                                                <select id="language-picker-select">
                                                    <option lang="de" value="deutsch">de</option>
                                                    <option lang="en" value="english" selected>en</option>
                                                    <option lang="fr" value="francais">fr</option>
                                                    <option lang="it" value="italiano">it</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="subject" placeholder="Subject" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                    <div className="right-content">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Write Your Message Here..." defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="check-box">
                                <input className="check" type="checkbox" id="checkbox1" />
                                <label htmlFor="checkbox1">Agree to our private policies &amp; Conditions.</label>
                            </div>
                            <div className="message-btn">
                                <button type="submit" className="theme-btn btn-three" name="submit-form"><span>Send Now</span></button>
                            </div>
                        </form>
                    </div>
                </section>
                {/* contact-section end */}
            </div>

        </div>
    );
};

export default Contact;
