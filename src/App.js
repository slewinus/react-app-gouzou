import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [gifs, setGifs] = useState([]);
    const [ip, setIP] = useState('');
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
    }

    useEffect(() => {
        const gifLinks = [
            'https://i.gifer.com/2GU.gif',
            'https://i.gifer.com/VZmo.gif',
            'https://i.gifer.com/5GJg.gif',
            'https://i.gifer.com/kkd.gif',
            'https://i.gifer.com/PDE.gif',
            'https://i.gifer.com/u9o.gif',

        ];
        getData()

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
                    <h4>tiens ton ip quand même bg</h4>
                    <h2>{ip}</h2>
                </div>

            </header>
        </div>
    );
}

export default App;