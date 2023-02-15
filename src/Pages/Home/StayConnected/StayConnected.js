import React from "react";
import { toast } from "react-hot-toast";

const StayConnected = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    // console.log(email);
    toast.success("Subscription added");
    event.target.reset();
  };
  return (
    <section className="my-4">
      <h1 className="text-2xl  sm:text-3xl p-4  md:text-4xl lg:text-6xl text-center font-semibold font-poppins capitalize">
        stay connected
      </h1>
      <hr className="border-b-2 sm:border-b-4 lg:border-b-8 w-16 mx-auto  border-primary" />
      <div className="my-6 mx-6 md:mx-auto text-primary">
        <p className="font-poppins text-center mb-4">
          Want to updated about our next campaign and projects?
        </p>
        <form onSubmit={handleSubscribe} className="text-center">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-4 py-[7px] border-primary border-[1px] md:border-r-0"
          />
          <input
            type="submit"
            value="subscribe"
            className="bg-primary px-4 py-2 text-white"
          />
        </form>
      </div>
    </section>
  );
};

export default StayConnected;
