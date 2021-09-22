import React, { useState } from 'react';

function Accordion (props) {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}>
        <span>{props.today}</span><span><img src={props.src}/>{props.min_temp}/{props.max_temp}°C</span>
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">
        <span></span><span>Morning</span><span>Afternoon</span><span>Evening</span><span>Night</span>
          <span>Temperature</span><span>{props.morning_temp}°C</span><span>{props.afternoon_temp}°C</span><span>{props.evening_temp}°C</span><span>{props.night_temp}°C</span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;