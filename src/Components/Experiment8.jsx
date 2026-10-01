import { useEffect, useState } from "react";
import "./Experiment8.css";

function Experiment8() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Effect runs once when the component is mounted
    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup runs when the component is unmounted
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="body-content exp8">
      <h2>8. Lifecycle Management using useEffect Hook</h2>

      <p>
        The <code>useEffect()</code> Hook is used to perform side effects
        after rendering. This example starts a timer when the component
        mounts and cleans it up when the component unmounts.
      </p>

      <div className="info-card timer-card">
        <h3>Component has been mounted for</h3>

        <div className="timer">
          {seconds}s
        </div>

        <p style={{ color: "darkgreen" }}>
          The interval is created inside <code>useEffect()</code> and is
          cleaned up when the component unmounts.
        </p>
      </div>
    </section>
  );
}

export default Experiment8;