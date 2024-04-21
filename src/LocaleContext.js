import { createContext } from "react";

const defaulValue = {
  locale: "es",
  setLocale: () => {},
};

export default createContext(defaulValue);
