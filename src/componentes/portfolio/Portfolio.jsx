import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Crypto Exchange",
    img: "https://blockchain.oodles.io/wp-content/uploads/Cryptocurrency-Exchange-Development-3.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi minima placeat non magnam sit, cupiditate fuga architecto corporis. Quos, consequuntur.",
  },
  {
    id: 2,
    title: "Mobile Applications",
    img: "https://blockchain.oodles.io/wp-content/uploads/Cryptocurrency-Exchange-Development-3.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi minima placeat non magnam sit, cupiditate fuga architecto corporis. Quos, consequuntur.",
  },
  {
    id: 3,
    title: "ERP Tools",
    img: "https://blockchain.oodles.io/wp-content/uploads/Cryptocurrency-Exchange-Development-3.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi minima placeat non magnam sit, cupiditate fuga architecto corporis. Quos, consequuntur.",
  },
  {
    id: 4,
    title: "Brand Sites",
    img: "https://blockchain.oodles.io/wp-content/uploads/Cryptocurrency-Exchange-Development-3.jpg",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi minima placeat non magnam sit, cupiditate fuga architecto corporis. Quos, consequuntur.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />

            </div>
          <motion.div className="textContainer" style={{y}} >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="Portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
