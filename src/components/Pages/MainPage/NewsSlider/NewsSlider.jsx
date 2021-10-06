import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Carousel from 'react-alice-carousel';
import { setNews } from '../../../../redux';
import NewsSliderItem from "./NewsSliderItem/";

import { getArrayFromDb, sortOptions } from "../../../../functions/functions";
import { MAIN_REF, useFirebase } from "../../../../context/FirebaseProvider/FirebaseProvider";

import s from './NewsSlider.module.scss';

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;


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
    bottom: -20px;
    margin: 0;
    right: 0;
  }

  .alice-carousel__dots-item {
    border-radius: 2px;
    width: 20px;
    height: 6px;

    &.__active {
      background-color: #ade8bf;
    }

    &:hover {
      background-color: #ccc;
    }
  }
`;

const NewsSlider = () => {
  const dispatch = useDispatch();
  const { fdb } = useFirebase();

  const { newsList } = useSelector(state => state.news);
  console.log(newsList);

  const defaultSliderOptions = {
    newsToShow: 3,
    slideSpeed: 1500,
    autoplayState: true,
    infiniteState: true,
    autoplaySpeedState: 3000
  };
  const [newsSliderParams, setNewsSliderParams] = useState(defaultSliderOptions);
  const { newsToShow, slideSpeed, autoplayState, infiniteState, autoplaySpeedState } = newsSliderParams;


  useEffect(() => {
    const newsRef = fdb.ref(MAIN_REF + "/news/");
    const newsSliderParamsRef = fdb.ref(MAIN_REF + "/params/newsSlider/");
    const refs = [newsRef, newsSliderParamsRef];
    newsRef
      .on('value', (res) => {
        if (res.exists()) {
          dispatch(setNews({ newsList: getArrayFromDb(res.val()) }));
        } else {
          dispatch(setNews({ newsList: [] }));
        }
      });
    newsSliderParamsRef
      .on('value', (res) => {
        if (res.exists()) {
          setNewsSliderParams(res.val());
        } else {
          setNewsSliderParams({});
        }
      });

    return () => {
      refs.forEach((ref) => ref.off());
    };
  }, [fdb, dispatch]);

  const news = newsList.length ? [...newsList]
    .sort(sortOptions)
    .filter((item, index) => index < newsToShow)
    .map((item) => {
      const { id } = item;
      return <NewsSliderItem key={id} {...item}/>;
    }) : null;

  const settings = {
    animationType: "fadeout",
    animationDuration: 300,
    disableButtonsControls: false,
    mouseTracking: false,
    autoHeight: false,
    autoWidth: false,
    autoPlayControls: false,
    autoPlay: true,
    autoPlayInterval: 5000,
    disableSlideInfo: true,
    infinite: true,
    // innerWidth: 600
    touchTracking: true,
  };

  return (
    <SliderContainer>
      <Carousel {...settings} >
        {news}
      </Carousel>
    </SliderContainer>
  );

};

export default NewsSlider;
