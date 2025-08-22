"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../app/swiper-custom.css";

const projectData = [
  {
    id: 1,
    image: "/work/calculator1.png",
    category: "Frontend",
    name: "Dynamic Calculator",
    description:
      "I've developed a calculator using HTML, CSS, and JavaScript, featuring a toggle switch for switching between dark and light modes.",
    link: "https://calculatordark.netlify.app/",
    github: "",
    priority: true,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    image: "/work/news-app.png",
    category: "Frontend",
    name: "News Application",
    description:
      "I've developed a responsive News Application using HTML, CSS, JavaScript, and ReactJS.",
    link: "",
    github: "",
    priority: false,
    techStack: ["HTML", "CSS", "JavaScript", "ReactJS", "API"],
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
  {
    id: 7,
    image: "",
    category: "Backend",
    name: "Backend Project Not Found",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum consectetur obcaecati!",
    link: "",
    github: "",
    priority: false,
    techStack: [],
  },
  {
    id: 8,
    image: "",
    category: "Full Stack",
    name: "Full Stack Project Not Found",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum consectetur obcaecati!",
    link: "",
    github: "",
    priority: false,
    techStack: [],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-10 md:py-16">
      {/* Gradient border with opacity fade from sides */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/80 to-transparent dark:via-gray-700/80"></div>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="section-title mb-4 text-center mx-auto"
          >
            Latest Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my recent projects, showcasing a diverse range of skills in
            web development and problem-solving.
          </p>
        </motion.div>

        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              View All Projects
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-end gap-4 mb-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Previous projects"
            >
              <ChevronLeft
                size={24}
                className="text-gray-700 dark:text-gray-300"
              />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Next projects"
            >
              <ChevronRight
                size={24}
                className="text-gray-700 dark:text-gray-300"
              />
            </button>
          </div>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
              el: ".projects-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            className="pb-12"
          >
            {projectData.map((project) => (
              <SwiperSlide key={project.id} className="mb-4">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="projects-pagination flex justify-center gap-2 mt-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
