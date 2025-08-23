"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    image: "/work/quick-talk.png",
    category: "Full Stack",
    name: "Quick Talk - Live Chat Application",
    description:
      "I've built a responsive Live Chat Application using MERN Stack and Socket.io, enabling real-time communication between users, offering a seamless experience for online conversations.",
    link: "https://quicktalk-application.onrender.com/",
    github: "https://github.com/Aqib1239/chat-application",
    priority: true,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Socket.io",
    ],
  },
  {
    id: 2,
    image: "/work/mern-blog.png",
    category: "Full Stack",
    name: "MERN Blog Application",
    description:
      "I've built a responsive Blog Application using MERN Stack, enabling users to create, read, update, and delete blog posts, offering a dynamic and user-friendly experience for blogging.",
    link: "https://mern-blog-app-olive.vercel.app/",
    github: "https://github.com/Aqib1239/mern-blog-app",
    priority: true,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
  },
  {
    id: 3,
    image: "/work/ecommerce1.png",
    category: "Frontend",
    name: "Cara Ecommerce",
    description:
      "I've developed a responsive ecommerce website using HTML, CSS, and JavaScript.",
    link: "https://simple-deploy-ecommerce-website.netlify.app/",
    github: "https://github.com/Aqib1239/Ecommerce-website",
    priority: true,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    image: "/work/passwordGen.png",
    category: "Frontend",
    name: "Password Generator",
    description:
      "I have successfully completed my password generator application using ReactJS.",
    link: "https://passw0rdgenerat0r11.netlify.app/",
    github: "https://github.com/Aqib1239/PasswordGenerator",
    priority: false,
    techStack: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  {
    id: 5,
    image: "/work/weather-app.png",
    category: "Frontend",
    name: "Weather Application",
    description:
      "I developed a responsive weather app using ReactJS and OpenWeatherMap API.",
    link: "https://weatherapp7777.netlify.app/",
    github: "https://github.com/Aqib1239/weatherApp",
    priority: false,
    techStack: ["HTML", "CSS", "JavaScript", "ReactJS", "API"],
  },
  {
    id: 6,
    image: "/work/tic-tac.png",
    category: "Frontend",
    name: "Tic-tac-toe Game",
    description:
      "I've built a responsive Tic-tac-toe game using HTML, CSS, and JavaScript.",
    link: "https://tictactoeeplay.netlify.app/",
    github: "https://github.com/Aqib1239/TicTacToe_game",
    priority: false,
    techStack: ["HTML", "CSS", "JavaScript"],
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
            <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[500px] mb-12 mx-auto md:border dark:border-none">
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