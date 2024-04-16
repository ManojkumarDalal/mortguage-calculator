import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [result, setResult] = useState(0);
  function handleChange(event) {
    console.log(event.target.id, event.target.value);
    let id = event.target.id;

    if (id === "principle") setPrinciple(event.target.value);
    else if (id === "interest") setInterest(event.target.value);
    else setYears(event.target.value);
  }

  useEffect(() => {
    // let numerator = interest * (1 + interest) ** years;
    // let denominator = (1 + interest) ** years - 1;
    // let result = principle * (numerator / denominator);
    // setResult(result);
    if (principle && interest && years) {
      let numerator = interest * Math.pow(1 + interest, years);
      let denominator = Math.pow(1 + interest, years) - 1;
      let result = principle * (numerator / denominator);
      setResult(result.toFixed(2));
    } else {
      setResult(0);
    }
  }, [principle, interest, years]);
  
  return (
    <div className="container">
      <h1> Mortguage Calculator </h1>
      <div className="inputes">
        <p>Enter Principle:</p>
        <input type="number" id="principle" onChange={handleChange} />

        <p>Enter Interest:</p>
        <input type="number" id="interest" onChange={handleChange} />

        <p>Enter Years:</p>
        <input type="number" id="years" onChange={handleChange} />

        <div className="output">Your EMI is {result}</div>
      </div>
    </div>
  );
}

export default App;
