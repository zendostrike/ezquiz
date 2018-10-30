import React from "react";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import logo from "./logo.svg";

const QuizBody = ({ quiz, currentResponse, handleResponseChange }) => {
  console.log(currentResponse);
  return (
    <div>
      <div className="Header">
        <h1 className="QuizTitle">{quiz.question}</h1>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="Options">
        <RadioGroup
          onChange={value => handleResponseChange(value)}
          value={currentResponse}
        >
          {quiz.options.map(option => (
            <ReversedRadioButton value={option.key} key={option.key}>
              {option.value}
            </ReversedRadioButton>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default QuizBody;
