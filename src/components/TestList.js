import React, { Component } from "react";
import "../styles/TestList.css";
import Flashcard from "./Flashcard";
import ResultsList from "./ResultsList";

class TestList extends Component {
  render() {
    const currCardIndex = this.state.currentCard;
    const card = this.props.cards[currCardIndex];
    const numCards = this.props.cards.length;
    const correctCards = this.state.correctCards;
    const incorrectCards = this.state.incorrectCards;

    if (this.isFinishedTest() && typeof(card) !== "undefined") {
      return (
        <div className="TestList">
          <Flashcard key={card["key"]} 
            id={card["key"]}
            setId={card["setId"]}
            question={card["question"]} 
            answer={card["answer"]} 
            display={this.props.mode} />

          <form className="answerForm" onSubmit={this.processAnswer}>
            <input
              type="text"
              className="answer"
              onChange={this.handleUpdate}
              value={this.state.question}
            />
          </form>
          <div className="accuracy">Accuracy: {correctCards.length} / {numCards}</div>
        </div>
      )
    } else { // show results
      return ([
        <ResultsList correctCards={correctCards} incorrectCards={incorrectCards}/>
      ])
    }
  }

  constructor(props) {
    super(props);
    this.state = { currentCard: 0,
                    currentSet: this.props.currSet,
                    correctCards: [],
                    incorrectCards: []
                  };
    this.processAnswer = this.processAnswer.bind(this);
    this.goToNextCard = this.goToNextCard.bind(this);
    this.isFinishedTest = this.isFinishedTest.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currSet != prevState.currentSet) {
      return { currentCard: 0, 
                currentSet: nextProps.currSet,
                correctCards: [],
                incorrectCards: []
              };
    } else {
      return {};
    }
  }

  isFinishedTest() {
    return (this.state.currentCard != -1);
  }

  goToNextCard() {
    const numCards = this.props.cards.length;
    const nextCard = (this.state.currentCard + 1);
    if (nextCard >= numCards) {
      this.setState({currentCard: -1});
      return;
    }
    this.setState({currentCard: nextCard});
  }

  processAnswer(e) {
    e.preventDefault();
    const answer = document.querySelector(".answer");
    const currCardIndex = this.state.currentCard;
    const card = this.props.cards[currCardIndex];

    if (card.answer === answer.value) {
      this.setState({correctCards: [...this.state.correctCards, card]});
    } else {
      this.setState({incorrectCards: [...this.state.incorrectCards, card]});
    }

    answer.value = "";
    this.goToNextCard();
  }
}
export default TestList;
