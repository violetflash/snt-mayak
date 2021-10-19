import styled from "styled-components";
import { useDispatch } from "react-redux";
import { motion } from 'framer-motion';
import { setActiveAnnounce } from "../../../../../redux";


const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 30px;
`;

const AnnounceButton = styled(motion.button)`
  margin: 0 15px;
  padding: 5px 10px;
  border-radius: 50%;
  border: 1px solid darksalmon;
  background-color: ${props => props.active ? 'darksalmon' : "transparent"};
  transition: all 0.3s ease 0s;
`;

export const AnnounceControls = ({ activeAnnounce, numOfButtons}) => {
  const dispatch = useDispatch();

  const btnArray = Array.from(Array(numOfButtons).keys());

  const announceBtnHandler = (index) => {
    dispatch(setActiveAnnounce({ activeAnnounce: index }))
  };

  const controls = btnArray.map(el => {
    return (
      <AnnounceButton
        key={el}
        onClick={() => announceBtnHandler(el)}
        active={el === activeAnnounce}
        // initial={{ width: 'auto' }}
        // animate={el === activeAnnounce ? {  } : { borderRadius: 4 }}
      >
        {el + 1}
      </AnnounceButton>
    );
  })


  return (
    <ControlsContainer>
      {controls}
    </ControlsContainer>
  );
};
