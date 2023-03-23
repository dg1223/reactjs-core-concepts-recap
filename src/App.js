import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <District name="Noakhali" special="bibhag"></District>
      <District name="Brahmonbaria" special="jodha akbar"></District>
      <District name="Shumilla" special="Moyna and Moti"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: "yellow",
  margin: "20px",
  borderRadius: "20px",
  border: "3px solid red",
  padding: "20px",
};

function District(props) {
  const [power, setPower] = useState(1);

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  };

  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost the power</button>
    </div>
  );
}

export default App;
