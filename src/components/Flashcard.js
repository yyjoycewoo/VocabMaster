import React, { Component } from "react";
import "../styles/Flashcard.css";

class Flashcard extends Component {

  render() {
    if (this.props.display === "browse" || this.props.display === "testResults") {
      return  (
        this.renderFlipCard()
      )
    } else if (this.props.display === "study"){
      return (
        this.renderStudyCard()
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
      <div className="Flashcard flip-container customCard browseCard">
        <div className="flipper">
          <div className="cardFront text" style={{background: this.props.color}}>
            <span>{this.props.question}</span>
          </div>
          <div className="cardBack text" style={{background: "#5D535E"}}>
            <span>{this.props.answer}</span>
            <br/>
            <button className="btn btn-outline-danger" onClick={this.removeCard}>Delete</button>
          </div>
        </div>
      </div>
    )
  }

  renderStudyCard() {
    return (
      <div className="Flashcard customCard center studyCard" style={{background: this.props.color}}>
        <div className="text">
          <span>{this.props.question}</span>
        </div>
        <div>
          <span className="text">{this.props.answer}</span>
        </div>
      </div>
    )
  }

  renderNonFlipCard() {
    return (
      <div className="Flashcard testCard" style={{background: this.props.color}}>
        <div className="text" >
          <span>{this.props.question}</span>
        </div>
      </div>
    )
  }

}

export default Flashcard;
