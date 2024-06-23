import React, { useState } from "react";
import { useNavigate, BrowserRouter as Router } from "react-router-dom";


import { InputTextComp } from "./InputTextComp";
import { IoIosAirplane, IoMdPerson, IoMdPeople } from "react-icons/io";
import { ButtonYellowComp } from "./ButtonYellowComp";

import axios from "axios";


export const FlightBookingFormComp = () => {
  const navigate = useNavigate();

  const [origin, setorigin] = useState("");
  const [destination, setDestination] = useState("");
  const [flightsData, setFlightsData] = useState([]);


  const options = Array.from({ length: 11 }, (_, i) => i);

  const travelClassOptions = ["Economy", "Premium", "Business"];

  const handleFindFlights = async () => {
    console.log("click");
    console.log("origin:", origin);
    console.log("destination:", destination);
    if (origin && destination) {
      try {
        const response = await axios.get('http://localhost:3002/api/flights', {
          params: {
            origin: origin,
            destination: destination,
          },
        });
        console.log(response.data);

        const flightsInfo = response.data.map((flight) => ({
          id: flight.id,
          origin: flight.origin,
          destination: flight.destination,
          deptime: flight.deptime,
          arrtime: flight.arrtime,
          flightno: flight.flightno,
          airline: flight.airline,
          Total_fare: flight.Total_fare,
          seatingclass: flight.seatingclass,
          duration: flight.duration,
          stops: flight.stops,
          stop1: flight.stop1,
          stop2: flight.stop2,
          // Include any other relevant information needed on the flights page
        }));
        //setFlightsData(response.data);
        // Navigate to the flights page with the flight data
        //navigate("/flights", { state: response.data });
        console.log("flightsInfo:", flightsInfo);
        navigate("/flights", { state: { flightsInfo: flightsInfo } });

      } catch (error) {
        console.error(error);
      }
    }
  };


  return (

    <div className="bg-white pb-5  w-[35%] h-[85%] rounded-3xl absolute bottom--10 shadow shadow-gray-300">
      <div className="p-2">
        <p className="font-semibold">
          Book Affordable <span className="text-yellow-400">Flights</span>
        </p>
      </div>
      <div className="flex bg-black text-white justify-center py-3">
        <div className="flex">
          <input
            className="text-white"
            type="radio"
            id="oneWay"
            name="flightType"
            value="oneWay"
          />
          <label htmlFor="oneWay" className="text-sm ml-3">
            One Way
          </label>
        </div>
        <div className="flex ml-3">
          <input
            className="text-white"
            type="radio"
            id="roundTrip"
            name="flightType"
            value="roundTrip"
          />
          <label htmlFor="roundTrip" className="text-sm ml-3 text-yellow-400">
            Round Trip
          </label>
        </div>

      </div>
      <div className="p-5">
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder="Enter City"
          label="Departure"
          extraStyle="mb-2"
          value={origin}
          onChange={(e) => setorigin(e.target.value)}
        />

        <InputTextComp
          image={<IoIosAirplane />}
          placeholder="Enter City"
          label="Destination"
          extraStyle="mt-2 mb-2"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <input
          type="date"
          placeholder="Select Date"
          className="border border-gray-300 rounded-md px-3 py-2 mt-2 mb-2  w-full"
        />
        <div className="flex mt-2">
          <IoMdPerson className="mt-2" />
          <label htmlFor="adults" className="ml-3">
            Adults
          </label>
          <select
            id="adults"
            className="border border-gray-300 rounded-md px-3 py-2 ml-24"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex mt-2">
          <IoMdPeople className="mt-1" />
          <label htmlFor="children" className="ml-3">
            Children
          </label>
          <select
            id="children"
            className="border border-gray-300 rounded-md px-3 py-2 ml-20"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex mt-2">
          <IoIosAirplane className="mt-1" />
          <label htmlFor="travelClass" className="ml-3">
            Travel Class
          </label>
          <div className="ml-2 flex items-center">
            {travelClassOptions.map((option) => (
              <div key={option} className="flex items-center mr-2">
                <input
                  type="radio"
                  id={option}
                  name="travelClass"
                  value={option}
                />
                <label htmlFor={option} className="ml-2">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4">
        <button onClick={handleFindFlights}><ButtonYellowComp label="FIND FLIGHTS" extraStyle="mt-1 text-sm" /></button>
      </div>
    </div>

  );
};
