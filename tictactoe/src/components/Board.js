import React from 'react'
import Sq from './Square'

const Board = () => {
    return (
        <div>
            <div className="board-row">
                <Sq className="square">1</Sq>
                <Sq className="square">2</Sq>
                <Sq className="square">3</Sq>
            </div>
            <div className="board-row">
                <Sq className="square">4</Sq>
                <Sq className="square">5</Sq>
                <Sq className="square">6</Sq>
            </div>
            <div className="board-row">
                <Sq className="square">7</Sq>
                <Sq className="square">8</Sq>
                <Sq className="square">9</Sq>
            </div>
        </div>
    )
}

export default Board
