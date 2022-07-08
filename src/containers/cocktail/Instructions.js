import React, { useEffect, useState } from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import { motion } from "framer-motion";
import { fromBelow, skeletonGrid } from "../../app/utils/animationsHelper";
import Champagne from "../../components/animatedSvg/Champagne";

const Instructions = ({ cocktail, loading }) => {
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    if (loading === HTTP_STATUS.FULFILLED) {
      setInstructions(cocktail.instructions.split("."));
    }
  }, [loading, cocktail.instructions]);
  
  return (
    <motion.div variants={skeletonGrid}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    transition={{
      ease: "easeInOut",
      duration: 0.2,
      delay: 0.1,
    }} className="bg-app-cadet relative overflow-hidden" id="instructions">
      <div className="hidden md:block absolute w-20 h-20 lg:w-24 lg:h-24 bottom-2 md:right-16 lg:right-24 -rotate-[10deg]">
        <Champagne />
      </div>
      <motion.div
        variants={fromBelow}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
          delay: 0.2,
        }}
        className="w-full px-6 md:px-20 lg:px-32 py-8 md:py-10 mt-6 md:mt-8 lg:mt-12 mb-8 flex flex-col items-center"
      >
        {loading === HTTP_STATUS.FULFILLED &&
          instructions.length > 0 &&
          instructions.map((item, index) => {
            return (
              <div key={index} className="w-full">
                {item.trim().length > 1 && (
                  <div className="flex gap-4 justify-center items-start space-y-1">
                    <div className="flex-[2]flex justify-end mt-[4px] lg:mt-[5px]">
                      <p className="text-app-olivine font-app-heading text-[13px] md:text-[14px] xl:text-[15px]">
                        Step {index + 1}:
                      </p>
                    </div>
                    <div className="flex-[10] flex justify-start pb-2">
                      <p className="text-white font-app-main text-[12px] md:text-[13px] xl:text-[15px] tracking-wider">
                        {item.trim()}.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </motion.div>
    </motion.div>
  );
};

export default Instructions;
