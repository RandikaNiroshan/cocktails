import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HTTP_STATUS } from "../app/utils/constants";
import { Logo } from "../components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const loading = useSelector((state) => state.initial.loading);
  const categories = useSelector((state) => state.initial.categoriesList);
  const alcoholic = useSelector((state) => state.initial.alcoholicList);

  return (
    <footer className="bg-app-cadet w-full h-auto">
      {loading === HTTP_STATUS.FULFILLED && (
        <div className="flex justify-evenly px-20 py-10">
          <div className="flex-[3] flex flex-col">
            <Logo alt={true} />
            <div className="flex gap-1 mx-1 mb-2 mt-3 w-full justify-start">
              <a
                href="https://facebook.com/RandikaNiroshan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="w-5 h-5 text-white shadow-sm hover:text-app-flame hover:animate-expand hover:cursor-pointer" />
              </a>
              <a
                href="https://twitter.com/RandikaNiroshan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare className="w-5 h-5 text-white shadow-sm hover:text-app-flame hover:animate-expand hover:cursor-pointer" />
              </a>
              <a
                href="https://github.com/RandikaNiroshan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare className="w-5 h-5 text-white shadow-sm hover:text-app-flame hover:animate-expand hover:cursor-pointer" />
              </a>
              <a
                href="https://linkedin.com/in/randika-niroshan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5 text-white shadow-sm hover:text-app-flame hover:animate-expand hover:cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex-[3] flex flex-col justify-start w-full px-1">
            {alcoholic.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/alcoholic/${index + 1}`}
                  className="text-start w-max text-[13px] font-app-main text-white hover:text-app-flame basic-transition cursor-pointer mb-1"
                >
                  {item.strAlcoholic}
                </Link>
              );
            })}
          </div>
          <div className="flex-[9] w-full">
            <div className="grid grid-cols-3 items-center gap-1">
              {categories.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={`/categories/${index + 1}`}
                    className="text-center w-max text-[13px] font-app-main text-white hover:text-app-flame basic-transition cursor-pointer"
                  >
                    {item.strCategory}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center py-1 bg-app-flame/80">
        <p className="text-[15px] text-white font-app-heading tracking-wider">
          © 2022 <span className="font-bold">Cocktails</span>. By{"  "}
          <a
            className="font-bold"
            href="https://github.com/RandikaNiroshan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Randika Niroshan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
