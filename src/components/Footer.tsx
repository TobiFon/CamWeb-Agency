"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex flex-col items-center justify-center pb-10 mt-10  border-b">
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-center">
        © {currentYear} CamWeb. All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
