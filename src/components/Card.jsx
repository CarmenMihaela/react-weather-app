import React from "react";

function Card (props) {


  return (
    <div className={props.cname} onClick={props.handleClick}>
      <h1>{props.city}</h1>
      <img src={props.src}/>
      <h2>{props.temp}° C</h2>
      <div className="info">
        <p>min.temp: </p> <p>{props.min_temp}</p>
        <p>max.temp: </p> <p>{props.max_temp}</p>
        <p>max.humidity: </p><p>{props.max_humidity}</p>
      </div>
    </div>
  );
}

export default Card;