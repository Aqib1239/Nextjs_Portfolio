'use client';
import React from "react";
import { motion } from "framer-motion";
// import DevImg from "../components/DevImg";
import myPic from "../../public/about/profile33333333.png"
import Image from "next/image";
import {
  Tabs,
  TabsList,
  TabsPanel,
  TabsContent,
  TabsTrigger,
} from "@/components/ui/tabs";

import { FaRegUserCircle } from "react-icons/fa";
import { Briefcase, LucideHome, LucidePhoneCall } from "lucide-react";
import { MdOutlineEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaGraduationCap, FaHtml5 } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const iconVariants = (duration) => ({
  initial: {y: -15},
  animate: {
    y: [10, -10],
    transition: {duration: duration, repeat: Infinity, ease: "linear", repeatType: "reverse"},
  }
})

const infoData = [
  {
    icon: <FaRegUserCircle size={20} />,
    text: "Mohammad Aqib",
  },
  {
    icon: <LucidePhoneCall size={20} />,
    text: "+91 8577 0512 39",
  },
  {
    icon: <MdOutlineEmail size={20} />,
    text: "maqib8577@gmail.com",
  },
  //   {
  //     icon: <SlCalender size={20} />,
  //     text: "January 2022 - Present",
  //   },
  {
    icon: <FaGraduationCap size={20} />,
    text: "Bachelor of Technology in Computer Science and Engineering",
  },
  {
    icon: <LucideHome size={20} />,
    text: "Shahjahanpur, India",
  },
  // {
  //     Icon: <Briefcase size={20} />,
  //     text: "Full Stack Web Developer"
  // }
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Integral University Lucknow (India)",
        qualification:
          "Bachelor of Technology in Computer Science and Engineering",
        years: "2020 - 2024",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        fresher: "This section is for future use",
        company: "ABC Software (India)",
        role: "Full Stack Web Developer",
        years: "2020 - 2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        htmlCss: "HTML, CSS",
        JS: "JavaScript, React.js",
        node: "Node.js",
        express: "Express.js",
        dataBase: "MongoDB",
      },
    ],
  },

  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
        tooltip: "VS Code",
        duration: 2.0, // unique duration
      },
      {
        imgPath: "/about/git.svg",
        tooltip: "Git",
        duration: 2.5,
      },
      {
        imgPath: "/about/github.svg",
        tooltip: "GitHub",
        duration: 3.0,
      },
      {
        imgPath: "/about/postman.svg",
        tooltip: "Postman",
        duration: 3.5,
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 mb-12">
      <div className="container mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, y: -100, x: 50 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-8 xl:mb-16 text-center mx-auto"
        >
          About me
        </motion.h2>

        <div className="flex flex-col xl:flex-row">
          {/* Developer Image */}
          <div className="flex flex-1 mb-12 xl:mb-0">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[505px] xl:w-[505px] xl:h-[505px]  lg:w-[450px] lg:h-[450px] md:w-[350px] md:h-[350px] sm:w-[280px] sm:h-[280px] bg-about_shape_light dark:bg-about_shape_dark bg-no-repeat bg-cover relative mx-auto xl:mx-0"
            >
              <Image
                src={myPic}
                layout="fill"
                objectFit="cover"
                alt="Developer Image"
                className="pb-[.6rem] pl-[2.5rem] overflow-hidden"
              />
            </motion.div>
          </div>

          {/* Tabs */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex-1"
          >
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none tracking-wider">
                <TabsTrigger
                  className="w-full xl:w-auto mx-1 text-sm uppercase"
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-full xl:w-auto mx-1 text-sm uppercase"
                  value="qualification"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger
                  className="w-full xl:w-auto mx-1 text-sm uppercase"
                  value="skills"
                >
                  Skills
                </TabsTrigger>
              </TabsList>

              {/* Tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <motion.h3
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      className="h3 mb-4 tracking-widest font-medium"
                    >
                      MERN Stack Developer
                    </motion.h3>
                    <motion.p
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="subtitle max-w-xl mx-auto xl:mx-0 tracking-wider"
                    >
                      Hello, I'm Mohammad Aqib, an aspiring Mern Stack Developer
                      with a strong desire to create visually appealing and
                      user-friendly websites. I may be new to the profession,
                      but I bring a fresh perspective and an insatiable goal to
                      grow and achieve in the domain of web development.
                    </motion.p>

                    {/* Icons */}
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5, delay: 0.85 }}
                      className="grid xl:grid-cols-2 gap-4 mb-12"
                    >
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center w-[350px] gap-x-4 mx-auto xl:mx-0 tracking-wider"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div className="text-left">{item.text}</div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </TabsContent>

                {/* Qualification */}
                <TabsContent value="qualification">
                  <div>
                    <motion.h3
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5, delay: 0 }}
                      className="h3 mb-8 text-center xl:text-left tracking-widest font-medium"
                    >
                      My Awesome Journey
                    </motion.h3>

                    {/* Education & Experience */}
                    <div className="grid xl:grid-cols-2 gap-y-8">
                      {/* Education */}
                      <div className="flex flex-col gap-y-6 mb-6">
                        <motion.div
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: 100 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="flex gap-x-4 items-center text-[22px] text-primary"
                        >
                          <FaGraduationCap size={28} />
                          <h4 className="capitalize font-medium tracking-[2px]">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </motion.div>
                        {/* List */}
                        <motion.div
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: 100 }}
                          transition={{ duration: 0.5, delay: 0.45 }}
                          className="flex flex-col gap-y-8"
                        >
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[138px] w-[3px] bg-border relative ml-2 tracking-wider">
                                    <div className="w-[11px] h-[11px] bg-primary absolute -left-[5px] rounded-full group-hover:translate-y-[136px] transition-all duration-500"></div>

                                    <div className="ml-4 w-[200px] font-medium text-[18px] mb-4 text-muted-foreground leading-none ">
                                      {university}
                                    </div>
                                    <div className="ml-4 mb-4 w-[200px] text-[16.5px] font-light text-muted-foreground leading-6">
                                      {qualification}
                                    </div>
                                    <div className="ml-4 w-[200px] text-base font-medium leading-6">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </motion.div>
                      </div>

                      {/* Experience */}
                      <div className="flex flex-col gap-y-3">
                        <motion.div
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: 100 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="flex gap-x-4 items-center text-[22px] text-primary"
                        >
                          <Briefcase size={28} />
                          <h4 className="capitalize tracking-[2px] font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </motion.div>
                        {/* List */}
                        <motion.div
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: 100 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          className="flex flex-col gap-y-8"
                        >
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { fresher, company, qualification, years } =
                                item;
                              return (
                                <div
                                  className="mt-3 flex gap-x-8 group"
                                  key={index}
                                >
                                  <div className="h-[90px] w-[3px] bg-border relative ml-2 tracking-wider">
                                    <div className="w-[11px] h-[11px] bg-primary absolute -left-[5px] rounded-full group-hover:translate-y-[90px] transition-all duration-500"></div>

                                    <div className="ml-4 w-[200px] font-medium text-[18px] leading-none text-muted-foreground mb-4">
                                      {fresher}
                                    </div>
                                    <div className="ml-4 w-[200px] text-[16.5px] font-light leading-none mb-4 text-muted-foreground">
                                      {company}
                                    </div>
                                    <div className="ml-4 mb-4 w-[200px] text-[16.5px] leading-none font-light text-muted-foreground">
                                      {qualification}
                                    </div>
                                    <div className="ml-4 w-[200px] text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <motion.h3
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5, delay: 0 }}
                      className="h3 mb-8 text-center xl:text-left tracking-widest font-medium"
                    >
                      My Technical Proficiency
                    </motion.h3>

                    {/* Skills */}
                    <div>
                      <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="flex gap-x-4 mb-4 items-center text-[22px] text-primary"
                      >
                        <FaGraduationCap />
                        <h4 className="capitalize font-medium tracking-[2.5px]">
                          {getData(skillData, "skills").title}
                        </h4>
                      </motion.div>
                      <div className="border-b border-[1px] mb-4"></div>
                      <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap gap-8 justify-center xl:justify-start"
                      >
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const {
                              htmlCss,
                              JS,
                              dataBase,
                              node,
                              express,
                            } = item;
                            return (
                              <div
                                className="w-[220px] h-[220px] text-center xl:text-left mx-auto xl:mx-0 group"
                                key={index}
                              >
                                <div className="h-full w-full flex flex-col  justify-center">
                                  <div className="h-[145px] w-[3px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] bg-primary absolute -left-[5px] rounded-full group-hover:translate-y-[143px] transition-all duration-500"></div>

                                    <div className="ml-4 text-lg w-[200px] font-normal text-muted-foreground pb-2">
                                      {htmlCss}
                                    </div>
                                    <div className="ml-4 text-lg w-[200px] font-normal text-muted-foreground pb-2">
                                      {JS}
                                    </div>
                                    <div className="ml-4 text-lg w-[200px] font-normal text-muted-foreground pb-2">
                                      {node}
                                    </div>
                                    <div className="ml-4 text-lg w-[200px] font-normal text-muted-foreground pb-2">
                                      {express}
                                    </div>
                                    <div className="ml-4 text-lg w-[200px] font-normal text-muted-foreground pb-2">
                                      {dataBase}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </motion.div>
                    </div>

                    {/* Tools */}
                    <div className="mt-10">
                      <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex gap-x-4 mb-4 items-center text-[22px] text-primary"
                      >
                        <FaGraduationCap />
                        <h4 className="text-xl font-semibold xl:text-left capitalize tracking-[2.5px]">
                          {getData(skillData, "tools").title}
                        </h4>
                      </motion.div>
                      <div className="border-b border-[1px] mb-4"></div>
                      <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="flex gap-x-8 sm:gap-x-2 py-2 justify-center xl:justify-start"
                      >
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath, duration } = item; // extract duration for each tool
                          return (
                            <motion.div
                              variants={iconVariants(duration)} // pass unique duration here
                              initial="initial"
                              animate="animate"
                              className="w-[300px] h-[120px] lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] sm:w-[70px] sm:h-[70px] sm:p-2 border-[2px] rounded-full flex items-center justify-center dark:bg-white/80 bg-white/50"
                              key={index}
                            >
                              <TooltipProvider>
                                <Tooltip
                                  delayShow={100}
                                  delayHide={100}
                                  effect="solid"
                                  place="top"
                                >
                                  <TooltipTrigger>
                                    <Image
                                      className="scale-100 hover:scale-75 transition-all duration-300"
                                      src={imgPath}
                                      alt="Tool Image"
                                      width={90}
                                      height={90}
                                      objectFit="contain"
                                    />
                                  </TooltipTrigger>
                                  <TooltipContent className="mb-2 bg-popover text-center bg-black dark:bg-white/80 text-primary font-medium text-[1rem] px-auto">
                                    <p>{item.tooltip}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;