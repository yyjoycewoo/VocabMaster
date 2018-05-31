import React, { Component } from "react";
import "../styles/Flashcard.css";
// const states = Object.freeze({
//   FRONT: Symbol(["front"]),
//   BACK: Symbol(["back"]),
//   BROWSE: Symbol(["front_and_back"])
// })

class Flashcard extends Component {

  // render() {
  //   let element;
  //   if (this.state.display === "front") {
  //     element = this.props.question;
  //   } else if (this.state.display === "back") {
  //     element = this.props.answer;
  //   } else if (this.state.display === "front_and_back") {
  //     element = this.props.question + " " + this.props.answer;
  //   }
  //
  //   return (
  //     <div onClick={this.flipCard} className="Flashcard">
  //       {element}
  //       <br/>
  //       <button onClick={this.removeCard}>Remove Me!</button>
  //     </div>
  //   );
  // }

  render() {
    if (this.props.display === "test") {
      return  (
        <div className="Flashcard flip-container" ontouchstart="this.classList.toggle('hover');">
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
    } else {
      return (
        <div className="Flashcard">
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

}

export default Flashcard;
