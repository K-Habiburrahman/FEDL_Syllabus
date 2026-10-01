import "./Experiment1.css";

function Experiment1() {
  return (
    <section className="body-content exp1">
      <h2>1. Setting Up React Environment and Creating First Application</h2>
      <p>Welcome to the React experiments. This page is the first application created with React and Vite.</p>
      <div className="info-card">
        <h3>Hello, React!</h3>
        <p>The application is rendered through <code>ReactDOM.createRoot()</code> and organized into reusable components.</p>
        <div className="info-card component-box">

          <div>
            <code>npm create vite@latest my_react_app_for_FEDL -- --template react <hr />
              cd my_react_app_for_FEDL<hr />
              npm install<hr />
              npm run dev
            </code>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Experiment1;
