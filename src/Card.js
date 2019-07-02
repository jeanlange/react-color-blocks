import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'lightgrey'
        }
    }

    randomColorPiece = () => {
        return Math.floor(Math.random() * 256);
    }

    randomColor = () => {
        return `rgb(${this.randomColorPiece()}, ${this.randomColorPiece()}, ${this.randomColorPiece()})`;
    }

    changeColor = () => {
        let color = this.randomColor();
        this.setState({
            color: color
        });
    }

    render() {
        const color = this.state.color;
        return (
            <div
                style={{backgroundColor: color}}
                className="box"
                onMouseEnter={this.changeColor}
            />
        )
    }
}

export default Card;