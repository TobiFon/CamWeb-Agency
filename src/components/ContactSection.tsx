import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-10 my-10 space-y-10 border-b ">
      <div className="text-center">
        <h2 className="pb-2 text-3xl font-semibold leading-relaxed tracking-wider text-center my-5 scroll-m-20 first:mt-0">
          Need help with a Project?
          <span className="block text-primary mt-3">{"Let's Talk!"}</span>
        </h2>
        <Link href={"/contact"}>
          <Button size={"lg"} className="text-xl text-white bg-violet-600 ">
            CONTACT US
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
