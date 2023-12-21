"use client";
import Link from "next/link";
import React from "react";
import { XIcon, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const SideBar = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },

    {
      name: "Services",
      href: "/services",
    },

    {
      name: "Work",
      href: "/work",
    },

    {
      name: "Pricing",
      href: "/pricing",
    },
  ];
  const MenuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 0, 0.39, 0],
      },
    },
  };
  const LinkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    animate: {
      y: "0",
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  const ulVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.3,
      },
    },
  };
  const bottomVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={MenuVariants}
      animate="animate"
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-screen h-full px-1 py-5 text-white origin-top  bg-primary bg-violet-600"
    >
      <Button onClick={() => setIsOpen(false)} className="absolute right-3">
        <XIcon />
      </Button>

      <motion.ul
        variants={ulVariants}
        animate="animate"
        initial="initial"
        exit="initial"
        className="flex flex-col items-center justify-center w-full h-full gap-3"
      >
        {links.map((link, index) => {
          return (
            <div key={index} className="overflow-hidden ">
              <motion.li variants={LinkVariants} className="text-4xl">
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </motion.li>
            </div>
          );
        })}
        <motion.div
          variants={bottomVariants}
          className="absolute flex flex-col items-center justify-center w-full gap-2 bottom-5"
        >
          <p>Have a project for us?</p>
          <Button className="text-sm text-black bg-white ">
            LETS TALK <ArrowRight className="ml-3" />
          </Button>
        </motion.div>
      </motion.ul>
    </motion.div>
  );
};

export default SideBar;
