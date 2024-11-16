import React from 'react';

const TermekAdmin = ({ termek, szerkesztes, torles }) => {
    return (
        <tr>
            <td>{termek.title}</td>
            <td>{termek.price} $</td>
            <td>{termek.category}</td>
            <td>
                <button className="button" onClick={() => szerkesztes(termek.id)}>Szerkesztés</button>
                <button className="button" onClick={() => torles(termek.id)}>Törlés</button>
            </td>
        </tr>
    );
};

export default TermekAdmin;
