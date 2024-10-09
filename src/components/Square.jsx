import React from 'react';
import circle_iron from "../assets/circle.png"
import cross_iron from "../assets/cross.png"

const Square = ({ value, onClick }) => {
    const renderIcon = () => {
        if (value === 'X') {
            return (
                <img src={cross_iron} alt="X" className="p-5" />
            );
        } else if (value === 'O') {
            return (
                <img src={circle_iron} alt="O" className="p-4" />
            );
        }
        return null;
    };

    return (
        <button
            className="h-24 w-24 bg-transparent border-2 border-white rounded-lg shadow-lg 
            text-4xl font-bold flex items-center justify-center hover:bg-white/20 transition-all 
            duration-200 ease-in-out transform hover:scale-105 active:scale-95"
            onClick={onClick}
        >
            {renderIcon()}
        </button>
    );
};

export default Square;
