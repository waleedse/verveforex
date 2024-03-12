import React from 'react'

function Banner({ broker }) {
    return (
        <div>
            <section className="page-title centred " style={!broker?.banner ? { marginTop: "140px", paddingTop: '150px', paddingBottom: '150px' } : { marginTop: "140px", paddingTop: '15px' }} >
                {
                    !broker?.banner ?
                        <>
                            <div className="bg-layer" style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)' }} />
                            <div className="line-box">
                                <div className="line-1" />
                                <div className="line-2" />
                            </div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h1>{broker?.about?.name}</h1>
                                    {/* <p>Deaching of the great explorer of the truth the builder</p> */}
                                    {/* <ul className="bread-crumb clearfix">
                            <li><a href="index.html">Home</a></li>
                            <li>Trading</li>
                            <li>Accounts</li>
                            <li>STP Pro Account</li>
                        </ul> */}
                                </div>
                            </div>
                        </>
                        :
                        <img src={`/assets/images/brokers/${broker?.banner}`} ></img>
                }
            </section>

        </div>
    )
}

export default Banner
