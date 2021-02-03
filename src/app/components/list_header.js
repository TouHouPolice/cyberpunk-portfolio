import React, { useEffect } from "react";
import { Line, Highlight } from "arwes";
import { Link } from "react-router-dom";

export default function ListHeader(props) {
  const {
    text,
    setOpen,
    open = false,
    canOpen = false,
    path,
    index = false,
    select = undefined,
    setSelect = undefined
  } = props;

  function toggle() {
    setOpen(!open);
  }

  if (path) {
    return (
      <>
        <Link
          onClick={() => {
            setSelect(index);
          }}
          className="unstyled-link"
          to={path}
        >
          <Highlight>
            <dt
              onClick={
                canOpen
                  ? () => {
                      toggle();
                    }
                  : ""
              }
              className={`list-header ${index === select ? "selected" : ""}`}
            >
              <span className="content">{text}</span>
              {canOpen ? (
                <i
                  className={`fas ${
                    open ? "fa-angle-down" : "fa-angle-up"
                  } mr-2`}
                ></i>
              ) : (
                ""
              )}
            </dt>
          </Highlight>
        </Link>
        <Line className="mb-10px" animate></Line>
      </>
    );
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
          className={`list-header ${index === select ? "selected" : ""}`}
        >
          <span className="content">{text}</span>
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
