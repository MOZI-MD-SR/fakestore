import React from "react";

const { useEffect } = require("react");

useEffect

function Termek(props) {
  return (
    <div className='col-sm-4 card'>{props.termek.title}</div>
  )
}

export default Termek
