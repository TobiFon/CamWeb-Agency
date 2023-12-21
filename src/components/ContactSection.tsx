import React from "react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section className="  flex flex-col my-10 items-center justify-center border-b space-y-10 pb-10">
      <div className="text-center space-y-4">
        <h2 className="scroll-m-20 text-center leading-relaxed tracking-wider pb-2 text-3xl font-semibold  first:mt-0">
          Need help with a Project?
          <span className="text-primary block">{"Let's Talk!"}</span>
        </h2>
        <Button className="bg-violet-600 text-white text-2xl p-7">
          CONTACT US
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
