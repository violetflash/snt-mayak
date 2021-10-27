import { CardDesc, CardTitle, Date, Day, FigCaption, Image, Month, StyledNewsCard } from "./style";
import { getDay, getMonth } from "../../functions/functions";

const captionMotion = {
  rest: {
    position: 'relative',
    y: -30,
    // height: 'auto',
    duration: 0.2,

    transition: {
      duration: 0.2,
      // type: "tween",
      // ease: "easeIn"
    }
  },
  hover: {

    y: -200,
    x: -15,
    height: '100%',

    // margin: 0,
    transition: {
      duration: 0.2,
      // type: "tween",
      // ease: "easeIn"
    }
  }
}

export const NewsCard = ({ date, title, desc, imageUrl, time, author }) => {
  const day = getDay(date);
  const month = getMonth(date);

  return (
    <StyledNewsCard
      // variants={captionMotion}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <Image />
      <FigCaption
        variants={captionMotion}
        // initial="rest"
        // whileHover="hover"
        // animate="hover"
      >
        <Date>
          <Day>{day}</Day>
          <Month>{month}</Month>
        </Date>
        <CardTitle>
          {title}
        </CardTitle>
        <CardDesc>
          {desc}
        </CardDesc>
      </FigCaption>
    </StyledNewsCard>
  )
};
