// 'use client';
// import React, {useState, useEffect} from "react";
// import ThemeToggler from "./ThemeToggler";
// import Logo from "./Logo";
// import Nav from "./Nav";
// import MobileNav from "./MobileNav";
// import { usePathname } from "next/navigation";
// const Header = () => {
//     const [header, setHeader] = useState(false);
//     const pathname = usePathname();

//     useEffect(() => {
//         const scrollYPos = window.addEventListener('scroll', () => {
//             window.screenY > 50 ? setHeader(true) : setHeader(false);
//         });

//         return () => window. removeEventListener('scroll', scrollYPos);
//     });

//     return (
//         <header className={`${header ? 'py-4 bg-white shadow-sm dark:bg-accent' : 'shadow-sm dark:shadow-white/5 py-6 dark:bg-slate-950'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}>
//             <div className="container mx-auto">
//                 <div className="flex justify-between items-center">
//                     <Logo />
//                     <div className="flex items-center gap-x-6 ">
//                     <Nav containerStyles='hidden xl:flex gap-x-8 items-center' linkStyles='relative hover:text-primary transition-all' underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' />
//                     <ThemeToggler />
//                     <div className="xl:hidden">
//                         <MobileNav />
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;

// * ===========================================
'use client';
import React, { useState, useEffect, useRef } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    // References for elements to animate
    const headerRef = useRef(null);
    // const logoRef = useRef(null);
    const navRef = useRef(null);
    const mobileNavRef = useRef(null);
    const themeRef = useRef(null);

    // Sticky header effect on scroll
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // GSAP Animations
    useEffect(() => {
        const headerElem = headerRef.current;
        const navElem = navRef.current;
        const themeElem = themeRef.current;

        // Animate header as soon as the page loads
        gsap.fromTo(
          headerElem,
          { opacity: 0, y: -150 }, // Start hidden and above view
          {
            opacity: 1,
            y: 0, // Slide down to original position
            duration: 1,
            ease: 'power3.out',
            // Immediate animation after page load
          }
        );

        // Animate nav
        gsap.fromTo(
          navElem,
          { opacity: 0, x: 150, y: -150 }, // Slide in from the right
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
          }
        );

        gsap.fromTo(
            themeElem,
            { opacity: 0, x: 150, y: -150 }, // Slide in from the right
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1.5,
              ease: 'power3.out',
            }
          );
    }, []);

    return (
        <header
          ref={headerRef}
          className={`${header ? 'py-4 bg-white shadow-sm dark:bg-accent' : 'shadow-sm dark:shadow-white/5 py-6 dark:bg-slate-950'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                        <Logo />
                    
                    {/* Navigation */}
                    <div className="flex items-center gap-x-6">
                      <div ref={navRef}>
                        <Nav containerStyles='hidden xl:flex gap-x-8 items-center' linkStyles='relative hover:text-primary transition-all' underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' />
                      </div>
                      
                      {/* Theme Toggler */}
                      <div ref={themeRef}>
                        <ThemeToggler />
                      </div>
                      
                      {/* Mobile Navigation */}
                      <div className="xl:hidden" ref={mobileNavRef}>
                          <MobileNav />
                      </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
