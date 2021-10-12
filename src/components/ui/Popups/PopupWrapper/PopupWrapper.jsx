import React from 'react';
import { Overlay } from "../styles";
import { Div } from "../../index";

export const PopupWrapper = ({ children }) => {
  return (
    <Div>
      <div className="container">
        <Overlay>
          {children}
        </Overlay>
      </div>
    </Div>
  );
};
