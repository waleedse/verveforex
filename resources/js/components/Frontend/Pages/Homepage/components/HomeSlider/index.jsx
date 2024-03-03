import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getHomeSLiders } from "../../../../../services/front/commonService";
function HomeSlider() {
    const [sliders, setSliders] = useState();

    // const slides = [
    //     {
    //         image: "/assets/images/banner/banner1.jpg",
    //     },
    //     {
    //         image: "/assets/images/banner/banner3.jpg",
    //     },
    //     {
    //         image: "/assets/images/banner/banner4.jpg",
    //     },
    // ];

    const getSliders = async () => {
        let res = await getHomeSLiders();
        setSliders(res?.sliders);
    }

    useEffect(() => {
        getSliders()
    }, [])
    return (
        <div className="home-slider banner-style-two" style={{ marginTop: "140px" }}>
            <Carousel autoPlay showArrows showIndicators infiniteLoop showThumbs={false} className="banner-carousel">
                {/* {slides.map((slide, index) => {
                    return <img style={{ width: "100%" }} src={slide.image} />;
                })} */}
                {
                    sliders ? sliders.map((slide, index) => {
                        return (
                            <div className="slide-item active">
                                <div className="bg-layer" style={{ backgroundImage: `url('/uploads/${slide?.image}')` }} />
                                <div dangerouslySetInnerHTML={{ __html: slide.content }} >

                                </div>
                            </div>
                        )
                    })
                        :
                        <div style={{ height: '600px' }}>

                        </div>
                }


            </Carousel>
        </div>
    );
}

export default HomeSlider;
