import React from 'react';
import Square from './Square';

const Board = ({ board, onClick }) => {
    return (
        <div className="grid grid-cols-3 gap-4 w-80 mt-6">
            {board.map((value, index) => (
                <Square key={index} value={value} onClick={() => onClick(index)} />
            ))}
        </div>
    );
};

export default Board;
