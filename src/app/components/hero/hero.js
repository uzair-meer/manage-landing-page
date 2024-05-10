import Image from "next/image";
import Button from "../common/components/button";
import intro from "../../../../public/assets/illustration-intro.svg";

export default function Hero() {
  return (
    <div className="container mt-40">
      <div className="flex">
        <div className="flex-col  w-50 mt-26 line-1">
          <h1 className="w-70 line-1 f-46">
            Bring everyone together to build better products
          </h1>
          <p className="gray w-70 mt-48 line-175">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="mt-48">
            <Button color={"button-orange"} />
          </div>
        </div>
        <div className="w-50">
          <Image alt="illustration" src={intro} />
        </div>
      </div>
    </div>
  );
}
