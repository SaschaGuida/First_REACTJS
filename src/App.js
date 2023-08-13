import React, { useState } from 'react';
import './components/ExerciseOne/ExerciseOne.css';
import './components/ExerciseTwo/ExerciseTwo.css';
import './components/ExerciseButtons/ExerciseButtons.css';

function App() {
    const [visibleExercise, setVisibleExercise] = useState(null);

    const showExercise = (exerciseNumber) => {
        if (visibleExercise === exerciseNumber) {
            setVisibleExercise(null);
        } else {
            setVisibleExercise(exerciseNumber);
        }
    }

    return (
        <div className="app-container">
            <div className="d-flex justify-content-center py-3">
                <button className="mostra-esercizio-button" onClick={() => showExercise(1)}>Mostra Esercizio 1</button>
                <button className="mostra-esercizio-button" onClick={() => showExercise(2)}>Mostra Esercizio 2</button>
            </div>

            {visibleExercise === 1 && <ExerciseOne />}
            {visibleExercise === 2 && <ExerciseTwo />}
        </div>
    );
}

function ExerciseOne() {
    const [texts, setTexts] = useState([
        { id: 1, content: 'Testo 1' },
        { id: 2, content: 'Testo 2' },
        { id: 3, content: 'Testo 3' }
    ]);

    const handleColorChange = () => {
        setTexts(texts.map(text => ({ ...text, color: generateColor() })));
    };

    const handleEmphasize = () => {
        setTexts(texts.map(text => ({ ...text, emphasize: !text.emphasize })));
    };

    const handleDisplayToggle = () => {
        setTexts(texts.map(text => ({ ...text, hide: !text.hide })));
    };

    return (
        <div>
            <button onClick={handleColorChange}>Modifica Colore</button>
            <button onClick={handleEmphasize}>Enfasi</button>
            <button onClick={handleDisplayToggle}>Switch Display</button>

            {texts.map(text => (
                <p key={text.id} className="text-element" style={{ 
                    color: text.color, 
                    fontWeight: text.emphasize ? 'bold' : 'normal', 
                    display: text.hide ? 'none' : 'block' 
                }}>
                    {text.content}
                </p>
            ))}
        </div>
    );
}

function ExerciseTwo() {
    const [manuscripts, setManuscripts] = useState([]);
    const [headline, setHeadline] = useState('');
    const [content, setContent] = useState('');

    const handlePublish = () => {
        if (headline.trim() && content.trim()) {
            setManuscripts([...manuscripts, { title: headline, content: content, date: new Date() }]);
            setHeadline('');
            setContent('');
        } else {
            alert('Ensure both the headline and content block are populated.');
        }
    };

    const handleObliterate = (index) => {
        const updatedManuscripts = [...manuscripts];
        updatedManuscripts.splice(index, 1);
        setManuscripts(updatedManuscripts);
    };

    return (
        <div id="exercise-2">
            <input 
                type="text" 
                value={headline} 
                onChange={e => setHeadline(e.target.value)} 
                placeholder="Headline" 
            />
            <textarea 
                value={content} 
                onChange={e => setContent(e.target.value)} 
                placeholder="Content block"
            />
            <button onClick={handlePublish}>Publish</button>
            
            <div id="archive">
                {manuscripts.map((manuscript, index) => (
                    <div key={index} className="manuscript">
                        <h2>{manuscript.title}</h2>
                        <p>{manuscript.content}</p>
                        <p>Published on: {manuscript.date.toLocaleDateString()}</p>
                        <button onClick={() => handleObliterate(index)}>Obliterate</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

function generateColor() {
    const randomValue = () => Math.floor(Math.random() * 256);
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}
