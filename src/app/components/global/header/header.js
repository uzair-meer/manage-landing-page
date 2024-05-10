import Image from "next/image";
import logo from "../../../../../public/assets/logo.svg";
import Button from "../../common/components/button";
import "./header.style.css";
import { navLinks } from "@/app/components/constants/constants";

export default function Header() {
  return (
    <div className="container">
      <nav className="nav-bar  ">
        <div className="pt-8">
          <Image src={logo} alt="logo" />
        </div>
        <div className="nav-links ">
          {navLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </div>
        <div>
          <Button color={"button-orange"} />
        </div>
      </nav>
    </div>
  );
}
