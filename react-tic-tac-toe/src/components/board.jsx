// The main board of the Tic Tac Toe game/ 
// This component is a stateful component 
// Component state is initialized with three key value pairs 
// boxes, history and xIsNext 

// boxes will be an array containing nine items for each box 

// history will be an empty array - move is pushed to this array

// xIsNext - determines which player makes the move next 


import React from 'react'
import {Link} from 'react-router-dom'

// THE STORAGE COMPONENT SHOULD BE HERE 
// import storage object
// import {Storage}

// Import Box component 
import {Box} from './board-box'

// Import utility functions 
import * as utils from '../utils/functions'

// Create board component 