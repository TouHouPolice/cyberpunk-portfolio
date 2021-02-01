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
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet cupiditate laboriosam sunt libero aliquam, consequatur alias ducimus adipisci nesciunt odit? Odio tenetur et itaque suscipit atque officiis debitis qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet cupiditate laboriosam sunt libero aliquam, consequatur alias ducimus adipisci nesciunt odit? Odio tenetur et itaque suscipit atque officiis debitis qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
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
                  <Col xs="auto" className="skills-container">
                    <SkillBox show={anim.entered} name="something"></SkillBox>
                  </Col>
                </Row>
              </div>
            )}
          </Frame>
        </Col>
      </Row>
    </>
  );
}
