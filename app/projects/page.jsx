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
  },
  {
    image: "/work/ecommerce1.png",
    category: "Frontend",
    name: "Cara Ecommerce",
    description:
      "I've developed a responsive ecommerce website using HTML, CSS, and JavaScript. The site offers a seamless shopping experience, allowing users to browse products effortlessly on any device. With intuitive design and smooth functionality, it ensures a user-friendly interface.",
    link: "https://simple-deploy-ecommerce-website.netlify.app/",
    github: "https://github.com/Aqib1239/Ecommerce-website",
  },
  {
    image: "/work/passwordGen.png",
    category: "Frontend",
    name: "Password Generator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum consectetur obcaecati! Asperiores, id odit.",
    link: "https://passw0rdgenerat0r11.netlify.app/",
    github: "https://github.com/Aqib1239/PasswordGenerator",
  },
  {
    image: "/work/news-app.png",
    category: "Frontend",
    name: "News Application",
    description:
      "I've developed a responsive News Application using HTML, CSS, JavaScript, and ReactJS. This platform delivers real-time news updates efficiently. Its responsiveness ensures seamless user experience across devices.",
    link: "",
    github: "",
  },
  {
    image: "/work/weather-app.png",
    category: "Frontend",
    name: "Weather Application",
    description:
      "I developed a responsive weather app using ReactJS and OpenWeatherMap API. The app allows users with two tabs: one for current weather using Geolocation API and another for searching weather by city. It uses the OpenWeatherMap API to display real-time weather details like temperature, humidity, wind speed, and cloudiness. The app is user-friendly and works seamlessly across different devices.",
    link: "https://weatherapp7777.netlify.app/",
    github: "https://github.com/Aqib1239/weatherApp",
  },
  {
    image: "/work/tic-tac.png",
    category: "Frontend",
    name: "Tic-tac-toe Game",
    description:
      "I've built a responsive Tic-tac-toe game using HTML, CSS, and JavaScript. Players can enjoy the classic game on any device, thanks to its responsive design. The project showcases my skills in front-end development, offering a user-friendly experience with intuitive gameplay mechanics.",
    link: "https://tictactoeeplay.netlify.app/",
    github: "https://github.com/Aqib1239/TicTacToe_game",
  },
  {
    image: "",
    category: "Backend",
    name: "Backend Project Not Found",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum consectetur obcaecati! Asperiores, id odit.",
    link: "",
    github: "",
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

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="section-title mb-8 xl:mb-16 text-center mx-auto"
        >
          My Projects
        </motion.h2>

        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
          >
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
              {categories.map((category, index) => {
                return (
                  <TabsTrigger
                    onClick={() => setCategory(category)}
                    key={index}
                    value={category}
                    className="tracking-wider capitalize w-[162px] md:w-auto"
                  >
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </motion.div>
          {/* tabs content */}
          <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg xl:mt-8 grid grid:cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
