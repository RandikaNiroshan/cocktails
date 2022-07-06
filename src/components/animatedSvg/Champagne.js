import React from "react";
import {
  svgDetailsAnimation,
  svgPathAnimation,
} from "../../app/utils/animationsHelper";
import { motion } from "framer-motion";

const Champagne = () => {
  return (
    <motion.svg
      animate={{
        x: [0, 10, 0],
        y: [0, 10, 0],
        rotate: [0, 10, 0, -10, 0],
      }}
      transition={{ repeat: Infinity, duration: 10,}}
      viewBox="0 0 64 64"
      className="stroke-white/[0.5] fill-transparent"
    >
      <g id="_champagne" data-name="champagne">
        <motion.path
          variants={svgPathAnimation}
          initial="initial"
          animate="animate"
          d="M44.447,62.105,35,57.382V43.7C45.191,41.614,48,28.968,48,22c0-10.061-3.9-20.886-4.061-21.342A1,1,0,0,0,43,0H21a1,1,0,0,0-.939.658C19.9,1.114,16,11.939,16,22c0,6.968,2.809,19.614,13,21.7V57.382l-9.447,4.723A1,1,0,0,0,20,64H44a1,1,0,0,0,.447-1.9ZM21.713,2H42.287a76.322,76.322,0,0,1,3.556,16.506A8.39,8.39,0,0,0,43,18a3.918,3.918,0,0,0-3.207,1.293A1.987,1.987,0,0,1,38,20a3.78,3.78,0,0,1-2.445-.832,5.994,5.994,0,0,0-7.11,0A3.78,3.78,0,0,1,26,20a1.987,1.987,0,0,1-1.793-.707A3.918,3.918,0,0,0,21,18a8.39,8.39,0,0,0-2.843.506A76.322,76.322,0,0,1,21.713,2ZM18,22c0-.419.012-.84.026-1.262A6.355,6.355,0,0,1,21,20a1.987,1.987,0,0,1,1.793.707A3.918,3.918,0,0,0,26,22a5.744,5.744,0,0,0,3.555-1.168,4.009,4.009,0,0,1,4.89,0A5.744,5.744,0,0,0,38,22a3.918,3.918,0,0,0,3.207-1.293A1.987,1.987,0,0,1,43,20a6.355,6.355,0,0,1,2.974.738c.014.422.026.843.026,1.262,0,6.917-2.926,20-14,20S18,28.917,18,22Zm6.236,40,6.211-3.1A1,1,0,0,0,31,58V43.964c.328.021.659.036,1,.036s.672-.015,1-.036V58a1,1,0,0,0,.553.9L39.764,62Z"
        />
        <motion.path
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          d="M23,23a3,3,0,1,0,3,3A3,3,0,0,0,23,23Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,23,27Z"
        />
        <motion.path
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          d="M37,36a3,3,0,1,0-3,3A3,3,0,0,0,37,36Zm-4,0a1,1,0,1,1,1,1A1,1,0,0,1,33,36Z"
        />
        <motion.path
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          d="M40,31a3,3,0,1,0-3-3A3,3,0,0,0,40,31Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,40,27Z"
        />
        <motion.path
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          d="M26,15a3,3,0,1,0-3-3A3,3,0,0,0,26,15Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,26,11Z"
        />
        <motion.rect
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          x="34"
          y="24"
          width="2"
          height="2"
        />
        <motion.rect
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          x="24"
          y="33"
          width="2"
          height="2"
        />
        <motion.rect
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          x="29"
          y="29"
          width="2"
          height="2"
        />
        <motion.path
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          d="M37,10a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V9A1,1,0,0,0,37,10Z"
        />
        <motion.path
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          d="M37,12a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V13A1,1,0,0,0,37,12Z"
        />
        <motion.path
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          d="M39,12h2a1,1,0,0,0,0-2H39a1,1,0,0,0,0,2Z"
        />
        <motion.path
          variants={svgDetailsAnimation}
          initial="initial"
          animate="animate"
          d="M33,12h2a1,1,0,0,0,0-2H33a1,1,0,0,0,0,2Z"
        />
      </g>
    </motion.svg>
  );
};

export default Champagne;
