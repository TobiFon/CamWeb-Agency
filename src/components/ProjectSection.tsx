import React from "react";
import Project from "./Project";
import { Button } from "./ui/button";
import Link from "next/link";

const Projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/1.png",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/2.png",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/3.png",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/4.png",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/5.png",
  },
];
const ProjectSection = () => {
  return (
    <section className="  flex flex-col my-14 items-center justify-center border-b pb-10">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-right text-violet-600 border-r-2 border-violet-600 pr-3 w-full max-w-3xl">
        FEATURED PROJECTS
      </h4>
      <div className="space-y-10 mt-10">
        {Projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            img={project.img}
            description={project.description}
          />
        ))}
      </div>
      <Button className="bg-black text-white dark:text-black dark:bg-white text-xl mt-10 mb-5">
        <Link href={"/projects"}>More Projects</Link>
      </Button>
      <Button className="bg-violet-600 text-white text-xl">Chat With Us</Button>
    </section>
  );
};

export default ProjectSection;
