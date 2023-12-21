import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
const ServicesList = [
  {
    title: "Website Design and Development",
    description:
      "Craft visually stunning websites that captivate your audience and reflect the essence of your brand. Our development ensures a seamless user experience across devices.",
  },
  {
    title: "Mobile App Development",
    description:
      "Extend your reach to mobile users with custom app development whether IOS or Android, we create funtional and engaging mobile apps tailored to your business objectives",
  },
  {
    title: "E-Commerce Excellence",
    description:
      "Elevate your online business with customized e-commerce solutions. We create secure and user-friendly online stores that drive conversions and enhance the shopping experience.",
  },

  {
    title: "Bespoke Web Applications",
    description:
      "Tailor-made web applications designed to meet your unique business requirements. Our solutions streamline processes, enhance productivity, and empower your digital presence.",
  },
  {
    title: "Mobile-First Responsiveness",
    description:
      "Ensure your website adapts flawlessly to various devices. Our mobile-first approach guarantees an engaging and responsive experience on smartphones, tablets, and desktops.",
  },

  {
    title: "trategic SEO and Digital Presence",
    description:
      "Boost your online visibility through strategic SEO and digital marketing. We optimize your website to rank higher on search engines, driving targeted traffic to your online platform.",
  },
  {
    title: "Continuous Support and Maintenance",
    description:
      "Provide ongoing support to keep your website secure, up-to-date, and optimized. Our maintenance services ensure your digital presence remains reliable and efficient.",
  },
  {
    title: "Hosting and Domain Solutions",
    description:
      "Offer reliable hosting and domain registration services. Ensure your website is hosted on a secure and high-performance platform, backed by a memorable domain name.",
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl  text-background">
      {ServicesList.map((service, index) => (
        <Card key={index} className="p-5 bg-background/50">
          <CardHeader>
            <CardTitle>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight ">
                {service.title}
              </h4>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {service.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Services;
