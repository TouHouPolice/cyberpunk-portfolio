import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { avatar } from "../../assets/images";
import DetailTable from "./bio/detail_table";
import SkillBox from "./bio/skill_box";
import Intro from "./bio/intro";

import { Words, Frame, Image } from "arwes";


export default function Bio(props) {
  const { show } = props;

  const mySkills = ["Communication", "Leadership", "C/C++", "C#", "Game Development", "Engine Development", 
"Game AI", "Vulkan", "OpenGL", 
"Computer Graphics", "Game Design", "System Development",
"Web Development", "Three.js", "React.js",
"Javascript", "HTML/CSS", "Project Management"]

  return (
    <>
      <Row>
        <Col md="auto" className="">
          <Frame
            className="mr-lg-0 mr-3"
            show={show}
            animate={true}
            level={0}
            corners={3}
          >
            {anim => (
              <Image
                className="avatar mb-0"
                animate={true}
                show={anim.entered}
                resources={avatar}
              ></Image>
            )}
          </Frame>
        </Col>
        <Col className="mr-3">
          <DetailTable show={show}></DetailTable>
        </Col>
      </Row>

      <Intro
        show={show}
        content={`I am a Computer Science student at DigiPen Singapore and one of the top performers in my batch. I am passionate about programming game AI and computer graphics. As a lifelong gamer, I aspire to leave my mark in the gaming industry.

        I have worked on several games and game engines during my academic years. I often took technical leadership roles, such as Technical Product Manager, Graphics Lead, etc. I usually handled the system architectures, planning, integrating, and consolidating everyone's code. I was also dedicated to learning computer graphics and graphics programming APIs such as Vulkan and OpenGL, as I was always curious about how modern game graphics were made.
        
        I value teamwork and effective communication. I like to collaborate with people from different disciplines because it broadens my perspective and gives me new insights. I enjoy giving presentations and showcasing our hard work.
        
        I am a STEM student, but I also appreciate multidisciplinary learning. In the game industry, where each game is a combined effort of art, music, design and programming, it's never enough to know just one of them to make the best game. Therefore, I never stop learning.`}
      >
        {" "}
      </Intro>

      <Row className="pr-3 pt-3 pb-3">
        <Col xs={12}>
          <Frame className="" show={show} animate={true} level={0} corners={3}>
            {anim => (
              <div className="p-3">
                <h3>
                  <Words
                    className="font-weight-bold"
                    animate
                    show={anim.entered}
                  >
                    Skills:
                  </Words>
                </h3>
                <Row>
                    {mySkills.map(skillname=>(
                      <Col xs="auto" className="skills-container">
                      <SkillBox show={anim.entered} name={skillname}></SkillBox>
                      </Col>
                    ))}
                </Row>
              </div>
            )}
          </Frame>
        </Col>
      </Row>
    </>
  );
}
