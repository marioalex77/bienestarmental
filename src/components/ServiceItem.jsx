import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const ServiceItem = ({ item }) => {
  return (
    <li className="h-full flex justify-center items-center">
      <div className="bg-secundary-color-200 hover:bg-white border border-default-color-600 border-opacity-10 rounded-md shadow-xl cursor-pointer">
        <div className="px-6 py-12 border-b-2 border-gray-200 text-default-color-900">
          <div className="flex  justify-center items-center gap-3">
            <div>
              <img
                src={item.serviceIcon}
                alt="map"
                width={125}
                height={125}
                className="rounded-full"
              />
            </div>
            <div className="text-2xl font-semibold text-center mb-4">
              {item.serviceTitle}
            </div>
          </div>
          <div className="flex  justify-center items-center">
            <div className="flex items-start">
              <div className="text-3xl font-medium">$</div>
              {item.servicePrice > 0 ? (
                <div className="text-4xl font-bold">{item.servicePrice}</div>
              ) : (
                <div className="text-4xl font-bold">Neg.</div>
              )}
            </div>
            <div className="text-2xl text-gray-400">/ {item.serviceUnit}</div>
          </div>
        </div>
        <div className="p-12 text-default-color-800">
          <ul className="space-y-3">
            {item.serviceDescription.map((description, i) => (
              <li key="i" className="flex items-center space-x-4">
                <CheckIcon className="w-6 h-6 flex-shrink-0" />
                <p className="text-lg">{description.feature}</p>
              </li>
            ))}
          </ul>
          <button className="mt-12 w-full rounded-full text-white bg-third-color-500 hover:bg-secundary-color-400 p-3 text-lg whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition-all">
            {item.serviceAccion}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ServiceItem;
