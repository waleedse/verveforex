import React, { Fragment } from "react";
function ChooseUs() {
    return (
        <Fragment>
            <section className="chooseus-style-two sec-pad">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-20.png)' }} />
                <figure className="image-layer"><img src="assets/images/resource/chooseus-1.png" alt /></figure>
                <div className="auto-container">
                    <div className="sec-title centred light">
                        <span className="sub-title">Why Bullion</span>
                        <h2>Reason For <span>Choose Bullion</span></h2>
                    </div>
                    <div className="inner-box">
                        <div className="left-column">
                            <div className="single-item">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }} />
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-40.png" alt /></div>
                                </div>
                                <div className="title-text"><h3>Friendly &amp; Expert<span>01</span></h3></div>
                                <p>Beatae vitae dicta sun explicabo enim ipsam voluptatem volupta.</p>
                            </div>
                            <div className="single-item">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }} />
                                <div className="title-text"><h3>Demo account<span>03</span></h3></div>
                                <p>Omnis iste natus error sit volup minima accusantium doloremque.</p>
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-41.png" alt /></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="single-item">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-18.png)' }} />
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-40.png" alt /></div>
                                </div>
                                <div className="title-text"><h3>24/7 Support<span>02</span></h3></div>
                                <p>Dolore magnam aliquam quaer autem enim ad minima veniam.</p>
                            </div>
                            <div className="single-item">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-19.png)' }} />
                                <div className="title-text"><h3>Award winner<span>04</span></h3></div>
                                <p>Beguiled demoralized charms nonsed pleasure of the moment.</p>
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-41.png" alt /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default ChooseUs;