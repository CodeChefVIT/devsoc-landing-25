import Prizes from "@/components/Prizes";
import React from "react";
import About from "@/components/About";
import TrackPage from "./track/page";
const Page = () => {
  return (
    <div>
      <About />
      <TrackPage />
      <About/>
      <Prizes/> 
    </div>

  );
};

export default Page;
