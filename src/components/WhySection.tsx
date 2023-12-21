import React from "react";
import WhyUs from "./WhyUs";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const WhySection = () => {
  return (
    <section className="  flex flex-col my-10 items-center justify-center border-b space-y-10 pb-10">
      <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0 border-l-2 border-violet-600 pl-3 w-full max-w-3xl ">
        <span className="text-violet-600"> Why</span> CamWeb?
      </h2>
      <div className=" bg-violet-950 text-neutral-300 max-w-3xl p-7 lg:p-14  space-y-10">
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            We get things done, right and fast
          </h3>
        </div>
        <div>
          <WhyUs />
        </div>
        <div className="text-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Ready to elevate your online Presence?
          </h3>
          <h4 className="scroll-m-20 text-xl  tracking-tight leading-7 [&:not(:first-child)]:mt-3">
            Contact us for consultation tailored to your bussiness needs
          </h4>
          <Button className="bg-white text-black text-sm mt-6 ">
            LETS TALK <ArrowRight className="ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
