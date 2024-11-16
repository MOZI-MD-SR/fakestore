import React from 'react';

const Termek = ({ termek, kosarbaHelyez, torles }) => {
    return (
        <div className="termek" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <img
                src={termek.image}
                alt={termek.title}
                style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }}
            />
            <h3>{termek.title}</h3>
            <p>{termek.description.slice(0, 100)}...</p>
            <p style={{ fontWeight: 'bold' }}>{termek.price} $</p>
            <button onClick={() => kosarbaHelyez(termek)} style={{ marginRight: '10px' }}>
                Kosárba
            </button>
            <button onClick={() => torles(termek.id)}>Törlés</button>
        </div>
    );
};

export default Termek;
