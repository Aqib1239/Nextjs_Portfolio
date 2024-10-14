"use client";
import React from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  // const toggleTheme = () => {
    // setTheme(theme === "dark" ? "light" : "dark");
  // };
  return (
    <div>
      <Button className="shadow-lg shadow-blue-400/90 dark:shadow-primary" variant="primary" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark" )}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        
      </Button>
    </div>
  );
};

export default ThemeToggler;
