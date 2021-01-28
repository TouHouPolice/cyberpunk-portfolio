import React, { useEffect, useState } from "react";
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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

import ListHeader from "./components/list_header";
import ListItem from "./components/list_item";

import { avatar } from "../assets/images";

import DetailTable from "./components/bio/detail_table";

export default function Profile(props) {
  const [loading, setLoading] = useState(false);

  const [openProjects, setOpenProjects] = useState(true);

  useEffect(() => {
    var loadingInterval;

    if (loading) {
      loadingInterval = setInterval(() => {
        setLoading(false);
      }, 1500);
    }

    return () => {
      clearInterval(loadingInterval);
    };
  }, [loading]);
  return (
    <>
      <div className="loading-anim">
        <Loading show={loading} animate full></Loading>
      </div>

      {loading ? (
        <></>
      ) : (
        <Container fluid className="profile-container">
          <Row>
            <Col xs={12}>
              <Header animate>
                <Heading node="h1">
                  <div className="top-header">
                    <Logo show={!loading} animate size={60}></Logo>
                    <Words className="ml-4" animate>
                      Top secret classified
                    </Words>
                  </div>
                </Heading>
              </Header>
            </Col>
          </Row>

          <Row className=" mt-3 ">
            <Col className="ml-3 mb-4" lg={2} xs={4}>
              <Frame show={!loading} animate={true} level={0} corners={3}>
                {anim => (
                  <section className="navbar-container">
                    <List node="dl">
                      <ListHeader text="Overview"></ListHeader>
                    </List>

                    <List node="dl">
                      <ListHeader text="Experiences"></ListHeader>
                    </List>

                    <List node="dl">
                      <ListHeader
                        open={openProjects}
                        setOpen={setOpenProjects}
                        canOpen={true}
                        text="Projects"
                      ></ListHeader>
                      <Collapse in={openProjects}>
                        <div className="items-wrapper">
                          <ListItem text="Project1"></ListItem>
                          <ListItem text="Project2"></ListItem>
                          <ListItem text="Project3" hasLine={true}></ListItem>
                        </div>
                      </Collapse>
                    </List>
                  </section>
                )}
              </Frame>
            </Col>
            <Col className="flex-nowrap">
              <Row>
                <Col md="auto" className="">
                  <Frame
                    className="mr-lg-0 mr-3"
                    show={!loading}
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
                  <DetailTable show={!loading}></DetailTable>
                </Col>
              </Row>
              <Row className="pr-3 pt-3 pb-3">
                <Col xs={12}>
                  <Frame
                    className=""
                    show={!loading}
                    animate={true}
                    level={0}
                    corners={3}
                  >
                    {anim => (
                      <div className="p-3">
                        <h3>
                          <Words
                            className="font-weight-bold"
                            animate
                            show={anim.entered}
                          >
                            Introduction:
                          </Words>
                        </h3>
                        <p>
                          <Words animate show={anim.entered}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus, amet cupiditate laboriosam sunt
                            libero aliquam, consequatur alias ducimus adipisci
                            nesciunt odit? Odio tenetur et itaque suscipit atque
                            officiis debitis qui. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Accusamus, amet
                            cupiditate laboriosam sunt libero aliquam,
                            consequatur alias ducimus adipisci nesciunt odit?
                            Odio tenetur et itaque suscipit atque officiis
                            debitis qui. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusamus, amet cupiditate
                            laboriosam sunt libero aliquam, consequatur alias
                            ducimus adipisci nesciunt odit? Odio tenetur et
                            itaque suscipit atque officiis debitis qui. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus, amet cupiditate laboriosam sunt libero
                            aliquam, consequatur alias ducimus adipisci nesciunt
                            odit? Odio tenetur et itaque suscipit atque officiis
                            debitis qui. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusamus, amet cupiditate
                            laboriosam sunt libero aliquam, consequatur alias
                            ducimus adipisci nesciunt odit? Odio tenetur et
                            itaque suscipit atque officiis debitis qui. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus, amet cupiditate laboriosam sunt libero
                            aliquam, consequatur alias ducimus adipisci nesciunt
                            odit? Odio tenetur et itaque suscipit atque officiis
                            debitis qui.
                          </Words>
                        </p>
                      </div>
                    )}
                  </Frame>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
