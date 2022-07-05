import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { hideMobileMenu, showMobileMenu, showSearchModal } from "../../app/features/modalSlice";
import { Menu } from "../../app/utils/data";
import { Logo } from "../../components";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const favCount = useSelector((state) => state.favorite.favorite);
  const showModal = useSelector((state) => state.modal.showMobileMenu);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openSearch = () => {
    dispatch(showSearchModal());
  };

  const onCloseModal = () => {
    dispatch(hideMobileMenu());
  };

  const openMenu = () => {
    dispatch(showMobileMenu());
  }

  const onNavigateFavorite = () => {
    favCount?.length > 0 && navigate("/favorites");
  };

  return (
    <>
      <header className="flex bg-white drop-shadow-md justify-between items-center h-16 px-4 md:px-6 lg:px-10 xl:px-16">
        <div
          onClick={openMenu}
          className="h-6 w-6 md:h-8 md:w-8 lg:hidden active:scale-95"
        >
          <svg
            className="drop-shadow-lg stroke-app-cadet basic-transition md:hover:stroke-app-flame md:hover:animate-expand cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-5 lg:pr-0">
          <Logo />
        </div>
        <nav className="hidden lg:flex justify-center">
          <ul className="flex justify-center gap-5">
            {Menu.map((item, index) => (
              <li
                key={index}
                className="font-app-text text-lg xl:text-xl relative menu-hover"
              >
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-app-flame double-transition"
                      : "text-app-cadet md:hover:text-app-flame basic-transition"
                  }
                >
                  {item.menu}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4 h-8 justify-center items-center">
          <div className="h-6 w-6 md:h-8 md:w-8 relative group cursor-pointer active:scale-95">
            <svg
              className="drop-shadow-lg fill-app-cadet md:group-hover:fill-app-flame stroke-app-cadet basic-transition md:group-hover:stroke-app-flame md:group-hover:animate-expand"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <div
              onClick={onNavigateFavorite}
              className="w-8 h-8 flex justify-center items-center absolute -top-[4px] -left-1 md:top-0 md:left-0"
            >
              <span className="text-white text-center text-[8px] md:text-[9px] font-app-main md:group-hover:tracking-widest basic-transition">
                {favCount?.length ?? 0}
              </span>
            </div>
          </div>
          <div onClick={openSearch} className="h-6 w-6 md:h-8 md:w-8 active:scale-95">
            <svg
              className="drop-shadow-lg stroke-app-cadet basic-transition md:hover:stroke-app-flame md:hover:animate-expand cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </header>
      <MobileMenu onClose={onCloseModal} show={showModal} />
    </>
  );
};

export default Header;
