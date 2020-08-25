// The main board of the Tic Tac Toe game/ 
// This component is a stateful component 
// Component state is initialized with three key value pairs 
// boxes, history and xIsNext 

// boxes will be an array containing nine items for each box 

// history will be an empty array - move is pushed to this array

// xIsNext - determines which player makes the move next 

// Following the tutorial from : https://blog.alexdevero.com/how-to-build-simple-tic-tac-toe-game-with-react/

import React from 'react'
import {Link} from 'react-router-dom'

// THE STORAGE COMPONENT SHOULD BE HERE 
// import storage object
import { Storage } from './../storage/storage'

// Import Box component 
import {Box} from './board-box'

// Import utility functions 
import * as utils from '../utils/functions'

// Create Board component 
export class Board extends React.Component{
    constructor(props){
        super(props)

            // initialize component state
            this.state = {
                boxes: Array(9).fill(null),
                history: [], 
                xIsNext: true
            }
    }

// Create instance of Storage object 
storage = new Storage()

// Handle click on boxes on the board
handleBoxClick(index){
    // get current state of boxes 
    const boxes = this.state.boxes.slice()

    // get current state of history 
    let history = this.state.history

    // stop the game if the board contains winning combination 
    if(utils.findWinner(boxes) || boxes[index]){
        return
    }

    // stop the game  if all the boxes are clicked(filled)
    if(utils.areAllBoxesClicked(boxes) === true){
        return
    }

    // mark the box as either 'x' or 'o'
    boxes[index] = this.state.xIsNext ? 'x' : 'o'

    // add move to game history
    history.push(this.state.xIsNext ? 'x' : 'o')

    // update component state with new data
    this.setState({
        boxes: boxes,
        history: history, 
        xIsNext: !this.state.xIsNext
    })

} // handleBoxClick 

// Handle board restart - set component state to initial state 
handleBoardRestart = () => {
    this.setState({
        boxes: Array(9).fill(null), 
        history: [], 
        xIsNext: true
    })
}


render(){
    // Get winner 
    const winner = utils.findWinner(this.state.boxes)

    // check for empty boxes 
    const isFilled = utils.areAllBoxesClicked(this.state.boxes)

    // status message 
    let status 
        if(winner){
            status = `The winner is ${winner}!`
        }
}



}