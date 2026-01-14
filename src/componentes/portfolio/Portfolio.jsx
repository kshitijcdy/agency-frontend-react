import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Crypto Exchange",
    img: "./Crypto.jpg",
    desc: "A scalable crypto trading platform focused on security, performance, and intuitive user interactions across devices.",
  },
  {
    id: 2,
    title: "Mobile Applications",
    img: "./mobApp.png",
    desc: "High-quality mobile applications crafted to deliver smooth performance, intuitive design, and reliable functionality across platforms.",
  },
  {
    id: 3,
    title: "ERP Tools",
    img: "./erp.png",
    desc: "Robust ERP tools designed to centralize business processes, improve efficiency, and enhance operational visibility.",
  },
  {
    id: 4,
    title: "Brand Sites",
    img: "./dev.jpg",
    desc: "High-impact brand websites crafted to highlight storytelling, visual appeal, and consistent brand communication.",
  },
];



const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const isMobile = window.innerWidth < 738;


  // const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const y = useTransform(
  scrollYProgress,
  [0, 1],
  isMobile ? [1,-100] : [-300, 300]
);


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
