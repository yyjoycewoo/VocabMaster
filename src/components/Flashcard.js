import React, { Component } from "react";
import "../styles/Flashcard.css";

class Flashcard extends Component {

  render() {
    if (this.props.display === "browse") {
      return  (
        this.renderFlipCard()
      )
    } else if (this.props.display === "study"){
      return (
        this.renderBrowseCard()
      )
    } else { //test mode
      return (
        this.renderNonFlipCard()
      )
    }
  }

  constructor(props) {
    super(props);
    this.state = { display: "display" };
    this.removeCard = this.removeCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  removeCard() {
    this.props.removeCard(this.props.setId, this.props.id);
  }

  flipCard() {
    if (this.state.display === "front") {
      this.setState({ display: "back" });
    } else if (this.state.display === "back") {
      this.setState({ display: "front" });
    }
  }

  renderFlipCard() {
    return  (
      <div className="Flashcard flip-container card studyCard" ontouchstart="this.classList.toggle('hover');">
        <div className="flipper">
          <div className="front">
            <span>{this.props.question}</span>
          </div>
          <div className="back">
            <span>{this.props.answer}</span>
          </div>
        </div>
      </div>
    )
  }

  renderBrowseCard() {
    return (
      <div className="Flashcard card center browseCard">
        <div>
          <span>{this.props.question}</span>
        </div>
        <div>
          <span>{this.props.answer}</span>
        </div>
        <button className="delete-button" onClick={this.removeCard}></button>
      </div>
    )
  }

  renderNonFlipCard() {
    return (
      <div className="Flashcard testCard">
        <div>
          <span>{this.props.question}</span>
        </div>
      </div>
    )
  }

}

export default Flashcard;
