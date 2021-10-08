import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setNews } from '../../../../redux';
import NewsSliderItem from "./NewsSliderItem/";
import { SliderCarousel } from "../../../ui";

import { getArrayFromDb, sortOptions } from "../../../../functions/functions";
import { MAIN_REF, useFirebase } from "../../../../context/FirebaseProvider/FirebaseProvider";

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 520px;
  min-height: 400px;
  
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
    left: 0;
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
  const { fdb, setNewsSliderStartParams } = useFirebase();

  const { newsList, onEmptyMsg } = useSelector(state => state.news);
  const [newsSliderParams, setNewsSliderParams] = useState({});

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
          setNewsSliderStartParams({
            newsToShow: 1,
            animationType: "fadeout",
            animationDuration: 300,
            disableButtons: true,
            disableDotsControls: true,
            autoPlay: false,
            autoPlayInterval: 5000,
            disableSlideInfo: true,
            infinite: false,
          });
        }
      });

    return () => {
      refs.forEach((ref) => ref.off());
    };
  }, [fdb, dispatch, setNewsSliderStartParams]);

  const news = newsList.length ? [...newsList]
    .sort(sortOptions)
    .filter((item, index) => index < newsSliderParams.newsToShow)
    .map((item) => {
      const { id } = item;
      return <NewsSliderItem key={id} {...item}/>;
    }) : null;

  const settings = {
    animationType: newsSliderParams.animationType,
    animationDuration: newsSliderParams.animationDuration,
    disableButtonsControls: newsSliderParams.disableButtons,
    disableSlideInfo: newsSliderParams.disableSlideInfo,
    disableDotsControls: newsSliderParams.disableDotsControls,
    autoPlay: newsSliderParams.autoPlay,
    autoPlayInterval: newsSliderParams.autoPlayInterval,
    infinite: newsSliderParams.infinite,
  };

  if (!newsList.length) {
    return null;
  }

  return (
    <SliderContainer>
      <SliderCarousel settings={settings}>
        {news}
      </SliderCarousel>
    </SliderContainer>
  );

};

export default NewsSlider;
