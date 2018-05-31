import React, { Component } from "react";
import "../styles/FlashcardList.css";
import Flashcard from "./Flashcard";

class StudyList extends Component {
  render() {
    if (this.props.mode == "study") {
      return this.renderStudyList();
    } else if (this.props.mode == "test") {
      return this.renderTestList();
    }
  }

  constructor(props) {
    super(props);
    this.state = { currentCard: 0, numCorrect: 0 };
    this.renderStudyList = this.renderStudyList.bind(this);
    this.renderTestList = this.renderTestList.bind(this);
    this.goToNextCard = this.goToNextCard.bind(this);
    this.processAnswer = this.processAnswer.bind(this);
  }

  renderStudyList() {
    const currCard = this.state.currentCard;
    const card = this.props.cards[currCard];
    const numCards = this.props.cards.length;
    return (
      <div className="StudyList">
        <Flashcard key={card["key"]} 
          id={card["key"]}
          setId={card["setId"]}
          question={card["question"]} 
          answer={card["answer"]} 
          display={this.props.mode} />
        <button onClick={this.goToNextCard}>Next</button>
        <div>Progress: {currCard+1} / {numCards}</div>
      </div>
    )
  }

  renderTestList() {
    const currCard = this.state.currentCard;
    const card = this.props.cards[currCard];
    const numCards = this.props.cards.length;
    return (
      <div className="StudyList">
        <Flashcard key={card["key"]} 
          id={card["key"]}
          setId={card["setId"]}
          question={card["question"]} 
          answer={card["answer"]} 
          display={this.props.mode} />
        
        <form onSubmit={this.processAnswer}>
        <input 
            type="text"
            name="answer"
            className="answer"
            onChange={this.handleUpdate}
            value={this.state.question}
          />
          </form>

        <button onClick={this.goToNextCard}>Next</button>
        <div>Accuracy: {this.state.numCorrect} / {currCard}</div>
      </div>
    )
  }

  goToNextCard() {
    const numCards = this.props.cards.length;
    const nextCard = (this.state.currentCard + 1) % numCards;
    this.setState({currentCard: nextCard});
  }

  processAnswer(e) {
    e.preventDefault();
    const answer = document.querySelector(".answer");
    const currCard = this.state.currentCard;
    const card = this.props.cards[currCard];
    if (card.answer == answer.value) {
      this.setState({numCorrect: this.state.numCorrect + 1});
    }

    answer.value = "";
    this.goToNextCard();
  }
}
export default StudyList;