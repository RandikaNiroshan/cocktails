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
    <section className="bg-app-cadet">
      <div className="px-32 py-10 mt-12 w-full mb-8 flex flex-col items-center">
        {loading === HTTP_STATUS.FULFILLED &&
          instructions.length > 0 &&
          instructions.map((item, index) => {
            return (
              <div key={index} className="w-full">
                {item.trim().length > 1 && (
                  <div className="flex gap-4 justify-center items-center space-y-1">
                    <div className="flex-[2]flex justify-end items-center">
                      <p className="text-app-olivine font-app-heading text-sm">
                        Step {index + 1}:
                      </p>
                    </div>
                    <div className="flex-[10] flex justify-start items-center pb-2">
                      <p className="text-white font-app-main text-[13px] tracking-wider">
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
