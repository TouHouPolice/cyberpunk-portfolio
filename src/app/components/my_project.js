import React from "react";
import { useParams } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import {
  Loading,
  Words,
  Header,
  Line,
  Heading,
  Frame,
  Logo,
  List,
  Image
} from "arwes";

import { projects } from "../store";

export default function MyProject(props) {
  const { show } = props;
  const { id = 0 } = useParams();
  const project = projects[id];
  // console.log(id);

  const carouselItems = project.images.map((image, index) => {
    return (
      <div key={`image-${index}`}>
        <img alt="img" src={image}></img>
      </div>
    );
  });

  if (!project) {
    return <></>;
  }

  return (
    <Row className="mb-4 project-container">
      <Col>
        <Frame
          className="mr-3 ml-3 p-3"
          show={show}
          animate={true}
          level={0}
          corners={3}
        >
          {anim => (
            <>
              <Row className="mt-2">
                <Col>
                  <Header show={anim.entered} animate>
                    <h2 className="text-center">
                      <Words
                        className="text-uppercase project-name"
                        animate
                        show={anim.entered}
                      >
                        {project.name}
                      </Words>
                    </h2>
                  </Header>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col>
                  <Heading className="text-center" node="h2">
                    <Words
                      className="text-uppercase "
                      animate
                      show={anim.entered}
                    >
                      Introduction
                    </Words>
                  </Heading>
                </Col>
              </Row>
              <Row className="">
                <Col xs={{ span: 10, offset: 1 }}>
                  <p className="text-center">
                    <Words className="" animate show={anim.entered}>
                      {project.desc}
                    </Words>
                  </p>
                </Col>
              </Row>

              {project.video ? (
                <>
                  <Row className="top-gap">
                    <Col>
                      <Heading className="text-center" node="h2">
                        <Words
                          className="text-uppercase "
                          animate
                          show={anim.entered}
                        >
                          Demo
                        </Words>
                      </Heading>
                    </Col>
                  </Row>

                  <Row className="">
                    <Col xs={{ span: 10, offset: 1 }}>
                      <Frame
                        className=""
                        show={show}
                        animate={true}
                        level={0}
                        corners={1}
                      >
                        <iframe
                          className="vid-player position-relative"
                          src={project.video}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </Frame>
                    </Col>
                  </Row>
                </>
              ) : (
                <></>
              )}

              <Row className="top-gap">
                <Col>
                  <Heading className="text-center" node="h2">
                    <Words
                      className="text-uppercase "
                      animate
                      show={anim.entered}
                    >
                      Screenshots
                    </Words>
                  </Heading>
                </Col>
              </Row>

              <Row className="">
                <Col xs={{ span: 10, offset: 1 }}>
                  <Frame
                    className=""
                    show={show}
                    animate={true}
                    level={0}
                    corners={1}
                  >
                    <div className="w-100">
                      <Carousel>{carouselItems}</Carousel>
                    </div>
                  </Frame>
                </Col>
              </Row>

              {project.github || project.address ? (
                <>
                  <Row className="top-gap">
                    <Col>
                      <Heading className="text-center" node="h2">
                        <Words
                          className="text-uppercase"
                          animate
                          show={anim.entered}
                        >
                          Links
                        </Words>
                      </Heading>
                    </Col>
                  </Row>
                  <Line className=""></Line>
                  <Row className="mt-3">
                    <Col className="d-flex justify-content-center align-items-center">
                      {project.address ? (
                        <a
                          href={project.address}
                          target="_blank"
                          rel="noreferer noopener"
                          className="unstyled-link ml-4 mr-4"
                        >
                          <div className="link-icon-wrapper">
                            <i className="fas fa-globe fa-3x mb-3 icon"></i>
                            <Heading node="h3" className="text">
                              visit
                            </Heading>
                          </div>
                        </a>
                      ) : (
                        <></>
                      )}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferer noopener"
                          className="unstyled-link ml-4 mr-4"
                        >
                          <div className="link-icon-wrapper">
                            <i className="fab fa-github fa-3x mb-3 icon"></i>
                            <Heading node="h3" className="text">
                              Github
                            </Heading>
                          </div>
                        </a>
                      ) : (
                        <></>
                      )}
                    </Col>
                  </Row>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </Frame>
      </Col>
    </Row>
  );
}
