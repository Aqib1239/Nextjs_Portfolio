// import React from 'react'
"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
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
      "I have successfully completed my password generator application using ReactJS. It generates secure passwords based on user preferences like length, inclusion of numbers, symbols, and uppercase or lowercase letters. The app is fully functional and optimized for a seamless user experience across different devices.",
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

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative mb-12 xl:mb-48 mt-24">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[325px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title mb-4"
          >
            Latest Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -110 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="subtitle mb-8 "
          >
            Explore my recent projects, showcasing a diverse range of skills in web development and problem-solving.
          </motion.p>
          <motion.div 
          initial={{ opacity: 0, x: -110 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          >
            <Link href="/projects">
              <Button>All Projects</Button>
            </Link>
          </motion.div>
        </div>
        {/* slider */}
        <motion.div 
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="xl-max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[570px] max-w-[1000px] transition-all duration-400"
            slidesPerView={1}
            breakpoints={{
              540: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            // pagination={{ clickable: true }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
              bulletClass: "swiper-pagination-bullet",
            }}
            style={{
              "--swiper-pagination-bullet-inactive-color":
                "mode" === "light" ? "#fff" : "#888",
              "--swiper-pagination-bullet-inactive-opacity": "0.5",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {/* show only first four projects */}
            {projectData.slice(0, 5).map((project, index) => {
              return (
                <div>
                  <SwiperSlide key={project.id}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
