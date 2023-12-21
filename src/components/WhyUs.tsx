import React from "react";

const whyUsList = [
  {
    title: "expertise.",
    description:
      "Our team of skilled developers brings years of expertise to every project",
  },
  {
    title: "Client-Centric Approach.",
    description:
      "We prioritize your goals and collaborate closely to archieve the best results",
  },
  {
    title: "Innovation.",
    description:
      "Stay ahead with cutting-edge technologies and innovative solutions ",
  },
  {
    title: "Support.",
    description:
      "We're here for you post-launch, offering continuous update support and updates",
  },
];
const WhyUs = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 ">
      {whyUsList.map((WhyUs, index) => (
        <div key={index}>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight border-b pb-4 border-white">
            {WhyUs.title}
          </h4>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {WhyUs.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
