import React from "react";
import img1 from "../../../assets/1.jpg";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import img4 from "../../../assets/4.jpg";
import img5 from "../../../assets/5.jpg";
import img6 from "../../../assets/6.jpg";
import img7 from "../../../assets/7.jpg";
import img8 from "../../../assets/8.jpg";
import img9 from "../../../assets/9.jpg";
import img10 from "../../../assets/10.jpg";
import img11 from "../../../assets/11.jpg";
import img12 from "../../../assets/12.jpg";
import img13 from "../../../assets/13.jpg";
import img14 from "../../../assets/14.jpg";
import img15 from "../../../assets/15.jpg";
import img16 from "../../../assets/16.jpg";
import img17 from "../../../assets/17.jpg";
import img23 from "../../../assets/23.jpg";

const Gallery = () => {
  return (
    <section className="my-4">
      <h1 className="text-2xl  sm:text-3xl p-4  md:text-4xl lg:text-6xl text-center font-semibold font-poppins capitalize">
        Gallery
      </h1>
      <hr className="border-b-2 sm:border-b-4 lg:border-b-8 w-16 mx-auto  border-purple-600" />
      <div className="mt-6 grid grid-cols-4 grid-rows-3 gap-2  rounded-lg w-4/5 mx-auto">
        <img
          src={img1}
          alt="galleryImg"
          className="h-full object-cover col-span-2 rounded-lg"
        />
        <img
          src={img2}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img3}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img4}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img5}
          alt="galleryImg"
          className="h-full object-cover row-span-2 col-span-2 rounded-lg"
        />
        <img
          src={img6}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img8}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img9}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img7}
          alt="galleryImg"
          className="h-full object-cover col-span-2 rounded-lg"
        />
        <img
          src={img10}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img11}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img12}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img13}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img23}
          alt="galleryImg"
          className="h-full object-cover col-span-2 rounded-lg"
        />
        <img
          src={img14}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
        <img
          src={img17}
          alt="galleryImg"
          className="h-full object-cover col-span-2 rounded-lg"
        />
        <img
          src={img16}
          alt="galleryImg"
          className="h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Gallery;
