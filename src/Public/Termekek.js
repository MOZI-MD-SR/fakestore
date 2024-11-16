import React, { useState, useEffect } from 'react';
import Termek from './Termek';
import '../App.css';

const Termekek = () => {
  const [termekek, setTermekek] = useState([]);
  const [kosar, setKosar] = useState([]);

  useEffect(() => {
    console.log('Fetching termékek...');
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log('Termékek betöltve:', data);
        setTermekek(data);
      })
      .catch((error) => console.error('Hiba történt a termékek betöltésekor:', error));
  }, []);

  const kosarbaHelyez = (termek) => {
    setKosar([...kosar, termek]);
    console.log(`Kosárba helyezve: ${termek.title}`);
    alert(`${termek.title} hozzáadva a kosárhoz!`);
  };

  const torles = (id) => {
    setTermekek(termekek.filter((termek) => termek.id !== id));
    console.log(`Termék törölve, ID: ${id}`);
    alert(`A termék törölve (ID: ${id}).`);
  };

  return (
    <div className="termekek">
      <h2>Termékek</h2>
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
