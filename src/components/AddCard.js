import React, { Component } from "react";
import "../styles/AddCard.css";

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = { question: "", answer: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addCard = this.addCard.bind(this);
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

  handleUpdate(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="newCard customCard">
        <input
          type="text"
          name="question"
          id="question"
          className="input form-control"
          placeholder="Question"
          onChange={this.handleUpdate}
          value={this.state.question}
        />
        <input
          type="text"
          name="answer"
          className="input form-control"
          placeholder="Answer"
          onChange={this.handleUpdate}
          value={this.state.answer}
        />
        <button className="btn btn-dark" onClick={this.addCard}>Add</button>
      </div>
    )
  }
}

export default AddCard;
