import React from "react";
import ServicesSection from "./ServicesSection";
import Services from "./Services";

const ServicesPage = () => {
  return (
    <div>
      <section className="  flex flex-col my-10 items-center justify-center border-b pb-10 space-y-10 ">
        <Services />
      </section>
    </div>
  );
};

export default ServicesPage;
