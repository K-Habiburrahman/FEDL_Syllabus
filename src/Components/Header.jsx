import { NavLink } from "react-router-dom";
import "./Header.css";

const experiments = [
  ["1", "React Setup"],
  ["2", "Bootstrap"],
  ["3", "JSX Components"],
  ["4", "Props"],
  ["5", "useState"],
  ["6", "Events"],
  ["7", "Lists"],
  ["8", "useEffect"],
  ["9", "Routing"],
  ["10", "API"],
];

function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>

      <nav className="experiment-nav" aria-label="React experiments">
        {experiments.map(([number]) => (
          <NavLink
            key={number}
            to={number === "1" ? "/" : `/experiment/${number}`}
            end={number === "1"}
            className={({ isActive }) =>
              `nav-link experiment-tab ${isActive ? "active" : ""}`
            }
          >
            <span className="tab-number">{number}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
