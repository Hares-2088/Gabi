import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './Pages/HomePage';
import MyNavBar from "/Users/adembessam/Desktop/Projet personnel/gabi./src/Components/MyNavBar.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Albums from "./Pages/Albums";
import Footer from "./Pages/Footer";


export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        {/* <MyNavBar /> */}
        <Routes>

          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/albums" element={<Albums />} />

        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

