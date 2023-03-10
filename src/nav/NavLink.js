import { motion } from "framer-motion";
import React from "react";

const NavLink = ({ name, link, preventHide }) => {
    return (
        <motion.div className="navLink" whileHover={{ scale: 1.1 }}>
            <a onClick={preventHide} href={link}>
                {name}
            </a>
        </motion.div>
    );
};

export default NavLink;
