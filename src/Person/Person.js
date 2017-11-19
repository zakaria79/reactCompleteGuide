import React from 'react';
import './Person.css';

export default function(props) {
  return (
    <div className="Person">
      <p onClick={() => props.onTruc('Abdallah')}>
        I'm a {props.name} and I'm {props.age} years old!
      </p>
      <p>
        {props.children}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
