import React from 'react';
import Carousel from 'react-alice-carousel';

const initialSettings = {
  animationType: "fadeout",
  animationDuration: 400,
  disableButtonsControls: false,
  autoPlay: true,
  autoPlayInterval: 5000,
  disableSlideInfo: true,
  infinite: true,
};

const checkSettings = (settings, initialSettings) => {

  for (const key in settings) {
    if (settings[key] === undefined) return initialSettings;
  }

  return settings;
};

export const SliderCarousel = ({ children, settings = initialSettings }) => {

  const sliderSettings = checkSettings(settings, initialSettings);

  if (children.length === 1) {
    sliderSettings.disableButtonsControls = true;
    sliderSettings.disableDotsControls = true;
  } else {
    sliderSettings.disableButtonsControls = settings.disableButtonsControls;
    sliderSettings.disableDotsControls = settings.disableDotsControls;
  }

  return (
    <Carousel {...sliderSettings} >
      {children}
    </Carousel>
  );
};
