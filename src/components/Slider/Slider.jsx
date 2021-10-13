import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { setData } from '../../redux';
import { SliderCarousel } from "../ui";

import { getArrayFromDb, sortOptions } from "../../functions/functions";
import { MAIN_REF, useFirebase } from "../../context/FirebaseProvider/FirebaseProvider";
import { AnnounceItem } from "../AnnounceItem/AnnounceItem";
import { NewsItem } from "../NewsItem/NewsItem";

const newsStyles = css`
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

const SliderContainer = styled.div`
  ${props => props.type === 'news' ? newsStyles : null}
`;

export const Slider = ({ type }) => {
  const dispatch = useDispatch();
  const { fdb, setSliderStartParams } = useFirebase();

  const data = useSelector(state => state.dynamicData[type]);

  //cтейт для обновления компонента при изменении параметра настроек в другом компоненте
  const [sliderParams, setSliderParams] = useState({});

  useEffect(() => {
    const dataRef = fdb.ref(MAIN_REF + `/${type}/`);
    const dataSliderParamsRef = fdb.ref(MAIN_REF + `/params/${type}/`);
    const refs = [dataRef, dataSliderParamsRef];
    dataRef
      .on('value', (res) => {
        if (res.exists()) {

          dispatch(setData({ name: type, dataValue: getArrayFromDb(res.val()) }));
        } else {
          dispatch(setData({ name: type, dataValue: null }));
        }
      });
    dataSliderParamsRef
      .on('value', (res) => {
        if (res.exists()) {
          setSliderParams(res.val());
        } else {
          setSliderStartParams(type, {
            itemsToShow: 1,
            animationType: "fadeout",
            animationDuration: 300,
            disableButtons: true,
            disableDotsControls: false,
            autoPlay: true,
            autoPlayInterval: 5000,
            disableSlideInfo: true,
            infinite: true,
          });
        }
      });

    return () => {
      refs.forEach((ref) => ref.off());
    };
  }, [fdb, dispatch, setSliderStartParams, type]);

  const dataToRender = data?.length ? [...data]
    .sort(sortOptions)
    .filter((item, index) => index < sliderParams.itemsToShow)
    .map((item) => {
      const { id } = item;
      return type === 'announce' ? <AnnounceItem key={id} type={type} {...item}/> :
        type === 'news' ? <NewsItem key={id} type={type} {...item}/> : null;
    }) : null;

  const settings = {
    animationType: sliderParams.animationType,
    animationDuration: sliderParams.animationDuration,
    disableButtonsControls: sliderParams.disableButtons,
    disableSlideInfo: sliderParams.disableSlideInfo,
    disableDotsControls: sliderParams.disableDotsControls,
    autoPlay: sliderParams.autoPlay,
    autoPlayInterval: sliderParams.autoPlayInterval,
    infinite: sliderParams.infinite,
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

