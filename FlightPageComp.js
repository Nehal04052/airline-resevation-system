import React from "react";
import { useLocation } from "react-router-dom";
import FlightTableComp from "./FlightTableComp";

export const FlightsPageComp = () => {
  const location = useLocation();
  const flightsInfo = location.state?.flightsInfo;

  console.log("flightsInfo:", flightsInfo);

  if (!flightsInfo || flightsInfo.length === 0) {
    return <div>No flight data available.</div>;
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-white bg-black py-2 mb-0">Flights</h1>

      <FlightTableComp flightsInfo={flightsInfo} className="mt-0" />
    </div>
  );
};
