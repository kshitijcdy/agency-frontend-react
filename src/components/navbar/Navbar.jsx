import Sidebar from "../siderbar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          Indeev
        </motion.span>
        <div className="social">
          <a href="#">
            <motion.img
              whileHover={{ scale: 1.5 }}
              src="linkedin-50.png"
              alt=""
            />
          </a>
          <a href="">
            <motion.img whileHover={{ scale: 1.5 }} src="/facebook-50.png" alt="" />
          </a>
          <a href="">
            <motion.img whileHover={{ scale: 1.5 }} src="/dribbble.png" alt="" />
          </a>
          <a href="">
            <motion.img whileHover={{ scale: 1.5 }} src="instagram-50.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
