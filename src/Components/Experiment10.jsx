import { useEffect, useState } from "react";
import "./Experiment10.css";

function Experiment10() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to fetch data");
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="body-content exp10">
      <h2>10. API Integration and Data Handling</h2>
      <p>This experiment fetches sample JSON data from an external API and renders it as a list.</p>
      <div className="info-card">
        {loading && <p className="status">Loading data...</p>}
        {error && <p className="error">Error: {error}</p>}
        {!loading && !error && (
          <div className="api-list">{posts.map((post) => <article key={post.id}><span>{post.id}</span><div><h3>{post.title}</h3><p>{post.body}</p></div></article>)}</div>
        )}
      </div>
    </section>
  );
}
export default Experiment10;
