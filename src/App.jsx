import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Promise from "./components/Promise";
import AwardsSection from "./components/AwardSection";
import CreateSection from "./components/CreateSection";
import Testomonials from "./components/Testomonials";
import Solution from "./components/Solution";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Promise />
      <AwardsSection />
      <CreateSection />
      <Testomonials />
      <Solution />
      <Cards />
      <Footer />
    </>
  );
}

export default App;

