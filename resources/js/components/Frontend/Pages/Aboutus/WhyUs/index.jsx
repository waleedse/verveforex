import React, { Fragment } from 'react';
import './whyus.css';

const WhyUs = () => {
    return (
        <Fragment>
            <section className="statements-section " style={{ marginTop: '100px' }}>
                <div className="center-image">
                    <img src="/assets/images/whyus/TopBanner-min.jpg" alt="Descriptive Alt Text" className="custom-image" />
                </div>
                <div className="auto-container">

                    <div className="content mt-5">
                        <h3 className='text-center' >Elevate your Forex trading with real-time, expertly crafted signals designed to support smarter trading choices. At VerveForex,
                            we deliver high-quality, timely signals that offer actionable insights into current market trends, empowering you
                            to confidently capitalize on currency movements.</h3>
                        <h2 className='text-center head-title mt-4'>Why Choose Verveforex<span className="highlight"> Signals?</span></h2>
                        <div className="features mt-5">
                            <div className="feature">
                                <h4> <span className='bolder'> 1. Expert Analysis:</span> Our signals are crafted by experienced Forex analysts who use both technical and fundamental analysis to pinpoint ideal entry and exit points.</h4>
                            </div>
                            <div className="feature">
                                <h4 > <span className='bolder'>2. Real-Time Alerts:</span> Receive instant notifications directly to your device, ensuring you never miss a trading opportunity, wherever you are.</h4>
                            </div>
                            <div className="feature">
                                <h4> <span className='bolder'>3. Risk Management Guidance:</span> Each signal includes suggested stop-loss and take-profit levels, helping you manage risk effectively and safeguard your investment.</h4>
                            </div>
                            <div className="feature">
                                <h4> <span className='bolder'>4. Market Updates & Insights:</span> In addition to our signals, we provide ongoing market analysis and insights, keeping you informed about economic events, news releases, and key indicators that could impact your trades.</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="center-image">
                    <img src="/assets/images/whyus/mid-banner.jpg" alt="Descriptive Alt Text" className="custom-image" />
                </div>
                <div className="auto-container features -content gap-3 mt-5">
                    <h4><span className='bolder'>Receive Signals:</span> After subscribing, you’ll get trade signals delivered via email, SMS, or our mobile app. Each signal includes the currency pair, trade direction (buy/sell), entry level, and risk management advice.</h4>
                    <h4><span className='bolder'>To qualify for free access to our signals, clients are required to complete a minimum of <strong className='highlight'>100 lots per month.</strong></span></h4>
                    <h4><span className='bolder'>Execute Trades:</span> Use our signals on your preferred trading platform. Each signal provides clear, actionable guidance to help you trade with confidence. Track Performance: Access detailed reports on past signal performance, allowing you to review results and fine-tune your trading strategy.</h4>
                </div>
            </section>
        </Fragment >

    );
};

export default WhyUs;
