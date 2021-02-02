import React from "react";
import { Link } from "react-router-dom";
import { Line, Highlight } from "arwes";

export default function ListHeader(props) {
  const { text, state, setState, hasLine, path } = props;

  return (
    <>
      <Highlight>
        <Link className="unstyled-link" to={path}>
          {" "}
          <dd className={`list-item ${hasLine ? "list-item__bl mb-10px" : ""}`}>
            {text}
          </dd>
        </Link>
      </Highlight>

      {hasLine ? <Line animate></Line> : ""}
    </>
  );
}
