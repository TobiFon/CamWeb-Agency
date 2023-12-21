"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./ThemeToggler";
import { AlignRight } from "lucide-react";
import { Button } from "./ui/button";
import SideBar from "./SideBar";
import { AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex basis-full items-center h-[5vh] justify-between px-3 lg:container mt-5">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="logo image" height={40} width={40} />
        <h4>CamWeb</h4>
      </Link>
      <ul className="hidden gap-4 lg:flex">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>
        <li>
          <Link href={"/work"}>Work</Link>
        </li>
        <li>
          <Link href={"/pricing"}>Pricing</Link>
        </li>
      </ul>
      <ModeToggle />
      <div className="z-20 lg:hidden">
        <Button onClick={() => setIsOpen(true)}>
          <AlignRight />
        </Button>
        <AnimatePresence>
          {isOpen && <SideBar setIsOpen={setIsOpen} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
