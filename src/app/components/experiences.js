import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Words, Frame, Image, Header } from "arwes";

import { hol_logo, hitachi_logo } from "../../assets/images";

import { jobs } from "../store";

export default function Experiences(props) {
  const { show } = props;

  const records = jobs.map((object, index) => {
    return (
      <Row className="mb-4" key={`record-${index}`}>
        <Col>
          <Frame
            className="mr-3 ml-3"
            show={show}
            animate={true}
            level={0}
            corners={3}
          >
            {anim => (
              <Row>
                <Col className="company-logo-wrapper" lg={4}>
                  <a
                    href={jobs[index].link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      className="company-logo mb-0"
                      animate={true}
                      show={anim.entered}
                      resources={jobs[index].logo}
                    ></Image>
                  </a>
                </Col>
                <Col>
                  <Row className="mt-3">
                    <Col xs="auto">
                      <Header show={anim.entered} animate>
                        <h2>
                          <Words
                            className="text-uppercase company-name"
                            animate
                            show={anim.entered}
                          >
                            {jobs[0].company}
                          </Words>
                        </h2>
                      </Header>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <h3>
                        <Words
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          Position:
                        </Words>
                        &nbsp; &nbsp;
                        <Words
                          layer="secondary"
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          {jobs[index].title}
                        </Words>
                      </h3>
                    </Col>
                    <Col xs={6}>
                      <h3>
                        <Words
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          Type:
                        </Words>
                        &nbsp; &nbsp;
                        <Words
                          layer="secondary"
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          {jobs[index].type}
                        </Words>
                      </h3>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <h3>
                        <Words
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          Start Date:
                        </Words>
                        &nbsp; &nbsp;
                        <Words
                          layer="secondary"
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          {jobs[index].startDate}
                        </Words>
                      </h3>
                    </Col>
                    <Col>
                      <h3>
                        <Words
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          End Date:
                        </Words>
                        &nbsp; &nbsp;
                        <Words
                          layer="secondary"
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          {jobs[index].endDate}
                        </Words>
                      </h3>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col>
                      <h3>
                        <Words
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          Job Description:
                        </Words>
                      </h3>
                    </Col>
                    <Col xs={12}>
                      <p>
                        <Words
                          layer="secondary"
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          {jobs[index].desc}
                        </Words>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )}
          </Frame>
        </Col>
      </Row>
    );
  });

  return <>{records}</>;
}
