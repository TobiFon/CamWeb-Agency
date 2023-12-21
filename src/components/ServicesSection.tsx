import React from "react";
import Services from "./Services";
import { Button } from "./ui/button";

const ServicesSection = () => {
  return (
    <section className="  flex flex-col my-10 items-center justify-center border-b pb-10 space-y-10 ">
      <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0 border-l-2 border-violet-600 pl-3 w-full max-w-3xl ">
        What <span className="text-violet-600">We excel at</span>
      </h2>
      <Services />

      <Button
        variant={"outline"}
        size={"lg"}
        className="text-primary border-primary text-xl"
      >
        View All Services
      </Button>
    </section>
  );
};

export default ServicesSection;
