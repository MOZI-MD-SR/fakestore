import React, { useState, useEffect } from 'react';
import Termek from './Termek';

const Termekek = () => {
    const [termekek, setTermekek] = useState([]);
    const [kereses, setKereses] = useState('');
    const [kosar, setKosar] = useState([]);

    // Termékek lekérése az API-ról
    useEffect(() => {
        console.log('Termékek betöltése indult!');
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                console.log('Lekért termékek:', data);
                setTermekek(data);
            })
            .catch((error) => console.error('Hiba történt:', error));
    }, []);

    // Termék kosárba helyezése
    const kosarbaHelyez = (termek) => {
        console.log(`Kosárba helyezve: ${termek.title}`);
        setKosar([...kosar, termek]);
        alert(`${termek.title} hozzáadva a kosárhoz.`);
    };

    // Termék törlése a listából
    const torles = (id) => {
        console.log(`Törölt termék ID: ${id}`);
        setTermekek(termekek.filter((termek) => termek.id !== id));
    };

    // Szűrés a keresési kifejezés alapján
    const szurtTermekek = termekek.filter((termek) =>
        termek.title.toLowerCase().includes(kereses.toLowerCase())
    );

    return (
        <div className="termekek">
            <form>
                <label htmlFor="keresesMezo">Keresés:</label>
                <input
                    id="keresesMezo"
                    name="keresesMezo"
                    type="text"
                    placeholder="Keresés..."
                    value={kereses}
                    onChange={(e) => {
                        console.log(`Keresési kifejezés: ${e.target.value}`);
                        setKereses(e.target.value);
                    }}
                    style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
                />
            </form>
            <div
                className="termek-lista"
                style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
            >
                {szurtTermekek.map((termek) => (
                    <Termek
                        key={termek.id}
                        termek={termek}
                        kosarbaHelyez={kosarbaHelyez}
                        torles={torles}
                    />
                ))}
            </div>
        </div>
    );
};

export default Termekek;
