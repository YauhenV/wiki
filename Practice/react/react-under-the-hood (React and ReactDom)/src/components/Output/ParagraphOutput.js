import React from "react";

const ParagraphOutput = (props) => {


  return (
    <p>{props.isShown ? "New Paragraph" : ""}</p>
  );
};

export default React.memo(ParagraphOutput);