import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../app/features/favoriteSlice";

const Favorite = ({ cocktail }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favorite);
  const [isFavorite, setIsFavorite] = useState(false);

  const onToggleFavorite = () => {
    const data = {
      id: cocktail.id,
      drink: cocktail.drink,
      image: cocktail.image,
    };

    if (favoriteList.some(item => item.id === cocktail.id)) {
      dispatch(removeFavorite(data));
      setIsFavorite(false);
    }else{
      dispatch(addFavorite(data));
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    if (favoriteList.some(item => item.id === cocktail.id)) {
      setIsFavorite(true);
    }else{
      setIsFavorite(false);
    }
  }, [cocktail, favoriteList]);

  return (
    <div
      onClick={() => onToggleFavorite()}
      className="flex place-items-center animate-expand cursor-pointer drop-shadow-sm absolute top-4 left-4 rounded-md z-[3] active:scale-[0.90] hover:scale-[1.10] basic-transition"
    >
      <div className="group-hover:scale-125 basic-transition">
        <svg
          className={`h-5 w-5 drop-shadow-lg stroke-white ${
            isFavorite && "fill-white"
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
