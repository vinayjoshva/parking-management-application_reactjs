import React from 'react';
import './parkingLotCreation.css';

interface Props {
  spaces: number | string;
  setSpaces: React.Dispatch<React.SetStateAction<number | string>>;
}

const ParkingLotCreation = ({ spaces, setSpaces }: Props) => {
  return (
    <div>
      <form className="input">
        <input
          type="number"
          onChange={(e) => setSpaces(e.target.value)}
          id="parking-create-text-input"
          placeholder="Enter the number of spaces"
          className="input_box" />
        <button
          type="submit"
          className="input_submit"
          id="parking-create-submit-button">GO</button>
      </form>
    </div>
  );
};

export default ParkingLotCreation;