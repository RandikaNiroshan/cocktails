import React, { useEffect, useState } from "react";
import { HTTP_STATUS } from "../../app/utils/constants";

const Instructions = ({ cocktail, loading }) => {
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    if (loading === HTTP_STATUS.FULFILLED) {
      setInstructions(cocktail.instructions.split("."));
    }
  }, [loading, cocktail.instructions]);

  return (
    <section className="bg-app-cadet" id="instructions">
      <div className="w-full px-6 md:px-20 lg:px-32 py-8 md:py-10 mt-6 md:mt-8 lg:mt-12 mb-8 flex flex-col items-center">
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
      </div>
    </section>
  );
};

export default Instructions;
