"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const Qta = () => {
  return (
    <section className="py-24 xl:mt-24 bg-[#F5F5F5] dark:bg-secondary/40">
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
                Contact me <motion.span 
                 initial={{ opacity: 0, y: -100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.7 }}
                ><Send size={16} /></motion.span>{" "}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qta;
