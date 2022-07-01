import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideSearchModal } from "../../app/features/modalSlice";
import { HTTP_STATUS } from "../../app/utils/constants";
import { ImagePlaceHolder } from "../../assets/";
import { PrimaryButton } from "../../components";

const SearchCard = ({ cocktail, loading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, drink, image, category } = cocktail;

  const onClickHandler = () => {
    dispatch(hideSearchModal());
    navigate(`/cocktails/${id}`);
  };

  return (
    <div className="bg-white h-full w-full rounded-[5px] drop-shadow-lg overflow-hidden relative cursor-default">
      <div className="rounded-[5px] overflow-hidden">
        <div className="grid grid-cols-5">
          <div className="p-[5px] md:p-2 relative col-start-1 col-span-2">
            {loading === HTTP_STATUS.PENDING && (
              <div className="loading animate-loading aspect-[8/5] w-full rounded-[5px]"></div>
            )}
            {loading === HTTP_STATUS.FULFILLED && (
              <>
                <img
                  className="aspect-[8/5] w-full object-cover rounded-[5px]"
                  src={image ?? ImagePlaceHolder}
                  alt={drink ?? "Cocktail Image"}
                />
              </>
            )}
          </div>
          <div className="rounded-[5px] px-[5px] py-[8px] md:p-2 col-start-3 col-span-3">
            {loading === HTTP_STATUS.PENDING && (
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-start items-start">
                  <p className="loading animate-loading rounded-md text-slate-100 text-[14px] leading-5 mb-1">
                    ...
                  </p>
                  <p className="loading animate-loading rounded-md text-slate-100 text-base leading-5 mb-2">
                    ...
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <PrimaryButton loading={loading} text="View Recipe" />
                </div>
              </div>
            )}
            {loading === HTTP_STATUS.FULFILLED && (
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-start items-start">
                  <p className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[15px] font-app-text text-app-flame leading-4 md:leading-5">
                    {drink ?? "Cocktail"}
                  </p>
                  <p className="text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] font-app-heading text-app-cadet font-bold truncate leading-4 md:leading-5">
                    {category ?? "Category"}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <PrimaryButton onClick={onClickHandler} text="View Recipe" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
