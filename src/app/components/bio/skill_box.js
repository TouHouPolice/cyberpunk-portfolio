import React from "react";
import { Frame } from "arwes";
import Words from "arwes/lib/Words";

export default function SkillBox(props) {
  const { name, show = true } = props;

  return (
    <Frame
      level={0}
      layer="secondary"
      noBackground={true}
      show={show}
      animate={true}
    >
      {anim => (
        <div className="skill-box">
          <span className=" text-uppercase">
            <Words
              className="cyber-red-glow"
              layer="secondary"
              animate={true}
              show={anim.entered}
            >
              {name}
            </Words>
          </span>
        </div>
      )}
    </Frame>
  );
}
