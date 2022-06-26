import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "../app/utils/data";
import { Logo } from "../components";

const Header = () => {
  const favCount = useSelector((state) => state.favorite.favorite);
  const navigate = useNavigate();

  const onNavigateFavorite = () => {
    favCount?.length > 0 ? navigate("/favorites") : alert("No favorites");
  }

  return (
    <header className="flex bg-white drop-shadow-md justify-between items-center h-16 px-10">
      <Logo />
      <nav className="flex justify-center">
        <ul className="flex justify-center gap-5">
          {Menu.map((item, index) => (
            <li key={index} className="font-app-text text-lg">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-app-flame double-transition"
                    : "text-app-cadet hover:text-app-flame basic-transition"
                }
              >
                {item.menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4 h-8 justify-center items-center">
        <div className="h-8 w-8 relative group cursor-pointer">
          <svg
            className="drop-shadow-lg fill-app-cadet group-hover:fill-app-flame stroke-app-cadet basic-transition group-hover:stroke-app-flame group-hover:animate-expand svg-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <div onClick={onNavigateFavorite} className="w-8 h-8 flex justify-center items-center absolute top-0 left-0">
            <span className="text-white text-center text-[9px] font-app-main group-hover:tracking-widest basic-transition">
              {favCount?.length ?? 0}
            </span>
          </div>
        </div>
        <div className="h-8 w-8">
          <svg
            className="drop-shadow-lg stroke-app-cadet basic-transition hover:stroke-app-flame hover:animate-expand cursor-pointer svg-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
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
  );
};

export default Header;
