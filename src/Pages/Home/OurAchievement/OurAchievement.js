import React, { useEffect, useState } from "react";
import Achievement from "./Achievement/Achievement";
import "aos/dist/aos.css";
import Aos from "aos";

const OurAchievement = () => {
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/achievements")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAchievements(data);
      });
  }, []);
  return (
    <section className="my-4">
      <h1 className="text-2xl  sm:text-3xl p-4  md:text-4xl lg:text-6xl text-center font-semibold font-poppins capitalize">
        our Achievements
      </h1>
      <hr className="border-b-2 sm:border-b-4 lg:border-b-8 w-16 mx-auto  border-primary" />
      <div className="grid mt-6 grid-cols-1 md:grid-cols-2 gap-8 mx-16 place-content-center">
        {achievements.map((achievement) => (
          <Achievement
            achievement={achievement}
            key={achievement._id}
          ></Achievement>
        ))}
      </div>
    </section>
  );
};

export default OurAchievement;
