import React from "react";
import logofacebook from "../assets/img/icons/LogoFacebook.png";
import logoinstagram from "../assets/img/icons/logoinstagram.png";
import logotiktok from "../assets/img/icons/logotiktok.png";
import logowhatsapp from "../assets/img/icons/logoWhatsapp.png";
import logox from "../assets/img/icons/logox.png";
import logoyoutube from "../assets/img/icons/logoyoutube.png";

const SocialBar = () => {
  return (
    <div className="flex flex-row justify-center">
      <span>
        <img src={logofacebook} className="w-8" />
      </span>
      <span>
        <img src={logoinstagram} className="w-8" />
      </span>
      <span>
        <img src={logotiktok} className="w-8" />
      </span>
      <span>
        <img src={logowhatsapp} className="w-8" />
      </span>
      <span>
        <img src={logox} className="w-8" />
      </span>
      <span>
        <img src={logoyoutube} className="w-8" />
      </span>
    </div>
  );
};

export default SocialBar;
