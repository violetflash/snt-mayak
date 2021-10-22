import { motion, AnimatePresence } from 'framer-motion';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import {Div} from "../ui";

const buttonStyles = css`
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  text-transform:uppercase;
`;

const Button = styled.button`
  background-color: #eee;
  ${buttonStyles};
  
`;

const QuestionButton = styled.button`
  ${buttonStyles};
  border: 2px dashed darkorange;
`;

const ContentContainer = styled.div`
`;

export const Collapsible = ({ children, question = null, title = 'click me' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setIsVisible(!isVisible);

  const button = question ?
    <QuestionButton onClick={handleVisibility}>
      {title}
    </QuestionButton> :
    <Button onClick={handleVisibility}>
      {title}
    </Button>;

  return (
    <>
      {button}
      <AnimatePresence>
        {
          isVisible && (
            <Div
              as={motion.div}
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto'}}
              exit={{opacity: 0, height: 0}}
              transition={{
                duration: 0.5,
                type: 'just',
                // ease: "backOut"
                ease: "easeOut"
              }}>
              <ContentContainer>
                {children}
              </ContentContainer>
            </Div>
          )
        }
      </AnimatePresence>
    </>
  );

};
