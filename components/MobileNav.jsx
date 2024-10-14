"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
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
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
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
                containerStyles="flex flex-col gap-y-6 items-center"
                linkStyles="text-2xl"
              />
            </motion.div>
          </div>

          <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}

          containerStyles="flex gap-x-4" iconStyles="text-2xl"
          >
            <Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
