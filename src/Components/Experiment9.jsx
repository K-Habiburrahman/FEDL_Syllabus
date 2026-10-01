import { NavLink, Routes, Route } from "react-router-dom";
import "./Experiment9.css";

function Intro() {
  return (
    <div className="route-panel">
      <h3>React Router</h3>
      <p>
        Routes let a React application display different components for
        different URLs without a full page reload.
      </p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="route-panel">
      <h3>Dashboard Page</h3>
      <p>You are viewing the dashboard route.</p>
    </div>
  );
}

function About() {
  return (
    <div className="route-panel">
      <h3>About Page</h3>
      <p>
        This page demonstrates nested navigation using React Router.
      </p>
    </div>
  );
}

function Experiment9() {
  return (
    <section className="body-content exp9">
      <h2>9. Routing and Navigation using React Router</h2>

      <p>
        Use the links below to change routes while keeping the React
        application running.
      </p>

      <div className="router-demo">
        <nav className="inner-nav">
          <NavLink to="/experiment/9" end>
            Intro
          </NavLink>

          <NavLink to="/experiment/9/dashboard">
            Dashboard
          </NavLink>

          <NavLink to="/experiment/9/about">
            About
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </section>
  );
}

export default Experiment9;
