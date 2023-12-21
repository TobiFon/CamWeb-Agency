"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Review from "./Review";
import Autoplay from "embla-carousel-autoplay";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const carouselContent = [
    {
      img: "/ReviewImgs/1/png",
      title: "title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque natus inventore provident cupiditate iusto harum expedita repellendus quaerat nam sint.",
      role: "role",
    },
    {
      img: "/ReviewImgs/1/png",
      title: "title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque natus inventore provident cupiditate iusto harum expedita repellendus quaerat nam sint.",
      role: "role",
    },
    {
      img: "/ReviewImgs/1/png",
      title: "title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque natus inventore provident cupiditate iusto harum expedita repellendus quaerat nam sint.",
      role: "role",
    },
    {
      img: "/ReviewImgs/1/png",
      title: "title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque natus inventore provident cupiditate iusto harum expedita repellendus quaerat nam sint.",
      role: "role",
    },
    {
      img: "/ReviewImgs/1/png",
      title: "title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque natus inventore provident cupiditate iusto harum expedita repellendus quaerat nam sint.",
      role: "role",
    },
    {
      img: "/ReviewImgs/1/png",
      title: "title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque natus inventore provident cupiditate iusto harum expedita repellendus quaerat nam sint.",
      role: "role",
    },
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {carouselContent.map((content, index) => (
          <div className="embla__slide" key={index}>
            <Review
              title={content.title}
              role={content.role}
              description={content.description}
              img={content.img}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
export default EmblaCarousel;
