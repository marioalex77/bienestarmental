import React from "react";

import phoneicon from "../assets/img/icons/phoneicon.png";
import mobileicon from "../assets/img/icons/mobilelogo.png";
import emailicon from "../assets/img/icons/emailicon.png";
import { useTranslation } from "react-i18next";
import { phonebarLinks } from "../constants";

const PhoneBar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row gap-3">
      <div className="flex justify-normal">
        <span>
          <img src={phoneicon} className="w-8" />
        </span>
        <span className="text-base md:text-xm text-[#fec870] p-1">
          <a href={phonebarLinks[0].link}>{t("phonebar.phone")}</a>
        </span>{" "}
      </div>
      <div className="flex justify-normal">
        <span>
          <img src={mobileicon} className="w-8" />
        </span>
        <span className="text-base md:text-xm text-[#fec870] p-1">
          <a href={phonebarLinks[1].link}>{t("phonebar.mobile")}</a>
        </span>{" "}
      </div>
      <div className="flex justify-normal">
        <span>
          <img src={emailicon} className="w-8" />
        </span>
        <span className="text-base md:text-xm text-[#fec870] p-1">
          <a href={phonebarLinks[2].link}>{t("phonebar.email")}</a>
        </span>
      </div>
    </div>
  );
};

export default PhoneBar;
