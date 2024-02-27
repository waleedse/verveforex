import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getPromotions } from "../../../../../services/front/commonService";
import { IMAGE_BASE_URL } from "../../../../../config/constants";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



function Promotions() {

    const [promtoions, setPromotions] = useState([])

    const getAllPromotions = async () => {
        let res = await getPromotions();
        setPromotions(res)

        console.log(res)
    }

    useEffect(() => {
        getAllPromotions();
    }, [])

    return (
        <Fragment>
            <section className="account-section bg-color-1">
                <div className="auto-container">
                    <div className="sec-title centred">
                        {/* <span className="sub-title">Promotions</span> */}
                        <h2>Best Promotions in the <span>Market</span></h2>
                    </div>
                    {
                        promtoions &&
                        <Carousel
                            autoPlaySpeed={1000}
                            showDots={true}
                            responsive={responsive}
                            className={`${promtoions.length == 1 && 'center-slide-items'}`}
                        >
                            {promtoions.map((item, index) => {
                                return (
                                    <div className="account-block-one promtion-slide">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src={IMAGE_BASE_URL + item.image} alt /></figure>
                                                <div className="title-text">
                                                    <h3><a href="account-details.html">{item.title}</a></h3>
                                                    <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt /></div>
                                                </div>
                                            </div>
                                            <div className="lower-content">
                                                <div className="text-box">
                                                    <p>{item.short_description}</p>
                                                </div>
                                                <div className="link-box text-center">
                                                    <a href="account-details.html"><span>Open your account</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    }

                </div>
            </section>
        </Fragment>
    );
}

export default Promotions;
