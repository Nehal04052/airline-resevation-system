import React from "react";

<<<<<<< HEAD
export const InputTextComp = ({ image, placeholder, label, extraStyle }) => {
=======
export const InputTextComp = ({ image, placeholder, label, extraStyle, value, onChange }) => {
>>>>>>> cac2b9d (version 2 (back end))
  return (
    <div className={`flex border border-gray-300 px-3 py-3 ${extraStyle}`}>
      <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
        {image}
      </div>
      <input
        className="ml-3 outline-none border-none text-sm w-full"
        placeholder={placeholder}
<<<<<<< HEAD
=======
        value={value}
        onChange={onChange}
>>>>>>> cac2b9d (version 2 (back end))
      />
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
};
