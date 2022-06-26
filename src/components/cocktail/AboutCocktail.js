import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import PrimaryButton from "../buttons/PrimaryButton";
import InfoCard from "./InfoCard";
import { Link } from "react-scroll";

const AboutCocktail = ({ cocktail, loading }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl drop-shadow-lg w-full px-6 py-4">
      {loading === HTTP_STATUS.PENDING && (
        <>
          <div className="px-1 space-y-1">
            <p className="loading animate-loading text-3xl text-slate-100 text-center truncate leading-5">
              ...
            </p>
            <p className="loading animate-loading text-lg text-slate-100 text-center truncate leading-5">
              ...
            </p>
          </div>
        </>
      )}
      {loading === HTTP_STATUS.FULFILLED && (
        <>
          <h1 className="text-3xl font-app-main text-app-flame font-bold">
            {cocktail.drink}
          </h1>
          <p className="text-lg font-app-heading text-app-cadet font-bold">
            {cocktail.alcoholic}
          </p>
        </>
      )}
      <div className="flex justify-evenly gap-3 mt-3 h-auto px-1">
        <InfoCard
          title="Ingredients"
          data={cocktail.ingredients?.length}
          loading={loading}
        />
        <InfoCard title="Category" data={cocktail.category} loading={loading} />
        <InfoCard title="Serve" data={cocktail.glass} loading={loading} />
      </div>
      <div className="flex justify-center items-start gap-1 w-full mt-5">
        <Link
          to="instructions"
          spy={true}
          smooth="easeInCubic"
          offset={-170}
          duration={700}
          delay={150}
        >
          <PrimaryButton text="Instructions" />
        </Link>

        <Link
          to="video-guide"
          spy={true}
          smooth="easeInCubic"
          offset={-150}
          duration={700}
          delay={150}
        >
          <PrimaryButton text="Video Guide" />
        </Link>
      </div>
    </div>
  );
};

export default AboutCocktail;
