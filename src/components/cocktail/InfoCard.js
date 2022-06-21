import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";

const InfoCard = ({ title, data, loading }) => {
  return (
    <>
      {loading === HTTP_STATUS.PENDING && (
        <>
          <div className="loading animate-loading flex flex-col justify-center items-center rounded-lg border-[3px] border-dashed w-full h-auto px-4 py-2">
            <div className="w-full space-y-1">
              <p className="loading animate-loading text-[14px] text-slate-100 text-center truncate leading-5">
                ...
              </p>
              <p className="loading animate-loading text-[14px] text-slate-100 text-center truncate leading-5">
                ...
              </p>
            </div>
          </div>
        </>
      )}

      {loading === HTTP_STATUS.FULFILLED && (
        <>
          <div className="flex flex-col justify-center items-center rounded-lg border-[3px] border-dashed w-full h-auto px-8 py-2">
            <p className="text-[14px] font-app-text text-app-olivine text-center">
              {data}
            </p>
            <p className="text-[10px] font-bold font-app-main text-app-cadet/80 text-center">
              {title}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default InfoCard;
