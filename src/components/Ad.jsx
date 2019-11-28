import React from "react";

function Ad(props) {
  return (
    <div>
      <img src={props.img} alt="Vancouver Loft" />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
}
export default Ad;
