import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import MockUp from "../components/MockUp";
import InfoSections from "../components/InfoSections";
import Team from "../components/Team";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <MockUp />
      <InfoSections />
      <Team />
      <Footer />
    </div>
  );
}

export default HomePage;
