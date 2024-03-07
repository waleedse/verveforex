import React, { useEffect, useState } from 'react';
import { getSingleNewsBySlug } from '../../../services/front/commonService';
import { useParams } from 'react-router-dom';

const SingleNews = () => {
    const params = useParams();
    const [news, setNews] = useState()

    const getNewsBySlug = async () => {
        let res = await getSingleNewsBySlug(params?.slug)
        console.log(res)
        setNews(res)
    }

    useEffect(() => {
        getNewsBySlug()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

    return (
        <div>
            <div>
                {/* page-title */}
                <section className="page-title centred">
                    <div className="bg-layer" style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)' }} />
                    <div className="line-box">
                        <div className="line-1" />
                        <div className="line-2" />
                    </div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>News</h1>
                            <p>{news?.title}</p>
                            <ul className="bread-crumb clearfix">
                                <li><a href="index.html">Home</a></li>
                                {/* <li>About</li> */}
                                <li>news</li>
                                <li>{news?.slug}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* page-title end */}
                {/* sidebar-page-container */}
                <section className="sidebar-page-container blog-details">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                                <div className="blog-details-content">
                                    <div className="news-block-one">
                                        <div className="inner-box">
                                            <div className="lower-content">

                                                <h2>{news?.title}</h2>
                                            </div>
                                            <div className="image-box">
                                                <figure className="image"><img src={`/uploads/${news?.image}`} alt /></figure>
                                                {/* <span className="post-date">24 Dec</span> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: news?.body }} className="content-one">

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                {/* sidebar-page-container end */}
            </div>

        </div>
    );
};

export default SingleNews;
