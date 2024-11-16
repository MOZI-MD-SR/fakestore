import React from 'react';

const Termek = ({ termek, kosarbaHelyez, torles }) => {
  return (
    <div className="termek">
      <img src={termek.image} alt={termek.title} />
      <h3>{termek.title}</h3>
      <p>{termek.description}</p>
      <p>{termek.price} $</p>
      <div className="gombok">
        <button onClick={() => kosarbaHelyez(termek)}>Kosárba</button>
        <button onClick={() => torles(termek.id)}>Törlés</button>
      </div>
    </div>
  );
};

export default Termek;
