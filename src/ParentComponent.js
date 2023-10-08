// ParentComponent.js
import React from 'react';
import Person from './Person';

function ParentComponent() {
  const arr = [
    {name: "Anna", age: 16},
    {name: "Bob", age: 25}
  ];

  return (
    <div>
      <h1>People</h1>
      {arr.map((person) => {
       return <Person name={person.name} age={person.age} />
      }
      )}
    </div>
  );
}

export default ParentComponent;
