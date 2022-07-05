import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { calcHomeCocktailGrid } from "../../app/utils/helpers";
import { MainCocktailsGrid, SelectLetter } from "../../components";
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
  const selectedLetter = useSelector((state) => state.cocktails.selectedLetter);

  const size = useWindowSize();

  useEffect(() => {
    if (selectedLetter === "") {
      dispatch(initialFetch());
    } else {
      dispatch(fetchByFirstLetter(selectedLetter));
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
          duration: 1,
          delay: 0.5,
        }}
        className="mb-8 mt-1 lg:mt-2 mx-12 md:mx-24 lg:mx-12"
      >
        <SelectLetter />
      </motion.div>
      <div className="px-[5vw] md:px-[6vw] lg:px-[7vw]">
        <MainCocktailsGrid
          perPage={calcHomeCocktailGrid(size.width)}
          list={cocktails}
          loading={loading}
          fullData={true}
        />
      </div>
    </section>
  );
};

export default Cocktails;
