import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="CardContainer">
          <div className="CardBack">
            <span>Back</span>
          </div>
          <div className="CardPage">
            <span>Page</span>
          </div>
          <div className="CardFront">
            <span>Front</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
