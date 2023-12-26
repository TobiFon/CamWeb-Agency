import React from "react";
import WhyUs from "./WhyUs";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const WhySection = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-10 my-10 space-y-10 border-b ">
      <h2 className="w-full max-w-3xl pl-3 text-3xl font-semibold tracking-tight border-l-2 scroll-m-20 first:mt-0 border-violet-600 ">
        <span className="text-violet-600"> Why</span> CamWeb?
      </h2>
      <div className="w-full space-y-10 lg:max-w-3xl bg-violet-950 text-slate-100 p-7 lg:p-14">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
            We get things done, right and fast
          </h3>
        </div>
        <div>
          <WhyUs />
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
            Ready to elevate your online Presence?
          </h3>
          <h4 className="scroll-m-20 text-xl  tracking-tight leading-7 [&:not(:first-child)]:mt-3">
            Contact us for consultation tailored to your bussiness needs
          </h4>
          <Link href={"/contact"}>
            <Button className="mt-6 text-sm text-black bg-white ">
              LETS TALK <ArrowRight className="ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
