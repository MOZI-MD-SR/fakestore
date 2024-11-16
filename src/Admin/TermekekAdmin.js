import React, { useEffect, useState } from 'react';
import TablaFejlec from './TablaFejlec';
import TermekAdmin from './TermekAdmin';
import './Admin.css'; // Az Admin.css az Admin mappában van

const TermekekAdmin = () => {
  const [termekek, setTermekek] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setTermekek(data));
  }, []);

  const torles = (id) => {
    setTermekek(termekek.filter((termek) => termek.id !== id));
  };

  return (
    <div className="admin-container">
      <h2>Admin: Termékek kezelése</h2>
      <table className="table">
        <TablaFejlec oszlopok={['Név', 'Ár', 'Kategória', 'Műveletek']} />
        <tbody>
          {termekek.map((termek) => (
            <TermekAdmin
              key={termek.id}
              termek={termek}
              torles={torles}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TermekekAdmin;
