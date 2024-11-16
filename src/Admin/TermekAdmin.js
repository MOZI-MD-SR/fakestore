import React from 'react';

const TermekAdmin = ({ termek, torles }) => {
    return (
        <tr>
            <td>{termek.title}</td>
            <td>{termek.price} $</td>
            <td>{termek.category}</td>
            <td>
                {/* Szerkesztés eltávolítva, ha nem szükséges */}
                <button className="button" onClick={() => alert('Szerkesztés funkció nem implementált')}>Szerkesztés</button>
                <button className="button" onClick={() => torles(termek.id)}>Törlés</button>
            </td>
        </tr>
    );
};

export default TermekAdmin;
