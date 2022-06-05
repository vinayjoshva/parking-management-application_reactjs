import React, { createContext, useState } from 'react';
import './App.css';
import ParkingLotCreation from './components/ParkingLotCreation';

const userContext = createContext(0);

function App() {
  const [spaces, setSpaces] = useState<number | string>(0);

  return (
    <div className="App">
      <h1 className="heading">Parking Management System</h1>
      <ParkingLotCreation spaces={spaces} setSpaces={setSpaces}/>
    </div>
  );
}

export default App;
