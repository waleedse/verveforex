import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBrokers } from "../../../services/front/commonService";

const Brokers = () => {
    const [brokers, setBrokers] = useState(null);

    const getBrokers = async () => {
        let res = await getAllBrokers();
        setBrokers(res);
        console.log(res);
    }

    useEffect(() => {
        getBrokers();
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

    return (
        <div>
            <section className="page-title centred">
                <div className="bg-layer" style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)' }} />
                <div className="line-box">
                    <div className="line-1" />
                    <div className="line-2" />
                </div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Brokers</h1>
                        {/* <p>{news?.title}</p> */}
                        <ul className="bread-crumb clearfix">
                            <li><a href="/">Home</a></li>
                            {/* <li>About</li> */}
                            <li>brokers</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </section>

            {
                brokers &&
                <section className="news-style-two sec-pad">
                    <div className="auto-container">
                        <div className="sec-title">
                            <span className="sub-title">Brokers</span>
                            {/* <h2></span></h2> */}
                            <div className="link-box">
                                {/* <a href="blog.html"><span>More News</span></a> */}
                            </div>
                        </div>
                        <div className="row clearfix text-center">
                            {
                                brokers?.map((item, index) => (
                                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 news-block brokers">
                                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="image-box ">
                                                    <figure style={{ backgroundColor: 'transparent' }} className="image"><Link to={`/broker/${item?.link}`}><img src={`uploads/${item?.image}`} alt /></Link></figure>

                                                </div>
                                                <div className="lower-content">
                                                    <h4><Link to={`/news/${item?.slug}`}>{item.title}</Link></h4>
                                                    <p className="content-body" dangerouslySetInnerHTML={{ __html: item.short_description }}></p>
                                                    {/* <div className="author-box">
                                                        <h6>Trade Ideas</h6>
                                                        <ul className="post-info clearfix">
                                                            <li><a href="blog-details.html">Justin Langer</a></li>
                                                            <li><span>..</span></li>
                                                            <li>2 Mins Read</li>
                                                        </ul>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
            }
        </div>
    );
};

export default Brokers;
