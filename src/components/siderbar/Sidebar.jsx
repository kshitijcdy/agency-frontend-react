import { useState } from "react";
import { motion } from "framer-motion";
import Links from "../links/Links";
import ToggleButton from "../toggleButton/ToggleButton";
import "./sidebar.scss";
const Sidebar = () => {
  const variant = {
    open: {
      clipPath: "circle(1200pc at 50px 50px)",
      transition: {
        // type:"spring",
        stiffness: 50,
        duration: 10,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        // type:"spring",
        stiffness: 50,
        damping: 20,
       
      },
    },
  };

  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variant}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
