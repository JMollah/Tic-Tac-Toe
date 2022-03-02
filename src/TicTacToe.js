import React,{ useState } from 'react';
import EndGame from './EndGame';
import Square from './Square';


const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

const TicTacToe = () => {
    const [grid,setGrid] = useState(Array(9).fill(INITIAL));
    const [player,setPlayer] = useState(false);
    const [gameFinished,setGameFinished] = useState(false);
    const [draw,setDraw] = useState(false);
    const [winCount,setWinCount] = useState({ X : 0, O : 0 });

    const isGameOver = () => {
        if(!gameFinished){

            //* X win check
            for(let i = 0; i < winCombination.length; i++){
                if(
                    grid[winCombination[i][0]] === X_PLAYER &&
                    grid[winCombination[i][1]] === X_PLAYER &&
                    grid[winCombination[i][2]] === X_PLAYER
                    ) {
                        setGameFinished(true);
                        setWinCount({...winCount, X : winCount.X + 1});
                        console.log("X WON");
                        return;
                }
                if(
                    grid[winCombination[i][0]] === O_PLAYER &&
                    grid[winCombination[i][1]] === O_PLAYER &&
                    grid[winCombination[i][2]] === O_PLAYER
                    ) {
                        setGameFinished(true);
                        setWinCount({...winCount, O : winCount.O + 1});
                        console.log("O WON");
                        return;
                }
                
            }
            


            //Draw Game ckeck
            if(!grid.includes(INITIAL)){
                setDraw(true);
                setGameFinished(true);
                console.log("DRAW");
            }
        }
    }


    const restartGame = () => {
        setGrid(Array(9).fill(INITIAL));
        setGameFinished(false);
        setDraw(false);
    }

    const clearHistory = () => {
        setWinCount({ X : 0, O : 0});
        restartGame();
    }

    isGameOver();
    

    const handleClick = (id) => {
        // console.log("handleClick is clicked");
        setGrid(
            grid.map((item,index) => {
                if(index === id){
                    if(player){
                        return X_PLAYER;
                    }
                    else{
                        return O_PLAYER;
                    }
                }
                else{
                    return item;
                }
            })
        );
        setPlayer(!player);
    }



    return (
        <div className='box'>
            <span className='win-history'>
                X's WINS : {winCount.X}
                <br/>
                O's WINS : {winCount.O}
            </span>

            {gameFinished && (
                <EndGame 
                    winCount = {winCount} restartGame = {restartGame} clearHistory = {clearHistory} player ={player} 
                    draw = {draw} 
                />)}
            <Square clickedArray={grid} handleClick={handleClick}/>
        </div>
    )
}

export default TicTacToe;