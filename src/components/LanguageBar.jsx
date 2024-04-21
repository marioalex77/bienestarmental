import React from "react";
import flapes from "../assets/img/icons/flapes.jpg";
import flapusa from "../assets/img/icons/flapusa.png";
import i18n from "../i18n";

const LanguageBar = ({ setLocale }) => {
  i18n.on("languageChanged", (lng) => setLocale(lng));

  const handleLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-row justify-end">
      <span>
        <button className="w-8" value="es" onClick={handleLanguage}>
          <img className="w-8" src={flapes} />
        </button>
      </span>
      &nbsp;&nbsp;&nbsp;
      <span>
        <button className="w-8" value="en" onClick={handleLanguage}>
          <img src={flapusa} className="w-8" />
        </button>
      </span>
    </div>
  );
};

export default LanguageBar;
