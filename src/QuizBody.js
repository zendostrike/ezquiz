import React from "react";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import logo from "./logo.svg";

const QuizBody = ({ quiz, handleResponseChange }) => {
  return (
    <div>
      <div className="Header">
        <h1 className="QuizTitle">{quiz.name}</h1>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      {quiz.questions.map(question => (
        <div key={question.id}>
          <h3 className="QuestionName">{question.name}</h3>
          <div className="Options">
            <RadioGroup
              onChange={value => handleResponseChange(value)}
              value={"0"}
            >
              {question.options.map(option => (
                <ReversedRadioButton
                  value={`${option.id}`}
                  key={`${option.id}`}
                >
                  {option.value}
                </ReversedRadioButton>
              ))}
            </RadioGroup>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizBody;
