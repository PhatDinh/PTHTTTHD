import React from "react";
import { useState } from "react";
import "./PopUp.css";
import { useNavigate } from "react-router-dom";

const PopUp = (props) => {
  const navigator = useNavigate();
  function toAssignment(){
    navigator('/Assignment')
}
  return props.trigger ? (
    <div>
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            Go back
          </button>
          <button className="dis-btn" onClick ={toAssignment}>Yes, discard</button>
          {props.children}
          
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
