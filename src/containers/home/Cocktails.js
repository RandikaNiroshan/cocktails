import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { calcHomeCocktailGrid } from "../../app/utils/helpers";
import { CocktailsGrid, SelectLetter } from "../../components";
import useWindowSize from "../../hooks/useWindowSize";
import {
  fetchByFirstLetter,
  initialFetch,
} from "../../app/features/cocktailsSlice";
import { fromBelow } from "../../app/utils/animationsHelper";

const Cocktails = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector((state) => state.cocktails.cocktails);
  const loading = useSelector((state) => state.cocktails.loading);
  const error = useSelector((state) => state.cocktails.error);
  const selectedLetter = useSelector((state) => state.cocktails.selectedLetter);

  const size = useWindowSize();

  useEffect(() => {
    if (selectedLetter === "") {
      const promise = dispatch(initialFetch());
      return () => {
        promise.abort();
      };
    } else {
      const promise = dispatch(fetchByFirstLetter(selectedLetter));
      return () => {
        promise.abort();
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="my-4 overflow-hidden" id="cocktails">
      <motion.div
        variants={fromBelow}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.6,
          delay: 0.5,
        }}
        className="mb-8 mt-1 lg:mt-2 mx-12 md:mx-24 lg:mx-12"
      >
        <SelectLetter />
      </motion.div>
      <div className="px-[5vw] md:px-[6vw] lg:px-[7vw]">
        <CocktailsGrid
          perPage={calcHomeCocktailGrid(size.width)}
          list={cocktails}
          loading={loading}
          error={error}
          fullData={true}
        />
      </div>
    </section>
  );
};

export default Cocktails;
