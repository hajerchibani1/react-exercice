import React from "react";

const Profilcomponent = (props) => {
  return (
    <div className="profil">
      <h1>{props.fullname}</h1>
      <h4>profession:{props.profession}</h4>
      <p>bio:{props.bio}</p>
      <button onClick={() => props.handleName(props.fullname)}>click</button>
    </div>
  );
};

export default Profilcomponent;
