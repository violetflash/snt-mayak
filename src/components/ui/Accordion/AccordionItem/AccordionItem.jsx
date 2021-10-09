import { useRef, useState } from 'react';
import styled from 'styled-components';



const AccordionElement = styled.li`
  
`;

const AccordionButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  color: #000;
  background-color: #ccc;
  border-radius: 4px 4px 0 0;

  border-bottom: 2px solid #bfaa99;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ccc;
  }
`;

const AccordionIcon = styled.span`
  position: absolute;
  right: 40px;
  
  &::before,
  &::after {
    content: "";
    right: 10px;
    top: 7px;
    position: absolute;
    background-color: var(--mainColor);
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

const AccordionContent = styled.div`
  opacity: ${props => props.opened ? 1 : 0};
  height: ${props => props.height};
  padding: ${props => props.opened ? "10px" : "0px 10px"};
  transition: all 0.3s;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  
  background-color: #eee;
`;

export const AccordionItem = ({ title, children }) => {
  const contentRef = useRef();
  const [opened, setOpened] = useState(false);

  const toggleAccordion = () => setOpened(() => !opened);
  const contentHeight = opened ? contentRef.current.scrollHeight : 0;

  const titleText = opened ? title + ' -> [ свернуть ]' : title + ' -> [ открыть ]';


  return (
    <AccordionElement>
      <AccordionButton onClick={toggleAccordion}>
        {titleText}
        <AccordionIcon opened={opened}/>
      </AccordionButton>
      <AccordionContent ref={contentRef} height={contentHeight} opened={opened}>
        {children}
      </AccordionContent>
    </AccordionElement>
  )
};
