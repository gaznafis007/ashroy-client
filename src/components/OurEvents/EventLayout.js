import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

const EventLayout = ({ event, index }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        className={`flex justify-around items-center md:items-start my-16 px-6 mx-8 ${
          index > 0
            ? "flex-col md:flex-row-reverse"
            : "flex-col-reverse md:flex-row"
        }`}
      >
        <div
          className="w-full my-4 sm:my-0 p-4 sm:w-1/3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-3xl text-center font-semibold  sm:text-left text-primary">
            {event.name}
          </h2>
          <p className="my-6">
            {event.description.slice(0, 200) + "..."} <br />
          </p>
          <p className="mt-1 inline-block bg-primary px-4 py-3 rounded-md shadow-md text-white ">
            <Link to={`/events/${event._id}`}>আরো দেখুন</Link>
          </p>
        </div>
        <div
          className="w-full sm:w-1/3 shadow-xl rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {/* <p className="bg-white p-8 rounded-md shadow-lg">
            {event.description}
          </p> */}
          <img src={event.img} alt="img" className="w-full rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default EventLayout;
