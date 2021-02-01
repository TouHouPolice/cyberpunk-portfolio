import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Words, Frame } from "arwes";

export default function Intro(props) {
  const { show, content } = props;

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
              <p>
                <Words animate show={anim.entered}>
                  {content}
                </Words>
              </p>
            </div>
          )}
        </Frame>
      </Col>
    </Row>
  );
}
