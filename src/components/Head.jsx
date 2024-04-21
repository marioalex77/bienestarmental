import React from "react";

import Nav from "./Nav";
import TopBar from "../sections/TopBar";

const Head = ({ setLocale }) => {
  return (
    <>
      <section className="xl:padding-0 wide:padding-r bg-[#0b4d87]">
        <TopBar setLocale={setLocale} />
      </section>
      <Nav />
    </>
  );
};

export default Head;
