import React from 'react';
import Squares from './Squares.js'
import './App.css';

class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={
            squares: ["","","","","","","","",""],
            playerX: "X",
            playerO: "O",
            counter: 0,
            gameWinX: false,
            gameWinO:false,
            gameTie: false,
            playerUp: "X"
        }
    }


    winningCombos = () => {
        const {playerX, playerO, squares, counter, gameWinO, gameWinX, gameTie} = this.state
        let winningArrays = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        winningArrays.map(value => {
            var [a,b,c] = value
                if (squares[a] && squares[a] === squares[c] && squares[a] === squares[b] && squares[a] === playerX)  {
                    this.setState({
                        gameWinX:true
                    })
                    window.setTimeout(function(){window.location.reload()}, 6000);
            } else if (squares[a] && squares[a] === squares[c] && squares[a] === squares[b] && squares[a] === playerO) {
                    this.setState({
                        gameWinO:true
                    })
                    window.setTimeout(function(){window.location.reload()}, 8000);
                }
        })
    }


    squareLocation = (index) => {
        const {playerX, playerO, squares, counter, gameWinO, gameWinX, gameTie} = this.state
        let newCount = this.state.counter + 1
        if(this.state.counter%2 === 0 && squares[index] !== playerO && squares[index] === "" ){
            squares[index] = playerX
            this.setState({
                squares: squares,
                counter:newCount,
                playerUp:"O"
            })
        } else if(this.state.counter%2 !== 0 && squares[index] !== playerX && squares[index] === "" ){
            squares[index] = playerO
            this.setState({
                squares: squares,
                counter:newCount,
                playerUp:"X"
            })
        } else if (newCount >= 9) {
            this.setState({
                gameTie: true
            })
            window.setTimeout(function(){window.location.reload()}, 4000);
        }
    }



    render(){
        let {squares} = this.state
        let square = squares.map((value,index)=> {
            return (
                <Squares
                value = {value}
                index={index}
                key={index}
                squareLocation = {this.squareLocation}
                clickCounter = {this.clickCounter}
                winningCombos = {this.winningCombos}
                />
            )
        })
        return(
            <div id="container">
                <h2>Tic Tac Toe</h2>

                <div id = "player">
                <label>player up:{this.state.playerUp}</label>
                </div>
                <br />
                {!this.state.gameTie && !this.state.gameWinX && !this.state.gameWinO && <div id="gameboard">
                {square}
                </div>}
                {this.state.gameTie && !this.state.gameWinO && !this.state.gameWinX && <div id="tie">
                <img src = "https://media3.giphy.com/media/3oEjI2af22uQwwShqw/giphy.gif?cid=790b761146c1e39101f4545e2c6e8dd5ff4a6c1ed19c5228&rid=giphy.gif" />
                </div>}
                {this.state.gameWinO && !this.state.gameTie && <div id="OWins">
                <img src = "https://media1.giphy.com/media/AgeM7rIAIT2gg/giphy.gif?cid=790b76112dd5d02feae60c614146cefd068634954842cc66&rid=giphy.gif"/>
                </div>}
                {this.state.gameWinX && !this.state.gameTie && <div id="xWins">
                <img src = "https://media1.giphy.com/media/26grMgCg1xZh28AF2/giphy.gif?cid=790b761129b20d01cbe5518a348c715e5be7d8ca3255f69d&rid=giphy.gif" />
                </div>}
                {this.state.gameWinX && this.state.gameTie && <div id="xWins">
                <img src = "https://media1.giphy.com/media/26grMgCg1xZh28AF2/giphy.gif?cid=790b761129b20d01cbe5518a348c715e5be7d8ca3255f69d&rid=giphy.gif" />
                </div>}
            </div>


        )
    }
}


export default Board;
