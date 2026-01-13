import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -550,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-90%",
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 50,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SOFTWARE SOLUTIONS</motion.h2>

          <motion.div variants={textVariants} className="buttons">
            <motion.h1 variants={textVariants}>
              Your Idea. <br />
              Our Execution.
            </motion.h1>
            <motion.button variants={textVariants}>Our Work</motion.button>
            <motion.button variants={textVariants}>Hire Us</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        <span> Build Software That Scales</span>
        <span> Build Software That Scales</span>
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
