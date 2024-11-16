import React, { useState, useEffect } from 'react';
import Termek from './Termek'; // A Termek.js a Public mappában van
import '../App.css'; // Az App.css a src mappában van

const Termekek = () => {
  const [termekek, setTermekek] = useState([]);
  const [kosar, setKosar] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setTermekek(data))
      .catch((error) => console.error('Hiba történt:', error));
  }, []);

  const kosarbaHelyez = (termek) => {
    setKosar([...kosar, termek]);
    alert(`${termek.title} hozzáadva a kosárhoz.`);
  };

  const torles = (id) => {
    setTermekek(termekek.filter((termek) => termek.id !== id));
  };

  return (
    <div className="termekek">
      <div className="termek-lista">
        {termekek.map((termek) => (
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
