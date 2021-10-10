import React from 'react';
import { Overlay, PopupContainer } from "../styles";

export const PopupWrapper = () => {
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