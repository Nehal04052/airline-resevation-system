import React from "react";
import { LOWEST_FARE_LIST } from "../constants/AppConstants";
import { ButtonYellowComp } from "./ButtonYellowComp";

export const LowestFareComp = () => {
  return (
    <div className="relative h-[80%] px-20 py-20 bg-[#1a63a8]">
      <p className="text-sm text-center text-white absolute top-[8%] left-1/2 transform -translate-x-1/2 ">CURRENT FARE</p>
      <p className="text-3xl mt-1 text-center text-white absolute top-[15%] left-1/2 transform -translate-x-1/2">
        Today's Lowest Fare
      </p>
      <div className="flex absolute top-[60%] left-[20%] transform -translate-y-1/2">
        {LOWEST_FARE_LIST.map((item) => {
          return (
            <div
              key={`lowest-fare-${item.id}`}
              className="bg-white px-5 py-5 text-center mr-5 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                className="h-[150px] w-[150px] rounded-lg"
              />
              <p className="mt-2 font-semibold">{item.heading}</p>
              <p className="text-sm">
                <span className="text-gray-400">Starting from</span>{" "}
                <spn className="text-red-400 font-semibold">{item.price}</spn>
              </p>
              <ButtonYellowComp label={"CHECK OUT NOW"} extraStyle={"mt-5"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
