import React from "react";

function Imagesportif(props) {
  return <div className="image">{props.children}</div>;
}

Imagesportif.defaultProps = {
  age: 2,
};
export default Imagesportif;
