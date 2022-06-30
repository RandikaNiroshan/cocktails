import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HTTP_STATUS } from "../../app/utils/constants";
import { TbArrowBigUpLines } from "react-icons/tb";
import { animateScroll as scroll } from "react-scroll";
import FooterLogo from "./FooterLogo";
import { Menu } from "../../app/utils/data";

const Footer = () => {
  const loading = useSelector((state) => state.initial.loading);
  const categories = useSelector((state) => state.initial.categoriesList);
  const alcoholic = useSelector((state) => state.initial.alcoholicList);

  const scrollToTop = () => {
    return scroll.scrollToTop({
      duration: 500,
      delay: 150,
      smooth: "easeInCubic",
    });
  };

  return (
    <footer className="bg-app-cadet w-full h-auto relative">
      {loading === HTTP_STATUS.FULFILLED && (
        <>
          <div className="flex justify-center md:flex-col lg:flex-row py-4 px-12 lg:px-12 xl:px-20 lg:py-10">
            <div className="flex justify-center md:justify-evenly w-full">
              <div className="lg:flex-[3] flex flex-col md:hidden lg:flex justify-center items-center lg:items-start lg:justify-start">
                <FooterLogo />
                <div className="flex md:hidden mt-3 justify-center gap-4 w-full px-1">
                  {Menu.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={item.link}
                        className="text-start w-max text-[11px] font-app-main text-white basic-transition cursor-pointer mb-1"
                      >
                        {item.menu}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex-[3] hidden md:flex flex-col justify-start w-full px-1">
                {alcoholic.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/alcoholic?id=${index}`}
                      className="text-start w-max text-[13px] font-app-main text-white hover:text-app-flame basic-transition cursor-pointer mb-1"
                    >
                      {item.strAlcoholic}
                    </Link>
                  );
                })}
              </div>
              <div className="flex-[9] hidden md:block w-full">
                <div className="grid grid-cols-3 items-center gap-1">
                  {categories.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/categories?id=${index}`}
                        className="text-center w-max text-[13px] font-app-main text-white hover:text-app-flame basic-transition cursor-pointer"
                      >
                        {item.strCategory}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="hidden mt-3 md:flex lg:hidden justify-center items-center w-full">
              <FooterLogo />
            </div>
          </div>
          <div
            onClick={() => scrollToTop()}
            className="rounded-md bg-app-cadet hover:bg-app-flame ring-[2px] md:ring-[3px] ring-white absolute -top-[14px] md:-top-4 right-4 md:right-[40px] lg:right-16 p-2 drop-shadow-md group hover:cursor-pointer basic-transition"
          >
            <TbArrowBigUpLines className="w-4 h-4 md:w-5 md:h-5 text-white shadow-sm group-hover:animate-expand " />
          </div>
        </>
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
