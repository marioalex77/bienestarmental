import React from "react";
import i18n from "../i18n.js";
import { Suspense, useState } from "react";
import LocaleContext from "../LocaleContext.js";
import Header from "../sections/Header.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [locale, setLocale] = useState(i18n.language);
  function Loading() {
    return <>Loading...</>;
  }

  return (
    <>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<Loading />}>
          <header>
            <Header setLocale={setLocale} />
          </header>
          <main className="relative">
            <Outlet />
          </main>
        </Suspense>
      </LocaleContext.Provider>
    </>
  );
};

export default MainLayout;
