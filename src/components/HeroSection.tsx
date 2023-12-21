import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className=" h-[80vh] lg:h-[50vh] flex justify-center flex-col items-center space-y-4 w-full my-14">
      <div className="max-w-3xl text-center space-y-3">
        <h2 className=" leading-relaxed scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Empowering
          <span className=" text-violet-600 max-md:block ">
            {"  "}
            Digitial Excellence
          </span>
          {"  "}
          in Cameroon
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Elevate your bussiness and {"brand's"} online presence with innovative
          Tech solutions.
        </p>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight"></h3>
      </div>
      <Button className="bg-violet-600 text-white text-xl">
        View Our Work <ArrowRight className="ml-3" />
      </Button>
    </section>
  );
};

export default HeroSection;
