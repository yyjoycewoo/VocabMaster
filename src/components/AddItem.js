import React, { Component } from "react";
import "../styles/AddItem.css";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = { question: "", answer: "", name: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addCard = this.addCard.bind(this);
    this.addSet = this.addSet.bind(this);

  }

  addCard() {
    const newCard = {
                      question: this.state.question,
                      answer: this.state.answer,
                    }
    this.props.addCard(newCard);
    this.setState({ question: "" });
    this.setState({ answer: "" });
  }

  addSet() {
    const newSet = {
      name: this.state.name,
      cards: []
    }

    this.props.addSet(newSet);
    this.setState({ name: "" });
  }



  handleUpdate(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    if (this.props.type === "flashcard") {
      return (
        <div className="AddItem">
          <input
            type="text"
            name="question"
            onChange={this.handleUpdate}
            value={this.state.question}
          />
          <input
            type="text"
            name="answer"
            onChange={this.handleUpdate}
            value={this.state.answer}
          />
          &nbsp;&nbsp;
          <button onClick={this.addCard}>Add</button>

        </div>
      );
    } else {
      return (
        <div className="AddItem">
          <input
            type="text"
            name="name"
            onChange={this.handleUpdate}
            value={this.state.name}
          />
          &nbsp;&nbsp;
          <button onClick={this.addSet}>Add</button>
        </div>

      );
    }
  }
}

export default AddItem;
