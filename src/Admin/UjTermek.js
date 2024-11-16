import React, { useState } from 'react';
import './Admin.css';

const UjTermek = () => {
  const [nev, setNev] = useState('');
  const [ar, setAr] = useState('');
  const [kategoria, setKategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Új termék hozzáadva:\nNév: ${nev}\nÁr: ${ar} $\nKategória: ${kategoria}`);
    setNev('');
    setAr('');
    setKategoria('');
  };

  return (
    <div className="admin-container">
      <h2>Új termék hozzáadása</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Név:</label>
          <input
            type="text"
            value={nev}
            onChange={(e) => setNev(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ár:</label>
          <input
            type="number"
            value={ar}
            onChange={(e) => setAr(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Kategória:</label>
          <input
            type="text"
            value={kategoria}
            onChange={(e) => setKategoria(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Hozzáadás</button>
      </form>
    </div>
  );
};

export default UjTermek;
