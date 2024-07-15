import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="text-white pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        {/* <Spotlight className="-top-40 -left-10 md:-left-32 md:-top20 h-screen" fill="white"/> */}
      </div>
    </div>
  );
};

export default Hero;
