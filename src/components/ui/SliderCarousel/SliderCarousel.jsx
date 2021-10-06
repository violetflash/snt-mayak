import React from 'react';
import Carousel from 'react-alice-carousel';

const initialSettings = {
    animationType: "fadeout",
    animationDuration: 300,
    disableButtonsControls: false,
    autoPlay: true,
    autoPlayInterval: 5000,
    disableSlideInfo: true,
    infinite: true,
};

export const SliderCarousel = ({ children, settings = initialSettings }) => {
    return (
        <Carousel {...settings} >
            {children}
        </Carousel>
    );
};