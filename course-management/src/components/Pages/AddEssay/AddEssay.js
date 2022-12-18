import React from "react";
import Navbar from "../../Navbar/Navbar";
import NavAssess from "../../NavAssess/NavAssess";
import StepButton from "../../StepButton/StepButton";
import { useState } from "react";
import "./AddEssay.css";
const AddEssay = () => {
  // Initialize state for the questions and the selected question
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // create a new question
  const createQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  //edit an existing question
  const editQuestion = (index, question) => {
    const newQuestions = [...questions];
    newQuestions[index] = question;
    setQuestions(newQuestions);
  };

  // delete an existing question
  const deleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  //select a question
  const selectQuestion = (question) => {
    setSelectedQuestion(question);
  };
  return (
    <div className="essay-container">
      <Navbar title={"Essay"}></Navbar>
      <NavAssess />
      <StepButton>
        <div className="Step2">STEP 2: Adding Questions</div>
      </StepButton>
      <div>
        {/* Form for creating a new question */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            createQuestion(event.target.elements.question.value);
            event.target.elements.question.value = "";
          }}
        >
          <div className="create-container">
            <div className="create-ques-btn">
              <label htmlFor="question">Enter a question:</label>
              <input type="text" name="question" id="question" />
              <button type="submit">+</button>
            </div>
            <div className="block-selected-question">
              {selectedQuestion && (
                <div className="selected-question">
                  <h2>Selected question:</h2>
                  <p>{selectedQuestion}</p>
                </div>
              )}
            </div>
          </div>
        </form>

        {/* //list question */}
        {questions.map((question, index) => (
        <div className="list-container">
        <div key={index} className="title-add-course2">
            <div onClick={() => selectQuestion(question)}>{question}
            </div>
          </div>

          <div className="icon-edit-rmv">
          <a href="#" className="fa fa-trash" onClick={() => deleteQuestion(index)} ></a>
            <a href="#" className="fa fa-pencil " onClick={() => editQuestion(index, prompt("Enter the new question:")) }></a>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default AddEssay;
