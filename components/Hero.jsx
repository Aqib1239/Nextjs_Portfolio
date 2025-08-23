'use client';

import React, { useEffect, useRef } from "react";
import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownLine } from 'react-icons/ri';
import { Typed } from "react-typed";
import Typewriter from "typewriter-effect/dist/core";
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';
import lottie from "lottie-web";
import { wrap, motion } from "framer-motion";

const animContainer = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay},
},
});

const Hero = () => {
  const animationData = require("../public/hero/projects.json");
  const container = useRef(null);
  const typewriterRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => {
      anim.destroy();
    };
  }, [animationData]);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: ["I'm a MERN Stack Developer", "Building scalable applications", "with MongoDB, Express, React, and Node.js"],
      autoStart: true,
      cursor: "",
      typeSpeed: 70,
      deleteSpeed: 50,
      loop: true,
      wrapper: 'p',
      wrap: true
    });
  }, []);

  return (
    <section
      className="py-12 xl:py-24 xl:h-[84vh] md:h-[100vh] md:pb-20 sm:h-[104vh] sm:pb-24 xl:pt-28 bg-hero    
     bg-no-repeat bg-cover bg-bottom dark:bg-none"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between gap-x-8">
          <div className="flex order-1 max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <motion.div
              variants={animContainer(0)}
              whileInView={"visible"}
              initial="hidden"
              className="text-md uppercase font-semibold mb-4 text-primary tracking-[4px]"
            >
              Web Developer
            </motion.div>
            <motion.h1
              variants={animContainer(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="h1 tracking-wider"
            >
              Hello, I am Mohammad Aqib
            </motion.h1>
            <motion.p
              variants={animContainer(1)}
              initial="hidden"
              whileInView={"visible"}
              id="typewriter"
              ref={typewriterRef}
              className="text-muted-foreground text-lg mb-8 mt-2 tracking-[2px] font-normal max-w-[490px] mx-auto xl:mx-0"
            ></motion.p>

            <motion.div
              variants={animContainer(1.5)}
              initial="hidden"
              whileInView={"visible"}
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12"
            >
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me
                  <motion.span
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    <Send size={18} />
                  </motion.span>
                </Button>
              </Link>

              <Link href="/Mohammad%20Aqib%20-%20MERN%20Stack%20Developer.pdf">
                <Button className="gap-x-2 bg-black dark:bg-blue-950 dark:hover:bg-violet-800">
                  Download Resume{" "}
                  <motion.span
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    <Download size={18} />
                  </motion.span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={animContainer(2)}
              initial="hidden"
              whileInView={"visible"}
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12"
            >
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconStyles="text-foreground text-[30px] hover:text-primary transition-all duration-600"
              />
            </motion.div>
          </div>
          <div className="order-2 flex justify-center items-center relative">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="w-full max-w-[500px] h-auto max-h-[500px] bg-no-repeat"
              ref={container}
            ></motion.div>
          </div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 lg:bottom-12 md:bottom-12 animate-bounce">
          <RiArrowDownLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

