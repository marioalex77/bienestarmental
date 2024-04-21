import React from "react";
import Hero from "./Hero";
import Blog from "./Blog";
import Services from "./Services";
import CustomerReviews from "./CustomerReviews";
import Schedule from "./Schedule";
import GetApp from "./GetApp";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = ({ setLocale }) => {
  return (
    <>
      <Hero />
      <Services />
      <CustomerReviews />
      {/*<Schedule />
      <GetApp /> */}
      <Blog />
      {/*<AboutUs />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default Home;
