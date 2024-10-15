"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
import { motion } from "framer-motion";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      
      {/* Customize the SheetContent and move close button to the left */}
      <SheetContent className="h-full top-0 right-2 w-full">
        <div className="flex flex-col items-center justify-between h-fit pt-8">
          <div className="flex flex-col items-center gap-y-32">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex"
            >
              <Logo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Nav
                containerStyles="flex flex-col gap-y-4 items-center"
                linkStyles="text-2xl"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            containerStyles="flex gap-x-4"
            iconStyles="text-2xl"
          >
            <Socials containerStyles="flex gap-x-4 mt-48" iconStyles="text-2xl" />
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
