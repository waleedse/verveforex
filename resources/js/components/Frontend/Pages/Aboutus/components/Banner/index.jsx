import React, { Fragment } from "react";
function Banner() {
    return (
        <Fragment>
            <section className="page-title centred">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/about-us-banner.jpg)' }} />
                <div className="line-box">
                    <div className="line-1" />
                    <div className="line-2" />
                </div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Company</h1>
                        <p>Deaching of the great explorer of the truth the builder</p>
                        <ul className="bread-crumb clearfix">
                            <li><a href="index.html">Home</a></li>
                            <li>About</li>
                            <li>Company</li>
                        </ul>
                    </div>
                </div>
            </section>

        </Fragment>
    );
}
export default Banner;
