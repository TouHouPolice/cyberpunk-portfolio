import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Line, Highlight, Words } from "arwes";

export default function ListItem(props) {
  const { text, select, setSelect, hasLine, path, index } = props;

  return (
    <>
      <Highlight className="mt-4">
        <Link
          onClick={() => {
            setSelect(index);
          }}
          className="unstyled-link"
          to={path}
        >
          <li
            className={`list-item ${select === index ? "selected" : ""} ${
              hasLine ? " list-item__bl mb-10px" : ""
            }`}
          >
            {text}
          </li>
        </Link>
      </Highlight>

      {hasLine ? <Line animate></Line> : ""}
    </>
  );
}
