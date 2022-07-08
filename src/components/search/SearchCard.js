import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideSearchModal } from "../../app/features/modalSlice";
import { HTTP_STATUS } from "../../app/utils/constants";
import { ImagePlaceHolder } from "../../assets/";
import { PrimaryButton } from "../../components";

const SearchCard = ({ cocktail, loading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, drink, image, category, alcoholic } = cocktail;

  const onClickHandler = () => {
    dispatch(hideSearchModal());
    navigate(`/cocktails/${id}`);
  };

  return (
    <div
      className={`bg-white h-full w-full rounded-[5px] drop-shadow-lg overflow-hidden group relative hover:ring-1 hover:ring-white cursor-default  ${
        loading === HTTP_STATUS.FULFILLED && " from-right"
      }`}
    >
      <div className="rounded-[5px] overflow-hidden">
        <div className="grid grid-cols-5">
          <div className="p-[5px] md:p-2 relative col-start-1 col-span-2">
            {loading !== HTTP_STATUS.FULFILLED && (
              <div className="loading animate-loading aspect-[8/5] w-full rounded-[5px]"></div>
            )}
            {loading === HTTP_STATUS.FULFILLED && (
              <>
                <LazyLoadImage
                  className="aspect-[8/5] w-full object-cover rounded-[5px] group-hover:scale-[2.85] group-hover:blur-[2px] group-hover:translate-x-2/4 basic-transition"
                  src={image ?? ImagePlaceHolder}
                  alt={drink ?? "Cocktail Image"}
                  placeholder={<div className="loading animate-loading aspect-[8/5] w-full rounded-[5px]"></div>}
                />
              </>
            )}
          </div>
          <div className="rounded-[5px] px-[5px] py-[8px] md:p-2 col-start-3 col-span-3">
            {loading !== HTTP_STATUS.FULFILLED && (
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-start items-start mr-1">
                  <p className="loading animate-loading rounded-md text-slate-100 h-[20px] w-full mb-1"></p>
                  <p className="loading animate-loading rounded-md text-slate-100 h-[16px] w-full mb-1"></p>
                  <p className="loading animate-loading rounded-md text-slate-100 h-[16px] w-full"></p>
                </div>
              </div>
            )}
            {loading === HTTP_STATUS.FULFILLED && (
              <div className="flex flex-col justify-between items-start w-full h-full">
                <div className="flex flex-col justify-start items-start">
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-app-text text-app-flame leading-4 md:leading-5">
                    {drink ?? "Cocktail"}
                  </p>
                  <p className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-app-heading text-app-cadet font-bold truncate leading-4 md:leading-5">
                    {category ?? "Category"}
                  </p>
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-app-heading text-app-cadet font-bold truncate leading-4 md:leading-5 capitalize">
                    {alcoholic ?? "alcoholic"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {loading === HTTP_STATUS.FULFILLED && (
        <>
          <div className="z-[2] rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden absolute top-0 left-0 right-0">
            <div className="relative w-full flex justify-center items-center">
              <div className="px-3 pb-2 flex flex-col items-center justify-center scale-0 group-hover:scale-100 absolute -bottom-48 group-hover:-bottom-[2px] md:group-hover:bottom-0 group-hover:delay-[150ms] group-hover:duration-500 duration-150">
                <p className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-center font-app-text text-white leading-5">
                  {drink ?? "Cocktail"}
                </p>
              </div>
              <div className="flex items-center justify-center px-8 scale-0 group-hover:scale-100 absolute -bottom-48 group-hover:-bottom-[24px] lg:group-hover:-bottom-[28px] xl:group-hover:-bottom-[30px] group-hover:delay-[450ms] group-hover:duration-500 duration-150">
                <PrimaryButton onClick={onClickHandler} text="View Recipe" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchCard;
