import React from "react";
import Carousel from "./Carousel";

const ReviewSection = () => {
  return (
    <section className="  flex flex-col my-14 items-center justify-center border-b pb-2 space-y-10 h-96">
      <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0 border-l-2 border-violet-600 pl-3 w-full max-w-3xl ">
        <span className="text-violet-600">{"Word's "}</span> on the street
      </h2>
      <div className="w-full max-w-3xl">
        <Carousel />
      </div>
    </section>
  );
};

export default ReviewSection;
