import React from "react";
import { ButtonYellowComp } from "./ButtonYellowComp";
import FlyImage from "../assets/fly.jpeg";

export const ProfessionalExpComp = () => {
  return (
    <div className="h-[80%] px-20 py-[140px]">
      <div class="grid grid-cols-2 gap-5 h-[90%]">
        <div className="flex justify-center">
          <div
            className="bg-contain w-[250px] bg-no-repeat mt-[-60px]"
            style={{
              backgroundImage: `url("${FlyImage}")`,
            }}
          ></div>
        </div>
        <div>
          <div>
            <div className="mt-[-90px]">
             
              <p className="text-3xl mt-[-10px] py-3">
                We Are Very Reliable<br></br>
                <span className="text-[#3781c5] py-3">
                  {" "}
                  Professional, Experienced
                </span>
              </p>
            </div>
          </div>

          <p className="mt-[20px]">
          We pride ourselves on being the best choice for your travel needs. With our professional and experienced team, we strive to provide reliable and exceptional service. 
          </p>
          <p className="mt-[20px]">
          Whether you're planning a business trip or a vacation, we are committed to ensuring your journey is comfortable and hassle-free. Our attention to detail and dedication to customer satisfaction set us apart in the industry. Trust us to handle your travel arrangements with care and expertise.
          </p>
          <div className="flex">
            <ButtonYellowComp label={"Read More"} extraStyle={"mt-[20px]"} />
          </div>
        </div>
      </div>
    </div>
  );
};
