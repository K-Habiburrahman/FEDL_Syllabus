import { useState } from "react";
import "./Experiment5.css";

function Experiment5() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <section className="body-content exp5">
      <h2>5. State Management using useState Hook</h2>
      <p><code>useState</code> stores component state and updates the UI when state changes.</p>
      <div className="info-card state-card">
        <h3>Counter</h3><div className="counter">{count}</div>
        <button className="demo-button" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="demo-button" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="demo-button" onClick={() => setCount(0)}>Reset</button>
      </div>
      <div className="info-card">
        <h3>Live Input</h3>
        <input className="demo-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        <p>Hello, {name || "Guest"}!</p>
      </div>
    </section>
  );
}
export default Experiment5;
