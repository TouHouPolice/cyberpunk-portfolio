import React, { useEffect, useState } from "react";
import { Frame, List, Link } from "arwes";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

import ListHeader from "./list_header";
import ListItem from "./list_item";
export default function Sidebar(props) {
  const { show } = props;

  const [openProjects, setOpenProjects] = useState(true);

  return (
    <>
      <Frame show={show} animate={true} level={0} corners={3}>
        {anim => (
          <section className="navbar-container">
            <List node="dl">
              <ListHeader path="/overview" text="Overview"></ListHeader>
            </List>

            <List node="dl">
              <ListHeader path="/experiences" text="Experiences"></ListHeader>
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
    </>
  );
}
