import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutCompany from "../components/AboutCompany";

function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <AboutCompany />
    </div>
  );
}

export default Home;
