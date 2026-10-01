import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Experiment1 from "./Components/Experiment1";
import Experiment2 from "./Components/Experiment2";
import Experiment3 from "./Components/Experiment3";
import Experiment4 from "./Components/Experiment4";
import Experiment5 from "./Components/Experiment5";
import Experiment6 from "./Components/Experiment6";
import Experiment7 from "./Components/Experiment7";
import Experiment8 from "./Components/Experiment8";
import Experiment9 from "./Components/Experiment9";
import Experiment10 from "./Components/Experiment10";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header title="BISMILLAH" />

        <main className="experiment-area">
          <Routes>
            <Route path="/" element={<Experiment1 />} />

            <Route
              path="/experiment/1"
              element={<Experiment1 />}
            />

            <Route
              path="/experiment/2"
              element={<Experiment2 />}
            />

            <Route
              path="/experiment/3"
              element={<Experiment3 />}
            />

            <Route
              path="/experiment/4"
              element={<Experiment4 />}
            />

            <Route
              path="/experiment/5"
              element={<Experiment5 />}
            />

            <Route
              path="/experiment/6"
              element={<Experiment6 />}
            />

            <Route
              path="/experiment/7"
              element={<Experiment7 />}
            />

            <Route
              path="/experiment/8"
              element={<Experiment8 />}
            />

            {/* Experiment 9 has nested routes */}
            <Route
              path="/experiment/9/*"
              element={<Experiment9 />}
            />

            <Route
              path="/experiment/10"
              element={<Experiment10 />}
            />
          </Routes>
        </main>

        <Footer text="© 2026 React useState Demo | Built with React + Vite" />
      </div>
    </BrowserRouter>
  );
}

export default App;