import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from "styled-components";


const AccordionIcon = styled.span`
  position: absolute;
  right: 0;
  
  &::before,
  &::after {
    content: "";
    right: 10px;
    top: 7px;
    position: absolute;
    background-color: #000;
    width: 3px;
    height: 9px;
    transition: all 0.25s ease-in-out;
  }

  &::before {
    transform: ${props => props.opened ? 'translate(-2px, 0) rotate(45deg)' : 'translate(2px, 0) rotate(45deg)'};
  }

  &::after {
    transform: ${props => props.opened ? 'translate(2px, 0) rotate(-45deg);' : 'translate(-2px, 0) rotate(-45deg)'} ;
  }
`;

const AccordionButton = styled(motion.button)`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  color: #000;
  background-color: #ccc;
  border-radius: 4px 4px 0 0;
`;

const AccordionButtonText = styled.span`
  position: relative;
  padding-right: 40px;
`;

const ContentContainer = styled(motion.div)`
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  background-color: #eee;
`;

const Content = styled(motion.div)`
  padding: 10px 20px;
`;

const wrapperVariants = {
  open: { opacity: 1, height: 'auto'},
  collapsed: { opacity: 0, height: 0 }
}

const contentVariants = {
  collapsed: { y: -20, opacity: 0 },
  open: { y: 0, opacity: 1 }
};

const ContentWrapper = ({ children }) => {
  return (
    <ContentContainer
      variants={wrapperVariants}
      key="content"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Content
        variants={contentVariants}
        transition={{ duration: 0.4, ease: "easeOut"}}
      >
        {children}
      </Content>

    </ContentContainer>
  );
};

export const Accordion = (
  { title, children, openedColor = "var(--accordionOpened)", closedColor = "var(--accordionClosed)" }
) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleHandler = () => setIsOpened(() => !isOpened);

  return (
    <div>
      <AccordionButton
        onClick={toggleHandler}
        animate={{ backgroundColor: isOpened ? openedColor : closedColor }}
      >
        <AccordionButtonText>
          {title}
          <AccordionIcon opened={isOpened}/>
        </AccordionButtonText>

      </AccordionButton>
      <AnimatePresence initial={false}>
        {isOpened && <ContentWrapper>{children}</ContentWrapper>}
      </AnimatePresence>
    </div>
  );
};

