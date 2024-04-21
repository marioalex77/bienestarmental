import React from "react";
import PhoneBar from "../components/PhoneBar";
import SocialBar from "../components/SocialBar";
import LanguageBar from "../components/LanguageBar";

function TopBar({ setLocale }) {
  return (
    <div className="p-2 flex flex-row justify-between max-lg:block">
      <PhoneBar />
      <SocialBar />
      <LanguageBar setLocale={setLocale} />
    </div>
  );
}

export default TopBar;
