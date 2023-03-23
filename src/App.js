import logo from "./logo.svg";
import "./App.css";

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
};

function District(props) {
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
    </div>
  );
}

export default App;
