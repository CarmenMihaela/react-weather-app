import React, { useState, useEffect } from "react";
import Card from "./Card";

function Citycard(props) {
  const [data, setData] = useState()
  const apiKey=process.env.REACT_APP_WEATHER_APP_API_KEY

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((newData) => setData(newData))
  }, []);

  if(!data) return null
  

  return (
    <div onClick={props.handleClick} id={props.id}>
    <Card cname={props.class} city={props.city}
    src= {"http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png"}  
    temp = {Math.round(data.main.temp)} 
    min_temp={Math.round(data.main.temp_min)} 
    max_temp= {Math.round(data.main.temp_max)} 
    max_humidity={Math.round(data.main.humidity)}
    />
    </div>
  )
  }

  export default Citycard