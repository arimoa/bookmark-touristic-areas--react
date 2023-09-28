import React from "react";
import Header from "./Header";
import TouristicPlaces from "./TouristicPlaces";
import About from "./About";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <TouristicPlaces />
    </React.Fragment>
  );
};

export default Home;
