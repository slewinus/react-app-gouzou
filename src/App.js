import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [gifs, setGifs] = useState([]);


    useEffect(() => {
        const gifLinks = [
            'https://i.gifer.com/2GU.gif',
            'https://i.gifer.com/VZmo.gif',
            'https://i.gifer.com/5GJg.gif',
            'https://i.gifer.com/kkd.gif',
            'https://i.gifer.com/PDE.gif',
            'https://i.gifer.com/u9o.gif',

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
                    <img className="gify-img2" key={index} src={gif} alt="GIF animé" />
                ))}
                <div className="container">
                    <p>
                    c'est bon t'es content t'as tes gifs ? casse toi maintenant.
                    </p>
                </div>

            </header>
        </div>
    );
}

export default App;