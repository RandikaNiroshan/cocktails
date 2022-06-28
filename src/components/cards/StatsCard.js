import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const StatsCard = ({ count, title, image, link, scrollTo }) => {
  const navigate = useNavigate();

  const onClickHandle = () => {
    link && navigate(link);
  };
  return (
    <div className="stat-card bg-white rounded-xl drop-shadow-xl h-auto w-auto flex flex-col justify-center items-center overflow-hidden relative ring-4 ring-app-cadet group">
      <img
        className="rounded-xl h-[150px] sm:h-[12vw] w-max object-cover scale-[1.6] group-hover:-rotate-12 group-hover:scale-[2] double-transition"
        src={image}
        alt={title}
      />
      <div className="absolute top-0 left-0 right-0 z-[2] h-full w-full flex flex-col justify-center items-center group-hover:basic-transition">
        <div className="px-4 py-2 rounded-xl">
          <h1 className="neon-text mb-1 text-2xl md:text-4xl lg:text-6xl tracking-widest font-app-main font-extrabold text-center group-hover:basic-transition">
            {count}
          </h1>
          <h2 className="text-app-olivine text-base md:text-lg font-app-text tracking-widest font-bold text-center group-hover:basic-transition">
            {title}
          </h2>
          {link && (
            <p
              onClick={onClickHandle}
              className="hidden invisible group-hover:block group-hover:visible group-hover:basic-transition neon-text text-lg font-app-heading text-center active:scale-90 active:basic-transition hover:animate-expand cursor-pointer"
            >
              Show Me ⇨
            </p>
          )}
          {scrollTo && (
            <Link
              to={scrollTo}
              smooth="easeInCubic"
              offset={-170}
              duration={700}
              delay={150}
            >
              <p className="hidden invisible group-hover:block group-hover:visible group-hover:basic-transition neon-text text-lg font-app-heading text-center active:scale-90 active:basic-transition hover:animate-expand cursor-pointer">
                Show Me ⇨
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
