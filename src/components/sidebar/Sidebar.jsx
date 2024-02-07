import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import "./sidebar.scss";
import { useOnClickOutside } from "../../hooks/use-on-click-outside";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
      }
    };

    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const navRef = useRef(null);
  useOnClickOutside(navRef, () => setOpen(false));

  return (
    <motion.div
      className="sidebar"
      initial="closed"
      animate={open ? "open" : "closed"}
      ref={navRef}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
