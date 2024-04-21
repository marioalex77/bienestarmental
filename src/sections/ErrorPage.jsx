import React from "react";
import { useRouteError, Link } from "react-router-dom";
import headerLogo from "../assets/img/logo/LogoBienestarTransparent.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <section
      id="ErrorPage"
      className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-secundary-color-200"
    >
      <div id="notFound-page" className="text-center">
        <p className="text-base font-semibold text-indigo-600">
          {error.statusText}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Opps! Lo siento, ha ocurrido un error inesperado
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          <i>{error.statusText || error.message}</i>
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-default-color-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-default-color-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:default-color-700"
          >
            Ir al Inicio
          </Link>
          <Link to="#" className="text-sm font-semibold text-gray-900">
            Contacte a soporte <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
