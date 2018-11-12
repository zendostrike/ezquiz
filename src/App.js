import React, { Component } from "react";

import Button from "./components/Button";
import QuizBody from "./QuizBody";
import "./App.css";
import quizes from "./data";

class App extends Component {
  state = {
    currentPage: 0,
    totalPages: quizes.length - 1,
    currentResponse: null,
    responses: []
  };

  handleRadioChange = value => {
    console.log(value);
  };

  handlePrev = () => {
    this.setState(prevState => ({
      currentPage:
        prevState.currentPage === 0
          ? prevState.totalPages
          : prevState.currentPage - 1
    }));
    this.clearResponse();
  };

  handleNext = () => {
    this.setState(prevState => ({
      currentPage:
        prevState.currentPage === prevState.totalPages
          ? 0
          : prevState.currentPage + 1
    }));
    this.clearResponse();
  };

  render() {
    const { currentPage, totalPages, responses } = this.state;
    const isFirst = currentPage === 0;
    const isLast = currentPage === totalPages;
    return (
      <div className="App">
        <div className="Container">
          <QuizBody
            quiz={quizes[currentPage]}
            // currentResponse={
            //   responses[currentPage + 1]
            //     ? responses[currentPage + 1].answer
            //     : ""
            // }
            handleResponseChange={this.handleRadioChange}
          />
          <div className="ControlBar">
            <Button
              text="Anterior"
              onClick={this.handlePrev}
              disabled={isFirst}
            />
            <div className="SubtitleWrapper">
              <h4 className="Subtitle">{`${currentPage + 1}/${totalPages +
                1}`}</h4>
            </div>
            <Button
              text="Siguiente"
              onClick={this.handleNext}
              disabled={isLast}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
