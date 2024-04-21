import React from "react";
import { Link } from "react-router-dom";

const Blogitem = ({ content }) => {
  return (
    <div className="container mx-auto lg:px-12 md:px-8 px-4 py-10">
      <div className="card bg-default-color-200 p-4 rounded-lg flex md:flex-row flex-col gap-5">
        <div className="image my-auto">
          <img
            src={content.blogImage}
            alt={content.blogTitle}
            className="h-auto"
            width={400}
            height={150}
          />
        </div>
        <div className="other">
          <div className="tag">
            <ul className="flex">
              <li>
                <a
                  href=""
                  className="border-2 border-solid border-defaul-color-300 text-sm rounded-full px-3 py-[2px]"
                >
                  Asistencia
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="border-2 border-solid border-defaul-color-300 text-sm rounded-full px-3 py-[2px]"
                >
                  Psicologia
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="border-2 border-solid border-defaul-color-300 text-sm rounded-full px-3 py-[2px]"
                >
                  Vocacion
                </a>
              </li>
            </ul>
          </div>
          <div className="header">
            <h3 className="font-medium text-lg">{content.blogTitle}</h3>
            <p className="py-1 text-sm text-gray-700">{content.blogSummary}</p>
          </div>
          <div className="author flex py-3 gap-10 p-0">
            <div className="m-0">
              <Link
                to={content.blogLink}
                className="bg-third-color-500 text-white rounded-md p-3 mr-3"
              >
                Leer
              </Link>
            </div>
            <div className="head flex flex-col items-center m-0">
              <span className="text-gray-800 font-semibold text-sm">
                Yesenia Guzman
              </span>
              <span className="text-gray-400 text-sm">16 - Abril -2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogitem;
