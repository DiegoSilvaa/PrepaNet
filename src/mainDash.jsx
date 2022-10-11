import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './Dash.css';
import Sidenav from '/Components/Sidenav.jsx';
import Explore from "/Pages/Explore.jsx";
import Home from "/Pages/Home.jsx";
import Settings from "/Pages/Settings.jsx";
import Statistics from "/Pages/Statistics.jsx";
import Back from "/src/App.jsx"

function App() {
  return (
    <div className="App">
      <Sidenav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;