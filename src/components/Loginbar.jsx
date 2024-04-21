import React from "react";
import Button from "./Button";
import usericon from "../assets/img/icons/usericon.png";

const Loginbar = () => {
  return (
    <div className="lg:flex justify-center gap-5 hidden">
      <span>
        <Button
          type="button"
          title="Ingresar"
          icon={usericon}
          variant="bg-default-color-700"
          fontcolor="text-white"
        />
      </span>
      <span>
        <Button
          type="button"
          title="Registrarme"
          variant="bg-default-color-700"
          fontcolor="text-white"
        />
      </span>
    </div>
  );
};

export default Loginbar;
