import React from "react";
import Button from "../common/components/button";
import { team } from "@/app/components/constants/constants";
import Card from "./card";
import "./testimonial.style.css";
export default function Testimonials() {
  return (
    <div className="container testimonials  ">
      <h4 className="center f-34 line-25">
        What&apos;s different about Manage?
      </h4>
      <div className="flex manage p-20">
        {team.map((team, index) => (
          <Card key={team} name={team.name} img={team.img} quote={team.quote} />
        ))}
      </div>

      <div className="my-4 content-center flex ">
        <Button color={"button-orange"} />
      </div>
    </div>
  );
}
