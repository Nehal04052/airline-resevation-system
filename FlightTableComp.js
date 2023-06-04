import React from "react";

const FlightTableComp = ({ flightsInfo }) => {
  if (!flightsInfo || (Array.isArray(flightsInfo) && flightsInfo.length === 0)) {
    return <div>No flight data available.</div>;
  }

  return (
    <table className="mt-0 w-full bg-white shadow-md rounded-lg">
      <thead>
        <tr className="bg-gradient-to-r from-cyan-800 to-blue-300 ...">
          <th className="py-3 px-6 font-bold text-1xl">Origin</th>
          <th className="py-3 px-6 font-bold text-1xl">Destination</th>
          <th className="py-3 px-6 font-bold text-1xl">Departure Time</th>
          <th className="py-3 px-6 font-bold text-1xl">Arrival Time</th>
          <th className="py-3 px-6 font-bold text-1xl">Flight Number</th>
          <th className="py-3 px-6 font-bold text-1xl">Airline</th>
          <th className="py-3 px-6 font-bold text-1xl">Total Fare</th>
          <th className="py-3 px-6 font-bold text-1xl">Seating Class</th>
          <th className="py-3 px-6 font-bold text-1xl">Duration</th>
          <th className="py-3 px-6 font-bold text-1xl">Stops</th>
          <th className="py-3 px-6 font-bold text-1xl">Stop 1</th>
          <th className="py-3 px-6 font-bold text-1xl">Stop 2</th>
          {/* Add more table headings based on your fetched data */}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(flightsInfo) ? (
          flightsInfo.map((flight, index) => (
            <tr key={flight.id} className={index % 2 === 0 ? "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..." : "bg-white"}>
              <td className="py-4 px-6">{flight.origin || " "}</td>
              <td className="py-4 px-6">{flight.destination || " "}</td>
              <td className="py-4 px-6">{flight.deptime || " "}</td>
              <td className="py-4 px-6">{flight.arrtime || " "}</td>
              <td className="py-4 px-6">{flight.flightno || " "}</td>
              <td className="py-4 px-6">{flight.airline || " "}</td>
              <td className="py-4 px-6 text-blue-600 font-semibold">₹{flight.Total_fare || " "}</td>
              <td className="py-4 px-6">{flight.seatingclass || " "}</td>
              <td className="py-4 px-6">{flight.duration || " "}</td>
              <td className="py-4 px-6">{flight.stops || " "}</td>
              <td className="py-4 px-6">{flight.stop1 || " "}</td>
              <td className="py-4 px-6">{flight.stop2 || " "}</td>
              {/* Add more table cells based on your fetched data */}
            </tr>
          ))
        ) : (
          <tr className="bg-gray-100">
            <td className="py-4 px-6">{flightsInfo.origin || " "}</td>
            <td className="py-4 px-6">{flightsInfo.destination || " "}</td>
            <td className="py-4 px-6">{flightsInfo.deptime || " "}</td>
            <td className="py-4 px-6">{flightsInfo.arrtime || " "}</td>
            <td className="py-4 px-6">{flightsInfo.flightno || " "}</td>
            <td className="py-4 px-6">{flightsInfo.airline || " "}</td>
            <td className="py-4 px-6 text-orange-300 font-semibold">₹{flightsInfo.Total_fare || " "}</td>
            <td className="py-4 px-6">{flightsInfo.seatingclass || " "}</td>
            <td className="py-4 px-6">{flightsInfo.duration || " "}</td>
            <td className="py-4 px-6">{flightsInfo.stops || " "}</td>
            <td className="py-4 px-6">{flightsInfo.stop1 || " "}</td>
            <td className="py-4 px-6">{flightsInfo.stop2 || " "}</td>
            {/* Add more table cells based on your fetched data */}
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default FlightTableComp;
