import React from 'react';
import './App.css';

class Squares extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick = (index) => {
        this.props.squareLocation(this.props.index)
        this.props.squareLocation(this.props.counter)
        this.props.winningCombos(this.props.value)
    }

    render(){
        return(
            <div>
            <button class = "Squares" onClick = {this.handleClick}> {this.props.value} </button>
            </div>
        )
    }
}


export default Squares;
