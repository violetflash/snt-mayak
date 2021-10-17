import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';
import {Div} from "../ui";

const Button = styled.button`
  background-color:#ddd;
  width: 300px;
  padding: 0.8rem 1.2rem;
`;

const ContentContainer = styled.div`
  background-color: #eee;
  padding: 0.8rem 1.2rem;
`;

export const Collapsible = ({ children, title = 'click me' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Button onClick={handleVisibility}>
        {title}
      </Button>
      <AnimatePresence>
        {
          isVisible && (
            <Div as={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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

export default Collapsible;