import React, { Fragment, useEffect, useState } from "react";
import { getFeatureNews } from "../../../../../services/front/commonService";
import { Link } from "react-router-dom";
function Blog() {
    const [news, setNews] = useState(null);

    const getNews = async () => {
        let res = await getFeatureNews();
        setNews(res);
        console.log(res);
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <Fragment>
            {
                news &&
                <section className="news-style-two sec-pad">
                    <div className="auto-container">
                        <div className="sec-title">
                            <span className="sub-title">News &amp; Updates</span>
                            <h2>Recent Post From Our <span>Blog</span></h2>
                            <div className="link-box">
                                <Link to="/news"><span>More News</span></Link>
                            </div>
                        </div>
                        <div className="row clearfix text-center">
                            {
                                news?.map((item, index) => (
                                    <div className="col-lg-3 col-md-6 col-sm-12 news-block">
                                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link to={`/news/${item?.slug}`}><img src={`uploads/${item?.image}`} alt /></Link></figure>
                                                    <span className="post-date">{new Date(item.created_at)?.toLocaleDateString('en-US', { day: 'numeric' })}
                                                        <br />
                                                        {new Date(item.created_at)?.toLocaleDateString('en-US', { month: 'short' })}
                                                    </span>
                                                </div>
                                                <div className="lower-content">
                                                    <h4><Link to={`/news/${item?.slug}`}>{item.title}</Link></h4>
                                                    <p className="content-body" dangerouslySetInnerHTML={{ __html: item.body }}></p>
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

        </Fragment>
    );
}
export default Blog;
