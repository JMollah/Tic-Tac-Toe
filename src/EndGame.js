import React from 'react';

const EndGame = (props) => {
  return (
    <div className='end-game-screen'>
        {!props.draw && <span className='win-text'>{props.player ? "O WON" : "X WON"} </span>}

        {props.draw && <span className='win-text'>DRAW GAME</span>}

        <span className='win-history'>
            X's WINS : {props.winCount.X}
            <br/>
            O's WINS : {props.winCount.O}
        </span>

        <button className='btn' onClick={props.restartGame}>
            RESTART GAME
        </button>

        <button className='btn' onClick={props.clearHistory}>
            CLEAR HISTORY
        </button>
    </div>
  )
}

export default EndGame;