import "./Experiment4.css";

function ProfileCard({ name, course, year }) {
  return <div className="profile-card"><h3>{name}</h3><p>Course: <strong>{course}</strong></p><p>Year: <strong>{year}</strong></p></div>;
}

function Experiment4() {
  return (
    <section className="body-content exp4">
      <h2>4. Component Composition and Props Handling</h2>
      <p>Props allow a parent component to pass data into reusable child components.</p>
      <div className="profile-grid">
        <ProfileCard name="Habiburrahman" course="Cybersecurity" year="3rd Year" />
        <ProfileCard name="Dnish" course="Information Technology" year="3rd Year" />
        <ProfileCard name="Naseem" course="Electronics" year="3rd Year" />
        <ProfileCard name="Riyaz" course="Computer Engineering" year="3rd Year" />
        <ProfileCard name="Faizan" course="Data Science" year="3rd Year" />
        <ProfileCard name="Hassan" course="Artificial Intelligence" year="3rd Year" />
      </div>
    </section>
  );
}
export default Experiment4;
