import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Events = () => {
  const { name, description, gallery, title } = useLoaderData();
  console.log(gallery);
  return (
    <section className="my-4">
      <h1 className="text-2xl  sm:text-3xl p-4  md:text-4xl lg:text-6xl text-center font-semibold font-poppins capitalize">
        {name}
      </h1>
      <hr className="border-b-2 sm:border-b-4 lg:border-b-8 w-16 mx-auto  border-primary" />
      <div className="my-8 mx-4 lg:mx-16">
        <p className="">{description}</p>
      </div>
      <h2 className="my-8 text-center font-poppins text-4xl font-semibold">
        Works of {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-8">
        {gallery.map((image, index) => (
          <img
            src={image}
            alt="gallery"
            key={index}
            className="h-full object-cover"
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/donate"
          className="bg-primary inline-block px-8 py-4 text-center capitalize font-semibold font-poppins mx-auto rounded-lg my-4 text-white text-xl"
        >
          donate now
        </Link>
      </div>
    </section>
  );
};

export default Events;
