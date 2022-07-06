import React from "react";
import { motion } from "framer-motion";
import { routeAnimation } from "../../app/utils/animationsHelper";

const AnimateRoute = ({ children }) => {

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.15, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateRoute;
