import React, { useState } from 'react';
import './ExerciseOne.css';

function ExerciseOne() {
    const [color, setColor] = useState('');
    const [emphasis, setEmphasis] = useState(false);
    const [display, setDisplay] = useState(true);

    function generateColor() {
        const randomValue = () => Math.floor(Math.random() * 256);
        return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    }

    return (
        <div id="exercise-1" className="exercise-content">
            <div 
                className="text-element" 
                style={{
                    color: color,
                    fontWeight: emphasis ? 'bold' : 'normal',
                    display: display ? 'block' : 'none'
                }}
            >
                Esempio di testo
            </div>
            
            <div 
                className="text-element" 
                style={{
                    color: color,
                    fontWeight: emphasis ? 'bold' : 'normal',
                    display: display ? 'block' : 'none'
                }}
            >
                Altro esempio di testo
            </div>

            <button onClick={() => setColor(generateColor())}>Alter Colors</button>
            <button onClick={() => setEmphasis(prev => !prev)}>Emphasize Text</button>
            <button onClick={() => setDisplay(prev => !prev)}>Switch Display</button>
        </div>
    );
}

export default ExerciseOne;
