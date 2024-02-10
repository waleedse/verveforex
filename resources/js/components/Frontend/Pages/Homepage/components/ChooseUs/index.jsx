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
                                <div className="title-text"><h3>Best Promotions in Market<span>01</span></h3></div>
                                <p>Your one-stop shop for the best trading promotions in the market. Explore and compare promotins by top-tier brokers conveniently under one roof.</p>
                            </div>
                            <div className="single-item">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }} />
                                <div className="title-text"><h3>Arbitration Facility<span>03</span></h3></div>
                                <p>Ensuring a swift resolution to any trading issue, we offer a mutually beneficial solutions, which is impartial, efficient and allows our clients to focus on their trading activities.</p>
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
                                <p>Dedicated customer support team working 24/7 to assist youvia various customer touch points.</p>
                            </div>
                            <div className="single-item">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-19.png)' }} />
                                <div className="title-text"><h3>Education<span>04</span></h3></div>
                                <p>Our comprehensive education program aims to provide forex traderswith regular updates, tips and tricks and learning materialto enhance their trading strategies.</p>
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