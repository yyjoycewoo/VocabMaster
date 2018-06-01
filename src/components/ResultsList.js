import React, { Component } from "react";
import "../styles/ResultsList.css";
import Flashcard from "./Flashcard";

class ResultsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const correctCards = this.props.correctCards;
    const incorrectCards = this.props.incorrectCards;
    const numCards = correctCards.length + incorrectCards.length;

    return(
    <div className="ResultsList">
      <div className="CorrectCards">
        <h3>Correct</h3>
        {correctCards.map(card => (
          (<Flashcard key={card["key"]}
            id={card["key"]}
            question={card["question"]}
            color={card["color"]}
            setId={card["setId"]}
            answer={card["answer"]}
            removeCard={this.removeCard}
            display="testResults"/>)
        ))}
      </div>
      <div className="IncorrectCards">
        <h3>Incorrect</h3>
        {incorrectCards.map(card => (
          (<Flashcard key={card["key"]}
            id={card["key"]}
            question={card["question"]}
            color={card["color"]}
            setId={card["setId"]}
            answer={card["answer"]}
            removeCard={this.removeCard}
            display="testResults"/>)
        ))}
      </div>
      <div className="accuracy">Accuracy: {correctCards.length} / {numCards}</div>
    </div>
    )
  }
}

export default ResultsList;
