import React from "react";

const Button = ({ type, title, icon, variant, fontcolor }) => {
  return (
    <>
      <button
        className={`flex gap-3 rounded-full border ${variant} p-3`}
        type={type}
      >
        {icon && <img src={icon} alt={title} width={24} height={24} />}
        <label className={`bold-16 whitespace-nowrap ${fontcolor}`}>
          {title}
        </label>
      </button>
    </>
  );
};

export default Button;
