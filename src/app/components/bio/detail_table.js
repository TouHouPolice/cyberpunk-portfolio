import React from "react";
import BioColumn from "./bio_column";
import { Frame, Line } from "arwes";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function DetailTable(props) {
  const { show } = props;

  return (
    <Frame className="" show={show} animate={true} level={0} corners={3}>
      {anim => (
        <Row className="bio-row">
          <Col className="d-flex flex-column justify-content-evenly">
            <BioColumn
              show={anim.entered}
              label="Name"
              content="Li Fengyun"
              rowClass=""
            ></BioColumn>

            <Line></Line>

            <BioColumn
              show={anim.entered}
              label="Gender"
              content="Male"
              rowClass=""
            ></BioColumn>

            <Line></Line>

            <BioColumn
              show={anim.entered}
              label="Birth Date"
              content="1999.05.09"
              rowClass=""
            ></BioColumn>

            <Line></Line>

            <BioColumn
              show={anim.entered}
              label="Nationality"
              content="Chinese"
              rowClass=""
              hasLine={false}
            ></BioColumn>
          </Col>
        </Row>
      )}
    </Frame>
  );
}
