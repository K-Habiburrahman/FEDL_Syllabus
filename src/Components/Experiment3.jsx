import "./Experiment3.css";

function Greeting({ name }) {
  return <div className="component-box"><h3>Hello, {name}!</h3><p>This is a reusable functional component written with JSX.</p></div>;
}

function Experiment3() {
  return (
    <section className="body-content exp3">
      <h2>3. Creating Functional Components using JSX</h2>
      <p>JSX lets us describe the UI using JavaScript expressions and HTML-like syntax.</p>
      <div className="info-card">
        <Greeting name="React Developer" />
        <Greeting name="Student" />
      </div>
    </section>
  );
}
export default Experiment3;
