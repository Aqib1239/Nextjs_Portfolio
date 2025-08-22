"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projectData = [
  {
    image: "/work/calculator1.png",
    category: "Frontend",
    name: "Dynamic Calculator",
    description:
      "I've developed a calculator using HTML, CSS, and JavaScript, featuring a toggle switch for switching between dark and light modes. This dynamic project allows users to perform calculations seamlessly while providing the option to switch between two different visual themes for optimal viewing comfort.",
    link: "https://calculatordark.netlify.app/",
    github: "",
    priority: true,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "/work/ecommerce1.png",
    category: "Frontend",
    name: "Cara Ecommerce",
    description:
      "I've developed a responsive ecommerce website using HTML, CSS, and JavaScript. The site offers a seamless shopping experience, allowing users to browse products effortlessly on any device. With intuitive design and smooth functionality, it ensures a user-friendly interface.",
    link: "https://simple-deploy-ecommerce-website.netlify.app/",
    github: "https://github.com/Aqib1239/Ecommerce-website",
    priority: true,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "/work/passwordGen.png",
    category: "Frontend",
    name: "Password Generator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum consectetur obcaecati! Asperiores, id odit.",
    link: "https://passw0rdgenerat0r11.netlify.app/",
    github: "https://github.com/Aqib1239/PasswordGenerator",
    priority: false,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "/work/news-app.png",
    category: "Frontend",
    name: "News Application",
    description:
      "I've developed a responsive News Application using HTML, CSS, JavaScript, and ReactJS. This platform delivers real-time news updates efficiently. Its responsiveness ensures seamless user experience across devices.",
    link: "",
    github: "",
    priority: false,
    techStack: ["HTML", "CSS", "JavaScript", "ReactJS", "API"],
  },
  {
    image: "/work/weather-app.png",
    category: "Frontend",
    name: "Weather Application",
    description:
      "I developed a responsive weather app using ReactJS and OpenWeatherMap API. The app allows users with two tabs: one for current weather using Geolocation API and another for searching weather by city. It uses the OpenWeatherMap API to display real-time weather details like temperature, humidity, wind speed, and cloudiness. The app is user-friendly and works seamlessly across different devices.",
    link: "https://weatherapp7777.netlify.app/",
    github: "https://github.com/Aqib1239/weatherApp",
    priority: false,
    techStack: ["HTML", "CSS", "JavaScript", "ReactJS", "API"],
  },
  {
    image: "/work/tic-tac.png",
    category: "Frontend",
    name: "Tic-tac-toe Game",
    description:
      "I've built a responsive Tic-tac-toe game using HTML, CSS, and JavaScript. Players can enjoy the classic game on any device, thanks to its responsive design. The project showcases my skills in front-end development, offering a user-friendly experience with intuitive gameplay mechanics.",
    link: "https://tictactoeeplay.netlify.app/",
    github: "https://github.com/Aqib1239/TicTacToe_game",
    priority: false,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "",
    category: "Full Stack ",
    name: "Full Stack Project Not Found",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum consectetur obcaecati! Asperiores, id odit.",
    link: "",
    github: "",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Page = () => {
  const [categories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) =>
    category === "all projects" ? project : project.category === category
  );

  // animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen pt-12">
      <div className="mx-4 lg:mx-auto lg:container">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="section-title mb-8 xl:mb-16 text-center mx-auto"
        >
          My Projects
        </motion.h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
              {categories.map((cat, index) => (
                <TabsTrigger
                  onClick={() => setCategory(cat)}
                  key={index}
                  value={cat}
                  className="tracking-wider capitalize w-[162px] md:w-auto"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {/* Tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TabsContent value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              </motion.div>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Page;