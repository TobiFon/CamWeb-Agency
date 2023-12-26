import { CheckCheck } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

const Modal = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className=" absolute h-screen w-full top-0 left-0 right-0 bg-background/40 flex items-center justify-center z-10">
      <div className=" bg-foreground text-background max-w-3xl px-20 py-16 text-center">
        <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight flex gap-3 text-violet-600 justify-center">
          <CheckCheck className=" h-10" size={40} /> Message Sent
        </h3>

        <p className="leading-7 text-lg [&:not(:first-child)]:mt-6">
          Thanks for reaching out. We will get back to you asap
        </p>
        <Button
          onClick={() => setOpen(false)}
          className=" mt-7 bg-background text-foreground w-full"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Modal;
