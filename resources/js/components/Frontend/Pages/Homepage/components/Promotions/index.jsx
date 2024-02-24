import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function Promotions() {
    return (
        <Fragment>
            <section className="account-section bg-color-1">
                <div className="auto-container">
                    <div className="sec-title centred">
                        {/* <span className="sub-title">Promotions</span> */}
                        <h2>Best Promotions in the <span>Market</span></h2>
                    </div>
                    <Carousel responsive={responsive}>
                        <div className="account-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/account-1.jpg" alt /></figure>
                                    <div className="title-text">
                                        <h3><a href="account-details.html">Cashback</a></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt /></div>
                                    </div>
                                </div>
                                <div className="lower-content">
                                    <div className="text-box">
                                        <p>Promotion Description. (Lorem ipsum dolor sit amet, consectetur adipisicing elit. )</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="account-details.html"><span>Bonuses</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/account-3.jpg" alt /></figure>
                                    <div className="title-text">
                                        <h3><a href="account-details-3.html">Bonuses</a></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-15.png" alt /></div>
                                    </div>
                                </div>
                                <div className="lower-content">
                                    <div className="text-box">
                                        <p>The claims off duty or the obligations business it will frequently occur.</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="account-details-3.html"><span>Open Your Account</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/account-2.jpg" alt /></figure>
                                    <div className="title-text">
                                        <h3><a href="account-details-2.html">IB Rebates</a></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt /></div>
                                    </div>
                                </div>
                                <div className="lower-content">
                                    <div className="text-box">
                                        <p>Case are perfectly simple easy to any distinguish in a free hour.</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="account-details-2.html"><span>Open Your Account</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/account-3.jpg" alt /></figure>
                                    <div className="title-text">
                                        <h3><a href="account-details-3.html">Win Foreign Trip</a></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-15.png" alt /></div>
                                    </div>
                                </div>
                                <div className="lower-content">
                                    <div className="text-box">
                                        <p>The claims off duty or the obligations business it will frequently occur.</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="account-details-3.html"><span>Open Your Account</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/account-3.jpg" alt /></figure>
                                    <div className="title-text">
                                        <h3><a href="account-details-3.html">Win Exclusive Prizes</a></h3>
                                        <div className="icon-box"><img src="assets/images/icons/icon-15.png" alt /></div>
                                    </div>
                                </div>
                                <div className="lower-content">
                                    <div className="text-box">
                                        <p>The claims off duty or the obligations business it will frequently occur.</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="account-details-3.html"><span>Open Your Account</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
        </Fragment>
    );
}

export default Promotions;
