import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="my-4">
      <h1 className="text-2xl  sm:text-3xl p-4  md:text-4xl lg:text-6xl text-center font-semibold font-poppins capitalize">
        Our stats
      </h1>
      <hr className="border-b-2 sm:border-b-4 lg:border-b-8 w-16 mx-auto  border-purple-600" />
      <div className="grid mx-8 grid-cols-1 md:grid-cols-3 my-8 shadow-xl rounded-lg place-content-center font-poppins">
        <div className="p-10 text-center  border-b-2 md:border-b-0  md:border-r-2 border-primary">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">
            <CountUp start={0} end={8} duration={1} delay={5}></CountUp>+
          </h2>
          <p className="mt-3 capitalize">main event</p>
        </div>
        <div className="p-10 text-center border-b-2 md:border-b-0 md:border-r-2 border-primary">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">
            <CountUp start={0} end={1000} duration={1} delay={5}></CountUp>+
          </h2>
          <p className="mt-3 capitalize">people helped</p>
        </div>
        <div className="p-10 text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">
            <CountUp start={0} end={200000} duration={1} delay={5}></CountUp>+
          </h2>
          <p className="mt-3 capitalize">funding raised</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
