import React from "react";

const ConfirmationPage = ({ selectedFlight }) => {
  return (
    <div className="max-w mx-auto bg-blue-100 text-gray-800 shadow-md p-6">
    <div className="max-w-xl mx-auto bg-blue-200 text-gray-800 shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Flight Details:</h2>
      <p>
        <span className="font-bold text-blue-600">Origin:</span>{" "}
        {selectedFlight.origin}
      </p>
      <p>
        <span className="font-bold text-blue-600">Destination:</span>{" "}
        {selectedFlight.destination}
      </p>
      <p>
        <span className="font-bold text-blue-600">Departure Time:</span>{" "}
        {selectedFlight.deptime}
      </p>
      <p>
        <span className="font-bold text-blue-600">Arrival Time:</span>{" "}
        {selectedFlight.arrtime}
      </p>
      <p>
        <span className="font-bold text-blue-600">Flight Number:</span>{" "}
        {selectedFlight.flightno}
      </p>
      <p>
        <span className="font-bold text-blue-600">Airline:</span>{" "}
        {selectedFlight.airline}
      </p>
      <p>
        <span className="font-bold text-blue-600">Total Fare:</span> ₹
        {selectedFlight.Total_fare}
      </p>
      <p>
        <span className="font-bold text-blue-600">Seating Class:</span>{" "}
        {selectedFlight.seatingclass}
      </p>
      <p>
        <span className="font-bold text-blue-600">Duration:</span>{" "}
        {selectedFlight.duration}
      </p>
      <p>
        <span className="font-bold text-blue-600">Stops:</span>{" "}
        {selectedFlight.stops}
      </p>
      <p>
        <span className="font-bold text-blue-600">Stop 1:</span>{" "}
        {selectedFlight.stop1}
      </p>
      <p>
        <span className="font-bold text-blue-600">Stop 2:</span>{" "}
        {selectedFlight.stop2}
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Passenger Information:</h2>
      {/* Add passenger information fields here */}

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Booking Reference/Confirmation Number:
      </h2>
      {/* Add booking reference field here */}

      <h2 className="text-2xl font-bold mt-8 mb-4">Payment Information:</h2>
      {/* Add payment information fields here */}

      <h2 className="text-2xl font-bold mt-8 mb-4">Itinerary:</h2>
      {/* Add itinerary details here */}

      <h2 className="text-2xl font-bold mt-8 mb-4">Baggage Allowance:</h2>
      <p>
        Carry-On: 1 piece, maximum 7 kg
        <br />
        Checked Baggage: 2 pieces, maximum 23 kg each
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Additional Services:</h2>
      <p>
        In-Flight Meal: Yes
        <br />
        Seat Selection: Included
        <br />
        Wi-Fi: Available
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Cancellation and Change Policies:
      </h2>
      <p>
        Cancellation: Free cancellation within 24 hours of booking. Fees apply
        after that.
        <br />
        Change: Changes allowed with applicable fees.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information:</h2>
      <p>
        Email: example@example.com
        <br />
        Phone: +1 123-456-7890
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Terms and Conditions:</h2>
      <p>
        Please read and accept the terms and conditions before proceeding with
        the booking.
      </p>
    </div>
    </div>
  );
};

export default ConfirmationPage;
