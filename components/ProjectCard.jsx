'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, GithubIcon, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader>
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            alt={project.name}
            width={247}
            height={250}
            priority
          />
          {/* buttons */}
          <div className="flex gap-x-4">
            <Link href={project.link} className="dark:bg-secondary bg-primary w-[54px] h-[54px] rounded-full flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ">
            <Link2Icon className="text-white" />
            </Link>

            <Link href={project.github} className="dark:bg-secondary bg-primary w-[54px] h-[54px] rounded-full flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ">
            <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-[300px] px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <motion.h4
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h4 mb-1">{project.name}</motion.h4>
        <motion.p 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-muted-foreground text-lg">{project.description}</motion.p>
      </div>
    </Card>
  );
};

export default ProjectCard;
