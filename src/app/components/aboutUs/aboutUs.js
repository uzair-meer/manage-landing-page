import { features } from "@/app/components/constants/constants";
import Button from "../common/components/button";
import AboutUsCard from "./aboutUsCard";
import "./aboutUs.style.css";
Button;
export default function AboutUs() {
  return (
    <div className="feature">
      <div className="flex space-between">
        <div className="flex-col about-content w-50 ">
          <h1 className="w-28 f-34">What&apos;s different about Manage? </h1>
          <p className="gray w-24 mt-4 line-15">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="flex-col feature gap-2 w-50">
          {features.map((feature, index) => (
            <AboutUsCard
              key={index}
              id={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
