import Music from "./components/Music";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicDetail from "./components/MusicDetail";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Music />} />
          <Route path="/detail/:id" element={<MusicDetail />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
