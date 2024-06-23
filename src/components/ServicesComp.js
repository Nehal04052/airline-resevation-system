import React from "react";
import CoinImage from "../assets/coin.png";

const ServiceItems = ({ title, description }) => {
  return (
    <div className="mt-5">
      <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
        <img src={CoinImage} className="w-[20px] h-[20px]" alt="Coin" />
      </div>
      <p className="text-black text-lg mt-2">{title}</p>
      <div className="w-[200px] mt-1">
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export const ServicesComp = () => {
  const serviceItems = [
    {
      title: "Price Beating Guarantee",
      description:
        "Our Price Beating Guarantee ensures that you always get the best possible prices for your travel needs.",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated customer support team is available 24/7 to assist you with any queries or concerns you may have.",
    },
    {
      title: "Flexible Cancellation Policy",
      description:
        "We understand that plans may change, and that's why we offer a flexible cancellation policy.",
    },
    {
      title: "Wide Selection of Destinations",
      description:
        "Discover new destinations and create memorable experiences with our diverse range of travel offerings.",
    },
    {
      title: "Secure Payment Options",
      description:
        "We prioritize the security of your payment information. Our platform offers secure payment options to ensure that your transactions are safe and protected.",
    },
  ];

  return (
    <div className="h-[80%] px-20 py-20">
      <div className="grid grid-cols-2 gap-2 h-[90%]">
        <div>
          <p className="text-sm">BEST CHOICE</p>
          <p className="text-3xl mt-1">
            Why Should<br />
            You Use
            <span className="text-[#3781c5]">
              {" "}
              Our <br />
              Services
            </span>
          </p>
          {serviceItems.slice(0, 1).map((item, index) => (
              <ServiceItems
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
        <div>
          <div className="flex justify-between mt-[-90px] py-10">
            {serviceItems.slice(1, 3).map((item, index) => (
              <ServiceItems
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="flex justify-between mt-[-50px]">
            {serviceItems.slice(3, 5).map((item, index) => (
              <ServiceItems
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
