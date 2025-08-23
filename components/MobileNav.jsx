"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
import { motion } from "framer-motion";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // Close sheet when a link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>

      <SheetContent className="h-full top-0 right-2 w-full">
        <div className="flex flex-col items-center justify-between h-fit pt-8">
          <div className="flex flex-col items-center gap-y-32">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex"
            >
              <Logo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              <Nav
                containerStyles="flex flex-col gap-y-4 items-center"
                linkStyles="text-xl"
                onLinkClick={handleLinkClick} // 🔑 pass callback
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Socials
              containerStyles="flex gap-x-4 mt-48"
              iconStyles="text-2xl"
            />
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
