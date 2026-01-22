import React from "react";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

function Home() {
  return (
    <>
      <Landing />
      <Highlights />
      <Features />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;
