import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TablaFejlec from './TablaFejlec';
import TermekAdmin from './TermekAdmin';
import './Admin.css';

const TermekekAdmin = () => {
  const [termekek, setTermekek] = useState([]);

  useEffect(() => {
    console.log('Admin termékek betöltése...');
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log('Admin termékek betöltve:', data);
        setTermekek(data);
      });
  }, []);

  const szerkesztes = (id) => {
    console.log(`Termék szerkesztése, ID: ${id}`);
    alert(`Termék szerkesztése (ID: ${id}).`);
  };

  const torles = (id) => {
    setTermekek(termekek.filter((termek) => termek.id !== id));
    console.log(`Admin termék törölve, ID: ${id}`);
    alert(`A termék törölve (ID: ${id}).`);
  };

  return (
    <div className="admin-container">
      <h2>Admin: Termékek kezelése</h2>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/admin/uj">
          <button className="button">Új Termék Hozzáadása</button>
        </Link>
      </div>
      <table className="table">
        <TablaFejlec oszlopok={['Név', 'Ár', 'Kategória', 'Műveletek']} />
        <tbody>
          {termekek.map((termek) => (
            <TermekAdmin
              key={termek.id}
              termek={termek}
              szerkesztes={szerkesztes}
              torles={torles}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TermekekAdmin;
