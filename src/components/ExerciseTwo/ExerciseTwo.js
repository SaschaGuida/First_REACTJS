import React, { useState } from 'react';
import './ExerciseTwo.css';

function ExerciseTwo() {
    const [headline, setHeadline] = useState('');
    const [contentBlock, setContentBlock] = useState('');
    const [manuscripts, setManuscripts] = useState([]);

    function craftManuscript() {
        if (headline.trim() === '' || contentBlock.trim() === '') {
            alert('Ensure both the headline and content block are populated.');
            return;
        }

        const manuscript = {
            title: headline,
            content: contentBlock,
            date: new Date().toLocaleDateString()
        };
        setManuscripts([...manuscripts, manuscript]);
        setHeadline('');
        setContentBlock('');
    }

    function obliterate(index) {
        const updatedManuscripts = [...manuscripts];
        updatedManuscripts.splice(index, 1);
        setManuscripts(updatedManuscripts);
    }

    return (
        <div id="exercise-2" className="exercise-content">
            <input 
                id="headline" 
                type="text" 
                placeholder="Titolo" 
                value={headline} 
                onChange={e => setHeadline(e.target.value)}
            />

            <textarea 
                id="contentBlock" 
                placeholder="Contenuto" 
                value={contentBlock} 
                onChange={e => setContentBlock(e.target.value)}
            />

            {manuscripts.map((manuscript, index) => (
                <div key={index} className="manuscript">
                    <h2>{manuscript.title}</h2>
                    <p>{manuscript.content}</p>
                    <p>Published on: {manuscript.date}</p>
                    <button onClick={() => obliterate(index)}>Obliterate</button>
                </div>
            ))}

            <button onClick={craftManuscript}>Forge Manuscript</button>
        </div>
    );
}

export default ExerciseTwo;
