import React, { Component } from 'react';
import './FlashcardList.css';
import Flashcard from './Flashcard';
import AddItem from './AddItem';

class FlashcardList extends Component {
  render() {
    return (
      <div className="FlashcardList">
        <AddItem addCard={this.addCard}/>
        {this.renderCards()}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { cards: [
                            {question: 'One', answer: '一', key: 1},
                            {question: 'Two', answer: '二', key: 2},
                            {question: 'Three', answer: '三', key: 3}
                          ],
                    keyCounter: 4
                  };
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);    
  }
  
  renderCards() {
    return this.state.cards.map(card => (
      <Flashcard key={card['key']} id={card['key']} question={card['question']} answer={card['answer']} removeCard={this.removeCard}/>
    ));
  }

  addCard(newCard) {
    newCard['key'] = this.state.keyCounter;
    this.setState({ cards: [...this.state.cards, newCard] });
    this.state.keyCounter++;
  }
  
  removeCard(removeKey) {
    const filteredCards = this.state.cards.filter(card => {
      return card['key'] !== removeKey;
    });
    this.setState({ cards: filteredCards });
  }  
}

export default FlashcardList;