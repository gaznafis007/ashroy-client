import React from "react";
import img from "../../../assets/17.jpg";

const OurVision = () => {
  return (
    <section className="my-4">
      <h1 className="text-2xl  sm:text-3xl p-4  md:text-4xl lg:text-6xl text-center font-semibold font-poppins capitalize">
        Our Vision
      </h1>
      <hr className="border-b-2 sm:border-b-4 lg:border-b-8 w-16 mx-auto  border-primary" />
      <div className="flex flex-col md:flex-row items-center justify-between relative mt-8 gap-8 mx-10">
        <div className="w-full md:w-1/2 shadow-lg p-12">
          <p className="text-xl font-poppins">
            We, <span className="font-bold">Ashroy</span> trying to make the
            change and make a smile to the people who are still living the
            underprivileged area. Our vision is to make everyone living happily
            with their surroundings and never feel economically degraded. And
            we, try to spread our happiness all over the world.
          </p>
        </div>
        <div className="w-full mt-4 md:w-1/2 rounded-lg">
          <img src={img} alt="" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
