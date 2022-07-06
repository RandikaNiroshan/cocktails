import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";

const IngredientDetailsTile = ({loading, title, text}) => {
  return (
    <div className="flex flex-col justify-center items-center my-[5px] md:my-2 px-2 md:px-4 w-full">
      {loading !== HTTP_STATUS.FULFILLED && (
        <div className="w-full space-y-1">
          <p className="loading animate-loading text-[14px] text-slate-100 text-center truncate leading-5">
            ...
          </p>
        </div>
      )}

      {loading === HTTP_STATUS.FULFILLED && (
        <p className="text-[14px] md:text-[15px] lg:text-[16px] font-app-text text-app-cadet text-center">
          {text}
        </p>
      )}
      <p className="text-[9px] md:text-[10px] lg:text-[11px] font-app-main text-app-olivine text-center tracking-wider">
        {title}
      </p>
    </div>
  );
};

export default IngredientDetailsTile;
