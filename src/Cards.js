import React, { Component } from 'react';
import Card from './Card.js';

class Cards extends Component {
    render () {
        const howMany = this.props.number;
        const dimension = Math.floor(100 / Math.sqrt(howMany));
        let cards = [];
        for(let i = 0; i < howMany; i++) {
            cards.push(<Card dimension={dimension} key={i} />);
        }

        return (
            <div
                className="container"
                style={{
                    height: this.props.dimension,
                    width: this.props.dimension
                }}
            >
                {cards}
            </div>
        )
    }
}

Cards.defaultProps = {
    dimension: '20vh'
}


export default Cards;