import React from "react";
import Navbar from "../../Navbar/Navbar";
import NavAssess from "../../NavAssess/NavAssess";
import StepButton from "../../StepButton/StepButton";
import "./PostAssignment.css";
import PopUp from "../../PopUpOfPostAssignment/PopUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostAssignment = () => {
  const navigator = useNavigate();
  function toStep2(){
    navigator('/addQues')
}
  const [discardButton, setDiscard] = useState(false);

  
  return (
    <div>
      <Navbar title={"STEP"}></Navbar>
      <NavAssess />
      <StepButton />
      <div className="post-info">
        <label for="assigment-name">Assignment name</label>
        <input
          type="text"
          id="assigment-name"
          name="assigment-name"
          placeholder="Name"
        ></input>

        <br></br>

        <textarea
          rows="8"
          cols="111"
          placeholder="Description (Optional)"
        ></textarea>

        <div className="post-info-child">
          <div className="post-info-child-1">
            <label for="exDuratoion">Exam duration(in minutes)</label>
            <br></br>
            <select id="exDuratoion" name="exlist">
              <option value="45minutes">45 minutes</option>
              <option value="60minutes">60 minutes</option>
              <option value="90minutes">90 minutes</option>
              <option value="120minutes">120 minutes</option>
            </select>
          </div>
          <div className="post-info-child-2">
            <label for="startTime">Start time</label>
            <input type="date" className="date-input"></input>
          </div>
        </div>

        <div className="post-info-child">
          <div className="post-info-child-1">
            <label for="exDuratoion">Type of question</label>
            <br></br>
            <select id="exDuratoion" name="exlist">
              <option value="multiChoice">Multiple - Choice</option>
              <option value="essay">Essay</option>
            </select>
          </div>
          <div className="post-info-child-2">
            <label for="startTime">Point in period</label>
            <input
              type="text"
              className="date-input"
              placeholder="Point"
            ></input>
          </div>
        </div>
      </div>

      <div className="title-add-course-btn">
        <button className="cancel-btn" onClick={() => setDiscard(true)}>Discard</button>
        <button className="create-btn" onClick ={toStep2}>Proceed</button>
      </div>
      <PopUp trigger={discardButton} setTrigger ={setDiscard}>
      <h3>Are you sure you want to exit <br></br>and discard this assessment?</h3>
       </PopUp>
    </div>
  );
};

export default PostAssignment;
