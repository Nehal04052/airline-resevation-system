import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LandingPage } from "./pages/LandingPage";
import {FlightBookingFormComp} from "./components/FlightBookingFormComp";
import {FlightsPageComp} from "./components/FlightPageComp";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/flightsearch" element={<FlightBookingFormComp/>} />
      <Route path="/flights" element= {<FlightsPageComp/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
    </Routes>
  </Router>
  );
}

export default App;
