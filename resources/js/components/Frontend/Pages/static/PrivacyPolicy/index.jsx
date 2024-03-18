import React, { Fragment } from "react";

function PrivacyPolicy() {
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
                        <h1>Privacy Policy</h1>
                    </div>
                </div>
            </section>
            <ul style={{padding:"30px 150px", color:"Black"}}>
                <li style={{listStyle:"romen"}}>
                    Introduction:
                    <ul>
                        <li style={{listStyle:"disc"}}> This Legal Notice Policy governs the use of the Verve Forex website (the "Website"). By accessing or using the Website, you agree to comply with this Legal Notice Policy and all applicable laws and regulations.</li>
                    </ul>
                </li>
                <li>
                    Copyright Notice:
                    <ul>
                        <li>. Unless otherwise indicated, all content on the Website, including text, graphics, logos, images, and software, is the property of Verve Forex or its licensors and is protected by copyright laws.</li>
                    </ul>
                </li>
            </ul>

        </Fragment>
    );
}
export default PrivacyPolicy;
