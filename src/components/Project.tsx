import Image from "next/image";
import React from "react";
interface ProjectProps {
  title: string;
  description: string;
  img: string;
}
[];

const Project = ({ title, description, img }: ProjectProps) => {
  return (
    <div
      className={`bg-violet-600 flex flex-col gap-3 relative  text-white md:w-[48rem] items-center justify-center p-5 lg:p-10`}
    >
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {title}
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-lg">
        {description}
      </p>
      <p></p>
      <Image
        src={img}
        height={400}
        width={400}
        quality={50}
        alt="product image"
      />
    </div>
  );
};

export default Project;
