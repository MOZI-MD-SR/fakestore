import React, { useContext } from 'react';
import Termek from './Termek';
import { ApiContext } from '../../contexts/ApiContext';

function Termekek() {
    const {tLista}=useContext(ApiContext)
  return (
    <div className="row">
        {tLista.map((termek)=>{
            return <Termek termek={termek} key={termek.id} />
        })}

    </div>
  )
}

export default Termekek