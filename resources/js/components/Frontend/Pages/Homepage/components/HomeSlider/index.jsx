import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function HomeSlider() {
    const slides = [
        {
            image: "/assets/images/banner/banner1.jpg",
        },
        {
            image: "/assets/images/banner/banner3.jpg",
        },
        {
            image: "/assets/images/banner/banner4.jpg",
        },
    ];
    return (
        <div className="home-slider" style={{ height: "600px", marginTop: "140px" }}>
            <Carousel showThumbs={false}>
                {slides.map((slide, index) => {
                    return <img style={{ width: "100%" }} src={slide.image} />;
                })}
            </Carousel>
        </div>
    );
}

export default HomeSlider;
