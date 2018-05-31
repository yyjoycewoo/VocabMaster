import React, { Component } from "react";
import "../styles/Flashcard.css";

class Flashcard extends Component {

  render() {
    if (this.props.display === "study") {
      return  (
        this.renderFlipCard()
      )
    } else if (this.props.display === "browse"){
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
      <div className="Flashcard flip-container card center" ontouchstart="this.classList.toggle('hover');">
        <div className="flipper">
          <div className="front">
            {this.props.question}
          </div>
          <div className="back">
            {this.props.answer}
          </div>
        </div>
      </div>
    )
  }

  renderBrowseCard() {
    return (
      <div className="Flashcard card">
        <div>
          {this.props.question}
        </div>
        <div>
          {this.props.answer}
        </div>
        <button onClick={this.removeCard}>Remove Me!</button>
      </div>
    )
  }

  renderNonFlipCard() {
    return (
      <div className="Flashcard card center">
        <div>
          {this.props.question}
        </div>
      </div>
    )
  }

}

export default Flashcard;
