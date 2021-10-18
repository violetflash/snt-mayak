import { useState } from 'react';
import styled from "styled-components";


const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 30px;
`;

const AnnounceButton = styled.button`
  margin: 0 15px;
  padding: 5px 10px;
  border-radius: 50%;
  border: 1px solid darksalmon;
  background-color: ${props => props.active ? 'darksalmon' : "transparent"};
  transition: all 0.3s ease 0s;
`;

export const AnnounceControls = () => {
  return (
    <ControlsContainer>

    </ControlsContainer>
  );
};
