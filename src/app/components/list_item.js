import React from "react";
import { Line, Highlight } from "arwes";

export default function ListHeader(props) {
  const { text, state, setState, hasLine } = props;

  return (
    <>
      <Highlight>
        <dd className={`list-item ${hasLine ? "list-item__bl mb-10px" : ""}`}>
          {text}
        </dd>
      </Highlight>

      {hasLine ? <Line animate></Line> : ""}
    </>
  );
}
