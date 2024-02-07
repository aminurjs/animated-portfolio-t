import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -600,
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
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 20,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 40,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-container"
        >
          <motion.h3 variants={textVariants}>AMINUR RAHMAN</motion.h3>
          <motion.h1 variants={textVariants}>
            Front-End Web Developer | MERN Stack Enthusiast
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./scroll.png"
            alt=""
          />
        </motion.div>

        <div className="image-container">
          <img src="./hero.png" alt="" />
        </div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="sliding-text"
      >
        Front-End | React | MERN Stack
      </motion.div>
    </div>
  );
};

export default Hero;
