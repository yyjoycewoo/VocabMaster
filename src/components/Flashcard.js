import React, { Component } from 'react';
import '../styles/Flashcard.css';
// const states = Object.freeze({
//   FRONT: Symbol(['front']),
//   BACK: Symbol(['back']),
//   BROWSE: Symbol(['front_and_back'])
// })

class Flashcard extends Component {

  render() {
    let element;
    if (this.state.display === 'front') {
      element = this.props.question;
    } else if (this.state.display === 'back') {
      element = this.props.answer;
    } else if (this.state.display === 'front_and_back') {
      element = this.props.question + " " + this.props.answer;
    }

    return (
      <div onClick={this.flipCard} className="Flashcard">
        {element}
        <br/>
        <button onClick={this.removeCard}>Remove Me!</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { display: 'front' };
    this.removeCard = this.removeCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  removeCard() {
    console.log('calling remove card in flashcard ', this.props);
    this.props.removeCard(this.props.id);
  }

  flipCard() {
    if (this.state.display === 'front') {
      this.setState({ display: 'back' });
    } else if (this.state.display === 'back') {
      this.setState({ display: 'front' });
    }
  }

}

export default Flashcard;
