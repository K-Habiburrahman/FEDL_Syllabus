import "./Experiment2.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Experiment2() {
  return (
    <>
      {/* Body */}
      <main className="body-content">
        <h2 className="text-center mb-5">
          2. My first React application using Vite and Bootstrap.
        </h2>

        {/* Bootstrap Button */}
        <section className="mb-5">
          <h2>Bootstrap Button</h2>
          <button className="btn btn-success me-2">Click Me</button>
          <button className="btn btn-outline-secondary">Secondary</button>
        </section>

        {/* Bootstrap Cards */}
        <section className="mb-5">
          <h2>Bootstrap Cards</h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
            <div className="col">
              <div className="card custom-card h-100">
                <div className="card-body">
                  <h5 className="card-title">Button</h5>
                  <p className="card-text">Bootstrap provides ready-made buttons.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card custom-card h-100">
                <div className="card-body">
                  <h5 className="card-title">Card</h5>
                  <p className="card-text">Cards are useful for displaying content.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card custom-card h-100">
                <div className="card-body">
                  <h5 className="card-title">Grid</h5>
                  <p className="card-text">Bootstrap uses a 12-column responsive grid.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card custom-card h-100">
                <div className="card-body">
                  <h5 className="card-title">Alert</h5>
                  <p className="card-text">Alerts highlight important messages.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card custom-card h-100">
                <div className="card-body">
                  <h5 className="card-title">Badge</h5>
                  <p className="card-text">Badges display labels and notification counts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Extra Bootstrap Examples */}
        <section className="mb-5">
          <h2>Bootstrap Alert</h2>
          <div className="alert alert-success" role="alert">
            Bootstrap is successfully integrated with React!
          </div>
        </section>

        <section>
          <h2>Bootstrap Badges</h2>
          <span className="badge bg-success me-2">Success</span>
          <span className="badge bg-warning text-dark me-2">Warning</span>
          <span className="badge bg-info text-dark">Info</span>
        </section>
      </main>
    </>
  );
}
export default Experiment2;
