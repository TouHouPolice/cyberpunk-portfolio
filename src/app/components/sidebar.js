import React, { useEffect, useState } from "react";
import { Frame, List, Link } from "arwes";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

import ListHeader from "./list_header";
import ListItem from "./list_item";

import { projects } from "../store";
export default function Sidebar(props) {
  const { show } = props;

  const [openProjects, setOpenProjects] = useState(true);
  const [select, setSelect] = useState(0);

  const projectList = loadProjectList();

  function loadProjectList() {
    return projects.map((project, index) => {
      const newIndex = 2 + index;
      return (
        <ListItem
          text={project.shortName}
          hasLine={true}
          index={newIndex}
          select={select}
          setSelect={setSelect}
          path={`/project/${index}`}
        ></ListItem>
      );
    });
  }

  useEffect(() => {
    // console.log(select);
  }, [select]);

  return (
    <>
      <Frame className="ml-3" show={show} animate={true} level={0} corners={3}>
        {anim => (
          <section className="navbar-container">
            <List node="dl">
              <ListHeader
                select={select}
                setSelect={setSelect}
                index={0}
                path="/overview"
                text="Overview"
              ></ListHeader>
            </List>

            <List node="dl">
              <ListHeader
                select={select}
                setSelect={setSelect}
                index={1}
                path="/experiences"
                text="Experiences"
              ></ListHeader>
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
                  <List node="ol">{projectList}</List>
                </div>
              </Collapse>
            </List>
          </section>
        )}
      </Frame>
    </>
  );
}
