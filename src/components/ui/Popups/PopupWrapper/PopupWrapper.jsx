import React from 'react';
import { Overlay, PopupContainer } from "../styles";

export const PopupWrapper = ({ children }) => {
  return (
    <PopupContainer>
      <div className="container">
        <Overlay>
          {children}
        </Overlay>
      </div>
    </PopupContainer>
  );
};