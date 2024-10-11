import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './Pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import Albums from "./Pages/Albums";


export default function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/albums" element={<Albums />} />

      </Routes>
    </Router>
  );
}

