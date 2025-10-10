"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    hover: { scale: 1, opacity: 1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Card className="group overflow-hidden relative h-[500px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
        <CardHeader className="p-0 flex-shrink-0 relative">
          {/* Image Container */}
          <motion.div
            className="relative w-full h-52 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-900 overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            whileHover="hover"
            transition={{ duration: 0.4 }}
          >
            {project.image ? (
              <Image
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={project.priority}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700">
                <span className="text-gray-500 dark:text-gray-400">
                  No image available
                </span>
              </div>
            )}

            {/* Action buttons for small devices (always visible) */}
            <div className="md:hidden sm:flex absolute inset-0 items-center justify-center gap-4 bg-black/50 duration-300">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 hover:scale-110 transition-colors duration-300"
                >
                  <ExternalLink size={18} />
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 hover:scale-110 transition-colors duration-300"
                >
                  <Github size={18} />
                </Link>
              )}
            </div>

            {/* Action buttons for desktop (hover effect) */}
            <div className="sm:hidden md:flex absolute inset-0 bg-black/50 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.link && (
                <motion.div
                  variants={buttonVariants}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    className="bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </Link>
                </motion.div>
              )}
              {project.github && (
                <motion.div
                  variants={buttonVariants}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </CardHeader>

        {/* Content */}
        <div className="p-4 flex-grow">
          <Badge className="mb-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-0">
            {project.category}
          </Badge>

          <motion.h3
            className="text-xl font-bold mb-1 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {project.name}
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-1 line-clamp-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* Tech Stack */}
        <div className="px-6 pb-6 mt-auto">
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {project?.techStack?.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300 border border-primary text-xs py-1 px-2"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
