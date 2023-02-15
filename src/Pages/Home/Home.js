import React from "react";
import OurEvents from "../../components/OurEvents/OurEvents";
import ContactUs from "./ContactUs/ContactUs";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero/Hero";
import OurAchievement from "./OurAchievement/OurAchievement";
import OurVision from "./OurVision/OurVision";
import Stats from "./Stats/Stats";
import StayConnected from "./StayConnected/StayConnected";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurEvents />
      <OurAchievement />
      <Stats />
      <Gallery />
      <OurVision />
      <ContactUs />
      <StayConnected />
    </div>
  );
};

export default Home;
