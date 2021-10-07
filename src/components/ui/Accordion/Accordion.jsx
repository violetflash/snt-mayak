import styled from 'styled-components';

import { AccordionItem } from "./AccordionItem/AccordionItem";

const AccordionList = styled.ul`
  
`;

export const Accordion = ({ title, children }) => {


  return (
    <AccordionList>
      <AccordionItem title={title}>
        {children}
      </AccordionItem>
    </AccordionList>
  )

};

export default Accordion;