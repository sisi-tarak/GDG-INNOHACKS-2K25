import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HackathonPage from "./Components/GDG/HackathonPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HackathonPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
