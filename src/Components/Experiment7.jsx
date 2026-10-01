import { useState } from "react";
import "./Experiment7.css";

function Experiment7() {
  const [items, setItems] = useState(["React", "JSX", "Props", "Hooks"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() === "") return;

    setItems([...items, newItem.trim()]);
    setNewItem("");
  };

  return (
    <section className="body-content exp7">
      <h2>7. Rendering Lists and Using Keys</h2>

      <p>
        React renders arrays with <code>map()</code>. Each item receives a
        stable <code>key</code>.
      </p>

      <div className="info-card list-card">
        <div className="add-item-container">
          <input
            type="text"
            placeholder="Enter item name"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />

          <button className="demo-button" onClick={addItem}>
            Add Item
          </button>
        </div>

        <ul>
          {items.map((item, index) => (
            <li key={`${item}-${index}`}>
              <span>{item}</span>
              <small>key: {index}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experiment7;