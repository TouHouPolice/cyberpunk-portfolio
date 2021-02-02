import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
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

import TopHeader from "./components/top_header";
import Sidebar from "./components/sidebar";

import Bio from "./components/bio";
import Experiences from "./components/experiences";
import MyProject from "./components/my_project";

export default function Profile(props) {
  const [loading, setLoading] = useState(false);

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
        <Router basename="/profile">
          <Container fluid className="profile-container">
            <TopHeader show={!loading}></TopHeader>

            <Row className=" mt-3">
              <Col className="ml-3 mb-4" lg={2} md={4} sm={6} xs={11}>
                <Sidebar show={!loading}></Sidebar>
              </Col>

              <Col className="flex-nowrap">
                <Switch>
                  <Route exact path="/overview">
                    <Bio show={!loading}></Bio>
                  </Route>

                  <Route exact path="/experiences">
                    <Experiences show={!loading}></Experiences>
                  </Route>

                  <Route path="/project/:id">
                    <MyProject show={!loading}></MyProject>
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      )}
    </>
  );
}
