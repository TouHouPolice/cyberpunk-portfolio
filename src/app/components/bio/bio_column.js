import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Heading, Words, Line } from "arwes";

export default function BioColmun(props) {
  const { label, content, rowClass = "", show, hasLine = true } = props;

  return (
    <Row className={`pl-3 pr-3 ${rowClass}`}>
      <Col md={8} lg={7} xl={4} className="d-flex align-items-center">
        <Heading className="mb-0">{label}:</Heading>
      </Col>
      <Col className="d-flex align-items-center ">
        <Words className="text-uppercase" animate show={show}>
          {content}
        </Words>
      </Col>

      {/* {hasLine ? <Line className="mt-2"></Line> : <></>} */}
    </Row>
  );
}
