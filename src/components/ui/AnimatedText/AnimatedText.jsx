// import { motion } from 'framer-motion';
// import {CharContainer} from "./style";

// const variants = {
//   hidden: {
//     y: "200%",
//     transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
//   },
//   visible: {
//     y: 0,
//     transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
//   }
// };



// const charWrapper = ({ children }) => {
//   return (
//     <CharContainer>
//       {children}
//     </CharContainer>);
// }

export const AnimatedText = ({ text }) => {
  // main array
  const words = text.split(' ');

  // console.log('hit');
  const animated = words.map((word) => {
    // console.log(word);
    return null;
  })

  return (
    <span>
      {animated}
    </span>
  )

};

export default AnimatedText;
