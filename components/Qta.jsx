"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const Qta = () => {
  return (
    <section className="pt-10 pb-20 xl:mt-24 relative">
      {/* Gradient border with opacity fade from sides */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/80 to-transparent dark:via-gray-700/80"></div>
      <div className="container mx-auto ">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0 }}
            className="h2 max-w-xl text-center mb-8"
          >
            #let's_talk
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-xl text-center mb-8"
          >
            LEAVE A MESSAGE , We love to hear from you..!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65 }}
          >
            <Link href="/contact">
              <Button className="tracking-wider gap-x-3">
                Contact me{" "}
                <motion.span
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <Send size={16} />
                </motion.span>{" "}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qta;
