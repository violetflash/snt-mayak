import { useSelector } from 'react-redux';
import styled, { css } from "styled-components";

const newsStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 620px;
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

const CarouselWrapper = styled.div`
  ${props => props.type === 'news' ? newsStyles : null}
`;

export const Carousel = ({ children, type }) => {
  const sliderSettings = useSelector(state => state.data.sliderSettings[type]);

  const {
    animationType, animationDuration, disableButtons, disableSlideInfo,
    disableDotsControls, autoPlay, autoPlayInterval, infinite
  } = sliderSettings;

  const settings = {
    animationType,
    animationDuration,
    disableButtonsControls: disableButtons,
    disableSlideInfo,
    disableDotsControls,
    autoPlay,
    autoPlayInterval,
    infinite,
  };

  if (children.length === 1) {
    settings.disableButtonsControls = true;
    settings.disableDotsControls = true;
  }
  // else {
  //   sliderSettings.disableButtonsControls = settings.disableButtonsControls;
  //   sliderSettings.disableDotsControls = settings.disableDotsControls;
  // }

  return (
    <CarouselWrapper type={type}>
      <Carousel {...sliderSettings} >
        {children}
      </Carousel>
    </CarouselWrapper>

  );
};
