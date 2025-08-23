"use client";
import React from "react";
import Socials from "./Socials";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-blue-950 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.div
           initial={{ opacity: 0, y: -40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0 }}
          >
            {/* social */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
              iconStyles="text-white/60 dark:text-white/60 text-[24px] hover:text-white dark:hover:text-white transition-all duration-600"
            />
          </motion.div>

          {/* copyright */}
          <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
          className=" text-center flex flex-col gap-y-3 text-white/60 tracking-wider">
            <p>Copyright &copy; Mohammad Aqib.</p>
            <p>All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
