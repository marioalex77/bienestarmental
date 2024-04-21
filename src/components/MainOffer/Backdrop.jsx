import React from "react";
import MainOffer from "./MainOffer";

const Backdrop = ({ Id, handleClose }) => {
  return (
    <MainOffer containerId={Id}>
      <div
        className="fixed top-0 left-0 w-full h-dvh bg-secundary-color-200 bg-opacity-75 z-10 text-default-color-900"
        onClick={handleClose}
      ></div>
    </MainOffer>
  );
};

export default Backdrop;
