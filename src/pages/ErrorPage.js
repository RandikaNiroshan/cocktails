import React from "react";
import { useDispatch } from "react-redux";
import { showSearchModal } from "../app/features/modalSlice";
import AnimateRoute from "../containers/layout/AnimateRoute";

const ErrorPage = () => {
  const dispatch = useDispatch();

  const openSearch = () => {
    dispatch(showSearchModal());
  };
  return (
    <AnimateRoute>
    <div className="flex flex-col justify-center items-center h-full w-full my-10 xl:my-16">
      <div className="flex flex-col justify-center items-center w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
        <h2 className="text-7xl md:text-8xl xl:text-9xl font-app-main font-bold text-app-flame">
          404
        </h2>
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-5xl font-app-text font-bold text-app-cadet mt-2">
          Page Not Found!
        </h2>
        <p className="text-xl lg:text-[22px] xl:text-2xl font-app-heading text-app-olivine text-center mt-5 xl:mt-8 mb-4 xl:mb-7">
            The page you were looking for could not be found. It might have been
            removed, renamed, or did not exist in the first place.
          </p>

          <div className="w-full px-10 md:px-20 xl:px-32">
            <input
              onClick={openSearch}
              type="text"
              className="w-full h-auto px-4 md:px-6 py-2 md:py-3 bg-app-cadet rounded-lg text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] font-app-main text-white tracking-wider border-1 ring-1 border-app-cadet ring-app-cadet focus:border-app-cadet focus:ring-app-cadet"
              placeholder="Try searching for something else"
              readOnly
            />
          </div>
      </div>
    </div>
    </AnimateRoute>
  );
};

export default ErrorPage;
