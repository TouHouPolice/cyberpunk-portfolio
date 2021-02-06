import React from "react";
import { Words, Header, Heading, Logo } from "arwes";
import { GITHUB_ADDRESS, LINKEDIN_ADDRESS } from "../config";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TopHeader(props) {
  const { show } = props;

  return (
    <Row className="flex-nowrap">
      <Col>
        <Header animate>
          <Heading node="h1">
            <div className="top-header">
              <Logo show={show} animate size={60}></Logo>
              <Words className="ml-4" animate>
                Top secret classified
              </Words>

              <div className="d-flex justify-content-end align-items-center position-absolute top-0 left-0 w-100 pr-3">
                <a
                  className="ml-3 mr-3  social-media-icon"
                  target="_blank"
                  href={GITHUB_ADDRESS}
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-github-square fa-2x"></i>
                </a>
                <a
                  className="ml-3 mr-3   social-media-icon"
                  target="_blank"
                  href={LINKEDIN_ADDRESS}
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
            </div>
          </Heading>
        </Header>
      </Col>
    </Row>
  );
}
