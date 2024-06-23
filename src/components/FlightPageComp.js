import React from "react";
import { useLocation } from "react-router-dom";
import FlightTableComp from "./FlightTableComp";
import { ContactUsComp } from "./ContactUsComp";
import { FooterComp } from "./FooterComp";
import {HeaderNavComp} from "./HeaderNavComp";

export const FlightsPageComp = () => {
  const location = useLocation();
  const flightsInfo = location.state?.flightsInfo;

  console.log("flightsInfo:", flightsInfo);

  if (!flightsInfo || flightsInfo.length === 0) {
    return <div>No flight data available.</div>;
  }

  return (
    <div>
      
      <ContactUsComp />
      
      <HeaderNavComp currentPage="flight" />
      
      <FlightTableComp flightsInfo={flightsInfo} className="mt-0" />
      <FooterComp />
    </div>
  );
};
