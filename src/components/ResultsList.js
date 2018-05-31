import React, { Component } from "react";
import "../styles/ResultsList.css";
import Flashcard from "./Flashcard";

class ResultsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className="ResultsList">
      <div className="CorrectCards">
        <h3>Correct</h3>
        {console.log(this.props.correctCards)}
        {this.props.correctCards.map(card => (
          (<Flashcard key={card["key"]}
            id={card["key"]}
            question={card["question"]}
            setId={card["setId"]}
            answer={card["answer"]}
            removeCard={this.removeCard}
            display={this.props.mode}/>)
        ))}
      </div>
      <div className="IncorrectCards">
        <h3>Incorrect</h3>
        {this.props.incorrectCards.map(card => (
          (<Flashcard key={card["key"]}
            id={card["key"]}
            question={card["question"]}
            setId={card["setId"]}
            answer={card["answer"]}
            removeCard={this.removeCard}
            display={this.props.mode}/>)
        ))}
      </div>
    </div>
    )
  }
}

export default ResultsList;
