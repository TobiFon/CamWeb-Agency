import React from "react";

import { ContactForm } from "./ContactForm";
import { MessageSquareIcon } from "lucide-react";

const ContactPage = () => {
  return (
    <section className=" flex flex-col my-14 items-center justify-center  pb-2 space-y-10  p-10 md:h-[75vh]">
      <h2 className="scroll-m-20 w-full max-w-3xl pb-2 text-4xl font-extrabold tracking-widest gap-4 first:mt-0 flex items-center">
        <MessageSquareIcon className="h-15 stroke-violet-600" size={50} />
        {"let's"} talk!
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-3xl text-lg w-full border-l-2 pl-3 border-violet-600">
        Tell us all about your project right here, or send us an email at{" "}
        <span className="text-violet-600">camweb@gamil.com</span>
      </p>

      <ContactForm />
    </section>
  );
};

export default ContactPage;
