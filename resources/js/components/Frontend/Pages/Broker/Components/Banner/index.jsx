import React from 'react'

function Banner() {
    return (
        <div>
            <section className="page-title centred " style={{ marginTop: "140px" }}>
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }} />
                <div className="line-box">
                    <div className="line-1" />
                    <div className="line-2" />
                </div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Cabana Capital</h1>
                        {/* <p>Deaching of the great explorer of the truth the builder</p> */}
                        {/* <ul className="bread-crumb clearfix">
                            <li><a href="index.html">Home</a></li>
                            <li>Trading</li>
                            <li>Accounts</li>
                            <li>STP Pro Account</li>
                        </ul> */}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Banner
