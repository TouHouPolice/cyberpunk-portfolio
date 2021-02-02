import React from "react";
import { Line, Highlight } from "arwes";
import { Link } from "react-router-dom";

export default function ListHeader(props) {
  const { text, setOpen, open = false, canOpen = false, path } = props;

  function toggle() {
    setOpen(!open);
  }

  return (
    <>
      <Highlight>
        <dt
          onClick={
            canOpen
              ? () => {
                  toggle();
                }
              : ""
          }
          className="list-header"
        >
          {path ? (
            <Link className="unstyled-link" to={path}>
              {" "}
              <span className="content">{text}</span>
            </Link>
          ) : (
            <span className="content">{text}</span>
          )}

          {canOpen ? (
            <i
              className={`fas ${open ? "fa-angle-down" : "fa-angle-up"} mr-2`}
            ></i>
          ) : (
            ""
          )}
        </dt>
      </Highlight>
      <Line className="mb-10px" animate></Line>
    </>
  );
}
