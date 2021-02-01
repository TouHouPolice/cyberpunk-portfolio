import React from "react";
import { Words, Header, Heading, Logo } from "arwes";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TopHeader(props) {
  const { show } = props;

  return (
    <Row>
      <Col xs={12}>
        <Header animate>
          <Heading node="h1">
            <div className="top-header">
              <Logo show={show} animate size={60}></Logo>
              <Words className="ml-4" animate>
                Top secret classified
              </Words>
            </div>
          </Heading>
        </Header>
      </Col>
    </Row>
  );
}
