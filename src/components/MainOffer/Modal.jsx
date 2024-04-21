import React from "react";
import MainOffer from "./MainOffer";
import styles from "./modal.module.css";
import Backdrop from "./Backdrop";

const Modal = ({ containerId, children, handleClose }) => {
  return (
    <MainOffer containerId={containerId}>
      {/* <Backdrop containerId="backdrop" handleClose={handleClose} /> */}
      <div className={styles.modal}>
        <button
          className="absolute h-10 w-10 text-white font-[bold] text-[28px] flex flex-col items-center rounded-[50%] border-[none] left-1 top-1 bg-third-color-800 outline-white"
          onClick={handleClose}
        >
          X
        </button>
        <div className="bg-default-color-900 text-white flex items-center justify-center text-[20px]">
          {children}
        </div>
        <button
          className="rounded-full py-3 px-6 text-white bg-third-color-500 hover:bg-secundary-color-400 p-3 aling-middle"
          width={100}
        >
          Agendar
        </button>
      </div>
    </MainOffer>
  );
};

export default Modal;
