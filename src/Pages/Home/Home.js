import React from "react";
import OurEvents from "../../components/OurEvents/OurEvents";
import ContactUs from "./ContactUs/ContactUs";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero/Hero";
import OurAchievement from "./OurAchievement/OurAchievement";
import Stats from "./Stats/Stats";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurEvents />
      <OurAchievement />
      <Stats />
      <Gallery />
      <ContactUs />
    </div>
  );
};

export default Home;
