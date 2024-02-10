import React, { Fragment } from "react";
function Testimonials() {
    return (
        <Fragment>
            <section className="testimonial-section">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="sub-title">Testimonials</span>
                        <h2>Traders <span>Words</span> About Us</h2>
                    </div>
                    <div className="inner-container">
                        <div className="testimonial-block">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-1.png" alt /></figure>
                            <div className="content-box">
                                <h3><img src="assets/images/icons/icon-44.png" alt />Awesome!...</h3>
                                <p>Dignissimos ducimus qui blanditiis pra esentium voluptatum deleniti at corrupt isint occaecati cupiditate.</p>
                                <ul className="rating clearfix">
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><span>(5 out of 5)</span></li>
                                </ul>
                                <span className="date">Dec 14, 2022</span>
                            </div>
                            <div className="author-box">
                                <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt /></figure>
                                <h4>Nathan Felix</h4>
                                <span className="designation">California</span>
                            </div>
                        </div>
                        <div className="testimonial-block">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-4.png" alt /></figure>
                            <div className="content-box">
                                <h3><img src="assets/images/icons/icon-44.png" alt />It’s been fantastic!...</h3>
                                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates.</p>
                                <ul className="rating clearfix">
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><i className="flaticon-star" /></li>
                                    <li><span>(4.5 out of 5)</span></li>
                                </ul>
                                <span className="date">Dec 14, 2022</span>
                            </div>
                            <div className="author-box">
                                <figure className="author-thumb"><img src="assets/images/resource/testimonial-3.png" alt /></figure>
                                <h4>Nora Penelope</h4>
                                <span className="designation">San Fransisco</span>
                            </div>
                        </div>
                    </div>
                    <div className="link-box centred">
                        <a href="index-2.html"><span>More Reviews</span></a>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default Testimonials;