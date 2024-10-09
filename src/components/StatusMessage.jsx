import React from 'react';

const StatusMessage = ({ winner, xIsNext, isDraw }) => (
    <div className="mt-8 text-2xl font-semibold text-white drop-shadow-lg">
        {winner ? `🎉 Winner: ${winner}` : isDraw ? "It's a Draw!" : `Next Player: ${xIsNext ? 'X' : 'O'}`}
    </div>
);

export default StatusMessage;
