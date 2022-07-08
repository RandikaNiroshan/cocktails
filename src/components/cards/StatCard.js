import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const StatCard = ({ title, count, icon1}) => {
  return (
    <div className="m-1 p-4 xl:py-6 bg-app-cadet rounded-lg shadow-lg overflow-hidden cursor-default">
      <div className="w-full h-full relative  flex flex-col justify-center items-center">
        <div className="text-white/30 absolute -bottom-6 -right-4 -rotate-45">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 4, type: "spring" }}
            className="text-white/30"
          >
            {icon1}
          </motion.div>
        </div>
        <CountUp
          className="text-white font-app-main text-6xl text-center font-bold mt-1"
          delay={0.6}
          duration={0.7}
          end={count}
        />
        <h3 className="text-app-olivine font-app-heading text-center text-2xl mt-1">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default StatCard;
