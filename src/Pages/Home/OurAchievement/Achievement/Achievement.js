import React, { useState } from "react";

const Achievement = ({ achievement }) => {
  const { img, date, title } = achievement;
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  return (
    <div className="bg-white flex flex-col rounded-lg relative">
      <div
        className="w-fit h-fit z-[0]"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <img src={img} alt="achievement" className="rounded-lg" />
      </div>
      <div
        className={`bg-gray-700/50 w-full p-8 h-full hover:block absolute z-[1] top-0 flex flex-col items-center justify-center ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <h2 className="text-white sm:text-xl md:text-2xl lg:text-3xl my-auto text-center text-lg font-poppins">
          {title}
        </h2>
        <p className="text-white sm:text-lg md:text-xl lg:text-2xl mt-4 text-center text-md font-poppins">
          Date- {date}
        </p>
      </div>
    </div>
  );
};

export default Achievement;
