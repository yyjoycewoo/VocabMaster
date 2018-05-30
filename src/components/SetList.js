import React, { Component } from 'react';
import '../styles/SetList.css';
import Set from './Set';
import AddItem from './AddItem';

class SetList extends Component {
  render() {
    return (
      <div className="SetList">
        <AddItem addSet={this.addSet} type='set' />
        {this.renderSets()}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { sets: [{
        cards: [],
        name: "set 1",
        key: 1
      }],
      keyCounter: 2
    };

    this.addSet = this.addSet.bind(this);
    // this.removeCard = this.removeCard.bind(this);
  }

  renderSets() {
    return this.state.sets.map(set => (
      <Set key={set['key']} name={set['name']} cards={set['cards']} />
    ));
  }

  addSet(newSet) {
    console.log(newSet)
    newSet['key'] = this.state.keyCounter;
    this.setState({ sets: [...this.state.sets, newSet], keyCounter: this.state.keyCounter++ });
  }

  // removeCard(removeKey) {
  //   const filteredCards = this.state.cards.filter(card => {
  //     return card['key'] !== removeKey;
  //   });
  //   this.setState({ cards: filteredCards });
  // }
}

export default SetList;
