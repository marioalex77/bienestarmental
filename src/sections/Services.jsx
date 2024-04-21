import React from "react";
import servicios from "../assets/img/servicios/servicios.jpg";
import { serviceItem } from "../constants/";
import ServiceItem from "../components/ServiceItem.jsx";

function Services() {
  return (
    <section
      id="services"
      className=" flexCenter overflow-hidden bg-default-color-200 bg-feature-bg bg-center bg-no-repeat py-8"
    >
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 flex-col lg:min-h-[900px] gap-3">
          <img
            src={servicios}
            alt="Nuestro servicios"
            width={440}
            height={900}
            className="feature-service"
          />
          <div className="text-service">
            <h2 className="text-[20px] font-[700] leading-[120%] lg:text-[55px] lg:font-[700] lg:leading-[120%] text-default-color-950">
              Nuestros servicios
            </h2>
          </div>
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[80%]">
          <div className="relative lg:hidden">
            <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] text-default-color-950">
              Nuestros servicios
            </h2>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceItem.map((item, i) => (
              <ServiceItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
