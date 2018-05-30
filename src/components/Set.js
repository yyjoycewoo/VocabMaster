import React, { Component } from "react";
import "../styles/Set.css";
// const states = Object.freeze({
//   FRONT: Symbol(["front"]),
//   BACK: Symbol(["back"]),
//   BROWSE: Symbol(["front_and_back"])
// })

class Set extends Component {

  render() {

    return (
      <div onClick={this.renderSetCards} className="Set">
        {this.props.name}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { cards: this.props.cards };
    this.renderSetCards = this.renderSetCards.bind(this)
  }

  renderSetCards() {
    console.log("to do render set cards")
  }

}

export default Set;
