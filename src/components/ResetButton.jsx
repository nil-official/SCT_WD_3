import React from 'react';

const ResetButton = ({ resetGame }) => (
    <button
        onClick={resetGame}
        className="mt-8 px-6 py-3 bg-[#2d4258] text-white rounded-full text-xl shadow-lg 
        hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
    >
        Reset Game
    </button>
);

export default ResetButton;
