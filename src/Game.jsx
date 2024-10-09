import React, { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import ResetButton from './components/ResetButton';
import { calculateWinner } from './helpers';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const isDraw = board.every((square) => square !== null) && !winner;

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br 
        from-[#0f172a] via-[#1e293b] to-[#0f172a]">
            <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white drop-shadow-lg">Tic-Tac-Toe</h1>
            <Board board={board} onClick={handleClick} />
            <StatusMessage winner={winner} xIsNext={xIsNext} isDraw={isDraw} />
            <ResetButton resetGame={resetGame} />
        </div>
    );
};

export default Game;
