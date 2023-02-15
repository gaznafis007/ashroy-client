import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary p-10 flex flex-col md:flex-row justify-around">
      <div className="text-white">
        <h1 className="text-6xl font-bold">আশ্রয়</h1>
        <p className="text-3xl font-semibold font-poppins mt-4 capitalize">
          the helping hand
        </p>
        <p className="text-base mt-3 capitalize text-white font-poppins">
          {" "}
          &copy; all rights reserve to Ashroy made by gazi nafis rafi
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8 md:mt-0">
        <a href="https://www.facebook.com/help.ashroy">
          <FaFacebook className="text-2xl text-white" />
        </a>
        <a href="#">
          <FaInstagram className="text-2xl text-white" />
        </a>
        <a href="#">
          <FaLinkedin className="text-2xl text-white" />
        </a>
        <a href="#">
          <FaTwitter className="text-2xl text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
