import React from 'react';
import './ExerciseButtons.css';

function ExerciseButtons({ setActiveExercise }) {
    return (
        <div className="d-flex justify-content-center py-3">
            <button className="mostra-esercizio-button" onClick={() => setActiveExercise(1)}>Mostra Esercizio 1</button>
            <button className="mostra-esercizio-button" onClick={() => setActiveExercise(2)}>Mostra Esercizio 2</button>
        </div>
    );
}

export default ExerciseButtons;
