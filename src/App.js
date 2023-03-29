import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [gifs, setGifs] = useState([]);


    useEffect(() => {
        const gifLinks = [
            'https://i.gifer.com/2GU.gif',
            'https://i.gifer.com/VZmo.gif',
            'https://i.gifer.com/5GJg.gif',
            'https://media.giphy.com/media/Rlwz4m0aHgXH13jyrE/giphy.gif'
        ];

        const randomIndexes = [];
        while (randomIndexes.length < 1) {
            const index = Math.floor(Math.random() * gifLinks.length);
            if (!randomIndexes.includes(index)) {
                randomIndexes.push(index);
            }
        }

        const randomGifs = randomIndexes.map(index => gifLinks[index]);

        setGifs(randomGifs);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {gifs.map((gif, index) => (
                    <img key={index} src={gif} alt="GIF animé" />
                ))}
                <p>
                    Bon ok j'ai compris comment ça marche à peu près mdr
                </p>
                <button className="button"
                    onClick={() => {
                        console.log("Hello world");
                    }}
                >
                    Test je sais pas si ça marche bien
                </button>
            </header>
        </div>
    );
}

export default App;