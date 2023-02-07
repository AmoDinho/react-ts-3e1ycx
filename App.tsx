import * as React from 'react';
import './style.css';

const cars = ['audi', 'hilux'];
const manufactouers = [
  { name: 'Ferriar', location: 'italy' },
  { name: 'lambo', location: 'england' },
];
export default function App() {
  const whatTimeIsIt = (time) => time;
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {whatTimeIsIt(new Date().toUTCString())}

      {cars.map((car) => (
        <p>{car}</p>
      ))}
      {manufactouers.map((manufactuer) => (
        <span>
          <p>{manufactuer.name}</p>
          <p>{manufactuer.location}</p>
        </span>
      ))}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
