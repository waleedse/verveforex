import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

function BrokerReview({ broker }) {
    return (


        <div>
            <div className="text-box text-justify">
                <h2>{broker?.name}</h2>
                <p dangerouslySetInnerHTML={{ __html: broker?.description }}></p>
            </div>

            <div className="content-one">
                <div className="row clearfix">
                    {/* {
                        broker?.image &&
                        <div className="col-lg-12 col-md-12 col-sm-12 image-column">
                            <figure className="image-box">
                                <img src={`${broker?.image}`} alt="" />
                            </figure>
                        </div>
                    } */}

                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                        <ul className="accordion-box">
                            <li className="accordion block active-block">
                                <div className="acc-btn active">
                                    <h3>Pros</h3>
                                </div>
                                <div className="acc-content current">
                                    <ul className="list-item text-justify clearfix">
                                        {broker?.pros.map((pro, index) => (
                                            <li key={index}>{pro}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                        <ul className="accordion-box">

                            <li className="accordion block">
                                <div className="acc-btn">
                                    <h3>Cons</h3>
                                </div>
                                <div className="acc-content current">
                                    <ul className="list-item text-justify clearfix">
                                        {broker?.cons.map((con, index) => (
                                            <li key={index}>{con}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='text-box'>
                <h3>Regulations</h3>
                {broker?.regulations.map((regulation, index) => (
                    <p key={index}>{regulation}</p>
                ))}
            </div>
            <br />
            <div className='text-box'>
                <h3>Leverage</h3>
                <p>{broker?.leverage?.description}</p>
                <p>{broker?.leverage?.risk_warning}</p>
            </div>

            <br />

            <div className='text-box'>
                <h3>Spread</h3>
                <p>{broker?.spread}</p>

            </div>
            <br />
            {
                broker?.educational_material &&
                <div className='text-box'>
                    <h3>Educational Material</h3>
                    <p>{broker?.educational_material}</p>
                </div>
            }
            <br />
            {
                broker?.copy_trading &&
                <div className='text-box'>
                    <h3>Copy Trading</h3>
                    <p>{broker?.copy_trading}</p>
                </div>
            } <br />
            {
                broker?.trading_platforms &&
                <div className='text-box'>
                    <h3>Trading Platforms</h3>
                    <p>{broker?.trading_platforms}</p>
                </div>
            }
            <br />
            {
                broker?.currencies &&
                <div className='text-box'>
                    <h3>Currencies</h3>
                    <p>{broker?.currencies}</p>

                </div>
            } <br />
            {
                broker?.customer_support &&
                <div className='text-box'>
                    <h3>Customer Support</h3>
                    <p>{broker?.customer_support?.description}</p>
                    <p>{broker?.customer_support?.additional_information}</p>
                </div>
            } <br />
            {broker?.reasons_to_choose &&
                <div className="content-three content-reasons">
                    <div className="text-box">
                        <h3>Reason for Choose</h3>
                    </div>
                    <div className="row clearfix">
                        {broker?.reasons_to_choose && broker?.reasons_to_choose.map((reason, index) => (
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column" key={index}>
                                <div className="single-item">
                                    <div className="icon-box">
                                        <div className="shape" style={{ backgroundImage: 'url(/assets/images/shape/shape-44.png)' }} />
                                        <div className="icon">
                                            {reason?.icon && <img src={`/assets/images/icons/${reason.icon}`}
                                                alt={reason.title} />}
                                        </div>
                                    </div>
                                    <div className="title-text"><h3>{reason.title}</h3></div>
                                    <p>{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default BrokerReview
