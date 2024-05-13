"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import Image from "next/image";
import logo from "../../../../public/assets/logo.svg";
import "./header.style.css";
import { navLinks } from "@/app/components/constants/constants";
import Button from "../common/components/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="pt-8">
          <Image src={logo} alt="logo" />
        </div>
        <div className="nav-links ">
          {navLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </div>
        <div>
          <span className="desktop-button">
            <Button color={"button-orange"} />
          </span>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} mobile-nav `}>
          <ul className="flex-col items-center gap-1">
            {navLinks.map((nav, index) => (
              <li key={index}> {nav}</li>
            ))}
          </ul>
        </div>
        <span onClick={toggleNavbar} className="ham-burger">
          {!isOpen ? <IoMenu size={30} /> : <IoClose size={30} />}
        </span>
      </nav>
    </div>
  );
}
