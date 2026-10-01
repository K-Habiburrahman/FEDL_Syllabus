import { useState } from "react";

import "./Experiment6.css";

function Experiment6() {
  const [message, setMessage] = useState("Waiting for an event...");
  const [value, setValue] = useState("");

  const handleClick = () =>
    setMessage("Button click event handled successfully!");

  return (
    <section className="body-content exp6">
      <h2>6. Event Handling and Conditional Rendering</h2>

      <p>
        React event handlers respond to user actions such as clicks
        and form input.
      </p>

      <div className="info-card">
        <h3>Click Event</h3>

        <button
          className="demo-button"
          onClick={handleClick}
        >
          Click Me
        </button>

        <p className="event-message">
          {message}
        </p>
      </div>

      <div className="info-card">
        <h3>Conditional Rendering</h3>

        <input
          className="demo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
        />

        {value ? (
          <p className="success">
            You entered: {value}
          </p>
        ) : (
          <p className="hint">
            Nothing entered yet.
          </p>
        )}

        <p className="success">
          Assalamualikum, {value}
        </p>
      </div>
    </section>
  );
}

export default Experiment6;