import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");


  const reloadPage = () => {
    window.location.reload();
  }
  return (
    <div className="App">
      <div>
        <h1> BMI calculator</h1>
        <form>
          <div>
            <label>Weight</label>
            <input
              type="number"
              placeholder="Enter your weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <label>Height</label>
            <input
              type="number"
              placeholder="Enter your height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <button
              className="btn"
              type="submit"
              onClick={(e) => {
                e.preventDefault();

                if (weight <= 0 || height <= 0) {
                  alert("Please enter valid weight & height.");
                  return;
                }
                const h = height / 100;
                const w = weight;
                const calculatedBmi = w / (h * h);
                setBmi(calculatedBmi.toFixed(2));

                if (calculatedBmi < 18.5) {
                  setMessage("You are underweight.");
                } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
                  setMessage("You have a normal weight.");
                } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
                  setMessage("You are overweight.");
                } else {
                  setMessage("You are obese.");
                }
              }}
            >
              Calculate BMI
            </button>

            <h2>Your BMI is: {bmi}</h2>
            <h3>{message}</h3>

            <button className="btn" onClick={reloadPage}>Reload</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
