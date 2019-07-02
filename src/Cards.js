import React, { Component } from 'react';
import Card from './Card.js';

class Cards extends Component {
    render () {
        const howMany = this.props.number;
        let cards = [];
        for(let i = 0; i < howMany; i++) {
            cards.push(<Card />);
        }

        return (
            <div className="container">
                {cards}
            </div>
        )
    }
}

export default Cards;