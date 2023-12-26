import React from "react";
import AboutSection from "./AboutSection";
import WhySection from "./WhySection";
import ContactSection from "./ContactSection";
import { Button } from "./ui/button";
import { MailIcon, MessageSquare } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center my-14 space-y-10">
      <div className=" border-b-4 pb-7">
        <h2 className="w-full max-w-3xl text-3xl font-semibold tracking-tightscroll-m-20 first:mt-0 text-primary">
          Discover CamWeb
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-3xl ">
          Welcome to CamWeb, where creativity meets functionality, and digital
          dreams become reality. As a leading web development agency in
          Cameroon, we take pride in our journey of transforming visions into
          captivating online experiences.
        </p>
      </div>
      <div className=" border-b-4 pb-7">
        <h2 className="w-full max-w-3xl mt-10 text-3xl font-semibold tracking-tightscroll-m-20 first:mt-0 text-primary">
          Our Story
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-3xl ">
          At CamWeb our story is woven with the threads of creativity,
          technology, and a genuine love for the digital realm. Established in
          2023, we embarked on a mission to redefine web development in
          Cameroon. From our humble beginnings, we have evolved into a dynamic
          team of professionals who thrive on pushing boundaries and embracing
          the ever-changing digital landscape.
        </p>
      </div>
      <div className=" border-b-4 pb-7">
        <h2 className="w-full max-w-3xl mt-10 text-3xl font-semibold tracking-tightscroll-m-20 first:mt-0 text-primary">
          {"Let's "} build together
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-3xl ">
          Whether you are a startup dreaming of a digital debut or an
          established business seeking a fresh online perspective, we are here
          for you. {"Let's"}
          collaborate, ideate, and build something extraordinary together.
        </p>
        <Link href={"/contact"}>
          <div className="flex max-w-3xl gap-1 w-full items-center justify-center">
            <Button
              size={"lg"}
              className="max-w-3xl mt-10 text-xl text-white bg-violet-600"
            >
              CONTACT US
            </Button>
            <Button
              size={"lg"}
              className="max-w-3xl mt-10 text-xl text-white bg-violet-600"
            >
              <MailIcon />
            </Button>
          </div>
        </Link>
      </div>
      <WhySection />
    </div>
  );
};

export default AboutPage;
