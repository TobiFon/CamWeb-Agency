"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex flex-col items-center justify-center pb-10 my-10 space-y-10 border-b ">
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-xl">
        © {currentYear} CamWeb. All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;