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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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
      className="h-full" // Ensure the container takes full height
    >
      <Card className="group overflow-hidden relative h-[500px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
        <CardHeader className="p-0 flex-shrink-0">
          {" "}
          {/* Prevent header from growing */}
          {/* Image container with fixed aspect ratio */}
          <motion.div
            className="relative w-full h-52 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-900 overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            whileHover="hover"
            transition={{ duration: 0.4 }}
          >
            {project.image ? (
              <div className="relative w-full h-full">
                {" "}
                {/* Control image dimensions */}
                <Image
                  className="w-full h-full transition-all duration-500 group-hover:scale-105"
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.priority}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700">
                <span className="text-gray-500 dark:text-gray-400">
                  No image available
                </span>
              </div>
            )}

            {/* Action buttons */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

        <div className="p-6 flex-grow">
          <Badge className="mb-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-0">
            {project.category}
          </Badge>

          <motion.h3
            className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {project.name}
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* Tech stack badges */}
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
