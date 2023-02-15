import React from "react";

const Donate = () => {
  return (
    <section className="my-4">
      <h1 className="text-2xl  sm:text-3xl p-4  md:text-4xl lg:text-6xl text-center font-semibold font-poppins capitalize">
        You can be one of us
      </h1>
      <hr className="border-b-2 sm:border-b-4 lg:border-b-8 w-16 mx-auto  border-primary" />
      <p className="my-6 text-xl mx-4 md:mx-20">
        Our foundation is a non profiting organization where we, try to make
        changes for the people who are still underprivileged. So, one of our
        fuel is your support towards them. You also can be our soldier to save
        them to be the reason of their smile.{" "}
        <span className="font-bold">By donating as much as you can.</span>
        <br />
        <span className="font-bold text-pink-500">
          Bkash no. 01837136906.
        </span>{" "}
        Our mobile banking payment gateway is coming very soon.
      </p>
    </section>
  );
};

export default Donate;
