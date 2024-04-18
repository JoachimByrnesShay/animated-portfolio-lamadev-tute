import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const variants = {
    visible: {
      opacity: 1,
      x: 400,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
    hidden: { opacity: 0 },
  };
  const [open, setOpen] =
    useState(false);
  return (
    <div className="course">
      <motion.div
        className="box"
        // initial={{
        //   opacity: 0.5,
        //   scale: 0.5,
        // }}
        // animate={{
        //   opacity: 1,
        //   scale: 1,
        //   x: 200,
        // }}
        variants={variants}
        // initial="hidden"
        animate={
          open ? "visible" : "hidden"
        }
        // transition={{
        //   duration: 2,
        //   delay: 2,
        // }}
        // whileHover={{
        //   opacity: 1,
        //   scale: 2,
        // }}
        // whileInView={{
        //   opacity: 1,
        //   scale: 2,
        // }}
        drag
        // whileTap={{
        //   opacity: 0.4,
        // }}
      ></motion.div>
      <button
        onClick={() =>
          setOpen((prev) => !prev)
        }
      >
        {" "}
        CLICK{" "}
      </button>
    </div>
  );
};

export default Test;
