import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Words, Frame } from "arwes";

export default function Intro(props) {
  const { show, content } = props;
  const linesArray = content.split('\n');


  return (
    <Row className="pr-3 pt-3 pb-3">
      <Col xs={12}>
        <Frame className="" show={show} animate={true} level={0} corners={3}>
          {anim => (
            <div className="p-3">
              <h3>
                <Words className="font-weight-bold" animate show={anim.entered}>
                  Introduction:
                </Words>
              </h3>

              {linesArray.map((line, index) => (
                <Words key={index} animate show={anim.entered}>
                  {line}
                </Words>
              ))}

              </div>
          )}
        </Frame>
      </Col>
    </Row>
  );
}
