import "./services.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opcaity: 0,
  },
  animate: {
    x: 0,
    opcaity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"

      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          We focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.1,
              ease: "easeInOut",
            }}
            src="/people.webp"
            alt=""
          />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <motion.button
            whileHover={{
              background: "transparent",
              color: "white",
              border: "2px solid white",
            }}
          >
            Book Consultation
          </motion.button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brand Strategy</h2>
          <p>
            We help shape your brand’s vision and positioning, understanding
            your market deeply and defining a clear direction that supports
            long-term growth and differentiation.
          </p>
          <motion.button whileTap={{ background: "darkgray", color: "black" }}>
            READ MORE
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Visual Identity</h2>
          <p>
            We design logos, color palettes, and visual elements that work
            together seamlessly, giving your brand a consistent, professional
            look that people remember.
          </p>
          <motion.button whileTap={{ background: "darkgray", color: "black" }}>
            READ MORE
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brand Marketing</h2>
          <p>
            We craft meaningful messaging that explains who you are, what you
            offer, and why it matters, helping your brand connect naturally with
            the right audience.
          </p>
          <motion.button whileTap={{ background: "darkgray", color: "black" }}>
            READ MORE
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Digital Branding</h2>
          <p>
            We bring your brand to life across websites, social platforms, and
            digital channels, ensuring a unified experience that builds trust
            and strengthens recognition.
          </p>
          <motion.button whileTap={{ background: "darkgray", color: "black" }}>
            READ MORE
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
