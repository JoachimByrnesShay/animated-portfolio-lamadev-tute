import { motion } from "framer-motion";

const Test2 = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 200,
      transition: {
        // type: "spring",
        // stiffness: 100,
        // damping: 100,
        delay: i * 0.7,
        // staggerChildren: 0.2,
      },
    }),
    hidden: { opacity: 0 },
  };
  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="course">
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {items.map((item, i) => {
          return (
            <motion.li
              variants={variants}
              key={item}
              custom={i}
            >
              {item}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Test2;
