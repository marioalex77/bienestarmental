import React from "react";
import HeroCarousel from "../components/Hero/HeroCarousel";

const OPTIONS = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Hero() {
  return (
    <section id="Home" className="bg-transparent">
      <HeroCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}

export default Hero;
