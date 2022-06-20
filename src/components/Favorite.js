import React from "react";

const Favorite = ({ id }) => {
  const isLiked = id ? true : false;
  return (
    <div className="flex place-items-center animate-expand cursor-pointer drop-shadow-sm absolute top-4 left-4 rounded-md z-[3] active:scale-[0.90] hover:scale-[1.10] basic-transition">
      <div className="group-hover:scale-125 basic-transition">
        <svg
          className={`h-5 w-5 drop-shadow-lg stroke-white ${
            isLiked && "fill-white"
          }`}
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
      </div>
    </div>
  );
};

export default Favorite;
