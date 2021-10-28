import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { SliderCarousel } from "../ui";

import { sortOptions } from "../../functions/functions";
import { AnnounceItem } from "../AnnounceItem/AnnounceItem";
import { NewsItem } from "../NewsItem/NewsItem";
import { NewsCard } from "../NewsCard/NewsCard";

const newsStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  //width: 620px;
  min-height: 400px;

  //li.alice-carousel__stage-item :not(.__cloned) {
  //  width: auto !important;
  //  margin-right: 1rem;
  //}
  
  

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    width: 20px;
    height: 100%;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .alice-carousel__next-btn {
    left: unset;
    right: -30px;
  }

  .alice-carousel__prev-btn-wrapper,
  .alice-carousel__next-btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    height: 100%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      //width: 20px;
      &::before, &::after {
        position: absolute;
        content: "";
        width: 20px;
        height: 4px;
        background-color: var(--mainColor);
      }
    }
  }

  .alice-carousel__prev-btn-item {
    span {
      &::before {
        transform: translateY(-6px) rotate(-45deg);
      }

      &::after {
        transform: translateY(6px) rotate(45deg);
      }
    }
  }

  .alice-carousel__next-btn-item {
    span {
      &::before {
        transform: translateY(-6px) rotate(45deg);
      }

      &::after {
        transform: translateY(6px) rotate(-45deg);
      }
    }
  }

  .alice-carousel__dots {
    position: absolute;
    bottom: -35px;
    margin: 0;
    right: 0;
  }

  .alice-carousel__dots-item {
    border-radius: 2px;
    width: 20px;
    height: 6px;

    &.__active {
      background-color: #E0B799;
    }

    &:hover {
      background-color: #ccc;
    }
  }
`;

const SliderContainer = styled.div`
  ${props => props.type === 'news' ? newsStyles : null}
`;

export const Slider = ({ type, children }) => {
  const data = useSelector(state => state.data[type]);
  const sliderSettings = useSelector(state => state.data.sliderSettings[type]);

  const {
    itemsToShow, animationType, animationDuration, disableButtons, disableSlideInfo,
    disableDotsControls, autoPlay, autoPlayInterval, infinite
  } = sliderSettings;

  const dataToRender = data?.length ? [...data]
    .sort(sortOptions)
    .filter((item, index) => index < itemsToShow)
    .map((item) => {
      const { id } = item;
      return type === 'announce' ? <AnnounceItem key={id} type={type} {...item}/> :
        type === 'news' ? <NewsCard key={id} {...item}/> : null;
    }) : null;

  const settings = {
    animationType,
    animationDuration,
    disableButtonsControls: disableButtons,
    disableSlideInfo,
    disableDotsControls,
    autoPlay,
    autoPlayInterval,
    infinite,
    responsive: {
      0: {
        items: 1,
      },
      1024: {
        items: 3
      }
    },
    // autoWidth: true
    mouseTracking: true,
  };

  if (!data?.length) {
    return null;
  }

  return (
    <SliderContainer type={type}>
      <SliderCarousel settings={settings}>
        {dataToRender}
      </SliderCarousel>
    </SliderContainer>
  );

};

