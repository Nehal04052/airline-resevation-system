import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LandingPage } from "./pages/LandingPage";
import {FlightBookingFormComp} from "./components/FlightBookingFormComp";
import {FlightsPageComp} from "./components/FlightPageComp";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/flightsearch" element={<FlightBookingFormComp/>} />
      <Route path="/flights" element= {<FlightsPageComp/>} />
    </Routes>
  </Router>
  );
}

export default App;
