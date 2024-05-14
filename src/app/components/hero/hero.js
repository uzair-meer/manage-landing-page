import Image from "next/image";
import Button from "../common/components/button";
import intro from "../../../../public/assets/illustration-intro.svg";
import "./hero.style.css";
export default function Hero() {
  return (
    <div className="container hero w-80 mt-40">
      <div className="flex   hero-content">
        <div className="flex-col  w-50 mt-26 line-1">
          <h1 className="w-28 line-1 f-46">
            Bring everyone together to build better products
          </h1>
          <p className="gray w-70 mt-48 line-175">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="mt-48 hero-button">
            <Button color={"button-orange"} />
          </div>
        </div>
        <div>
          <Image alt="illustration" src={intro} className="hero-img" />
        </div>
      </div>
    </div>
  );
}
