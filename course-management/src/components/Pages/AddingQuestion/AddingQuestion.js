import React from "react";
import Navbar from "../../Navbar/Navbar";
import NavAssess from "../../NavAssess/NavAssess";
import StepButton from "../../StepButton/StepButton";
import { useState } from "react";
import "./Adding Question.css";
const AddingQuestion = () => {
  const [questions, setQuestions] = useState([
    { question: "", answers: ["", "", "", ""] },
  ]);
  const [showResults, setShowResults] = useState(false);

  function handleQuestionChange(event, index) {
    const newQuestions = questions.slice();
    newQuestions[index].question = event.target.value;
    setQuestions(newQuestions);
  }

  function handleAnswerChange(event, questionIndex, answerIndex) {
    const newQuestions = questions.slice();
    const newAnswers = newQuestions[questionIndex].answers.slice();
    newAnswers[answerIndex] = event.target.value;
    newQuestions[questionIndex].answers = newAnswers;
    setQuestions(newQuestions);
  }

  function handleAddQuestion() {
    setQuestions([...questions, { question: "", answers: ["", "", "", ""] }]);
  }

  function handleRemoveQuestion(index) {
    const newQuestions = questions.slice();
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  }

  function handleShowResults() {
    setShowResults(true);
  }

  return (
    <div className="add-question-container">
      <Navbar title={"QUESTION"}></Navbar>
      <NavAssess />
      <StepButton>
        <div className="Step2">STEP 2: Adding Questions</div>
      </StepButton>

      <div className="ques-container">
        {questions.map((question, index) => (
          <form key={index}>
            <label>
              <b>Question {index + 1}:</b>
              <input
                style={{ width: "1150px" }}
                type="text"
                value={question.question}
                onChange={(event) => handleQuestionChange(event, index)}
              />
            </label>
            <br></br>
            {question.answers.map((answer, answerIndex) => (
              <label key={answerIndex}>
                Answer {answerIndex + 1}:
                <input
                  type="text"
                  style={{ marginLeft: "20px" }}
                  value={answer}
                  onChange={(event) =>
                    handleAnswerChange(event, index, answerIndex)
                  }
                />
              </label>
            ))}
            <button
              type="button"
              className="done-btn"
              onClick={handleShowResults}
            >
              Done
            </button>
            <button
              type="button"
              className="remove-btn"
              onClick={() => handleRemoveQuestion(index)}
            >
              Remove Question
            </button>
          </form>
        ))}
        <button type="button" className="add-btn" onClick={handleAddQuestion}>
          Add Question
        </button>

        {showResults && (
          <div className="ans-container">
            {questions.map((question, index) => (
              <div className="render-answer" key={index}>
                <h3>
                  Question {index + 1}: {question.question}
                </h3>
                <div>
                  {question.answers.map((answer, answerIndex) => (
                    <div className="ans" key={answerIndex}>
                      Answer {answerIndex + 1}: {answer}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddingQuestion;
