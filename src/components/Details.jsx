import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";


export default function Details(props) {

    const [data, setData] = useState()
    const apiKey=process.env.REACT_APP_WEATHER_APP_API_KEY

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`)
            .then((response) => response.json())
            .then((newData) => setData(newData))
    }, []);

    if (!data) return null

    const todayMiliseconds = data.daily[0].dt * 1000
    const today = new Date(todayMiliseconds)
    const todayDate=today.getDate() + '-' + today.toLocaleString('default', { month: 'short' }) + '-' + today.getFullYear()

    const day1Miliseconds = data.daily[1].dt * 1000
    const day1 = new Date(day1Miliseconds)
    const day1Date=day1.getDate() + '-' + day1.toLocaleString('default', { month: 'short' }) + '-' + day1.getFullYear()

    const day2Miliseconds = data.daily[2].dt * 1000
    const day2 = new Date(day2Miliseconds)
    const day2Date=day2.getDate() + '-' + day2.toLocaleString('default', { month: 'short' }) + '-' + day2.getFullYear()

    const day3Miliseconds = data.daily[3].dt * 1000
    const day3 = new Date(day3Miliseconds)
    const day3Date=day3.getDate() + '-' + day3.toLocaleString('default', { month: 'short' }) + '-' + day3.getFullYear()

    const day4Miliseconds = data.daily[4].dt * 1000
    const day4 = new Date(day4Miliseconds)
    const day4Date=day4.getDate() + '-' + day4.toLocaleString('default', { month: 'short' }) + '-' + day4.getFullYear()

    const day5Miliseconds = data.daily[5].dt * 1000
    const day5 = new Date(day5Miliseconds)
    const day5Date=day5.getDate() + '-' + day5.toLocaleString('default', { month: 'short' }) + '-' + day5.getFullYear()

    const day6Miliseconds = data.daily[6].dt * 1000
    const day6 = new Date(day6Miliseconds)
    const day6Date=day6.getDate() + '-' + day6.toLocaleString('default', { month: 'short' }) + '-' + day6.getFullYear()

    const day7Miliseconds = data.daily[7].dt * 1000
    const day7 = new Date(day7Miliseconds)
    const day7Date=day7.getDate() + '-' + day7.toLocaleString('default', { month: 'short' }) + '-' + day7.getFullYear()

    function ChangeState() {
        props.ChangeClick()
    }

    return (
        <div>
            
            <h1 className="city_name">{props.city} Details</h1> 
            <Accordion today={todayDate}
                src={"http://openweathermap.org/img/wn/" + data.current.weather[0].icon +"@2x.png"} 
                min_temp={Math.round(data.daily[0].temp.min)}
                max_temp={Math.round(data.daily[0].temp.max)}
                morning_temp={Math.round(data.daily[0].temp.morn)}
                afternoon_temp={Math.round(data.daily[0].temp.day)}
                evening_temp={Math.round(data.daily[0].temp.eve)}
                night_temp={Math.round(data.daily[0].temp.night)}
            />
            <Accordion today={day1Date}
                src={"http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon +"@2x.png"} 
                min_temp={Math.round(data.daily[1].temp.min)}
                max_temp={Math.round(data.daily[1].temp.max)}
                morning_temp={Math.round(data.daily[1].temp.morn)}
                afternoon_temp={Math.round(data.daily[1].temp.day)}
                evening_temp={Math.round(data.daily[1].temp.eve)}
                night_temp={Math.round(data.daily[1].temp.night)}
            />
            <Accordion today={day2Date}
                src={"http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon +"@2x.png"} 
                min_temp={Math.round(data.daily[2].temp.min)}
                max_temp={Math.round(data.daily[2].temp.max)}
                morning_temp={Math.round(data.daily[2].temp.morn)}
                afternoon_temp={Math.round(data.daily[2].temp.day)}
                evening_temp={Math.round(data.daily[2].temp.eve)}
                night_temp={Math.round(data.daily[2].temp.night)}
            />
            <Accordion today={day3Date}
                src={"http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon +"@2x.png"} 
                min_temp={Math.round(data.daily[3].temp.min)}
                max_temp={Math.round(data.daily[3].temp.max)}
                morning_temp={Math.round(data.daily[3].temp.morn)}
                afternoon_temp={Math.round(data.daily[3].temp.day)}
                evening_temp={Math.round(data.daily[3].temp.eve)}
                night_temp={Math.round(data.daily[3].temp.night)}
            />
            <Accordion today={day4Date}
                src={"http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon +"@2x.png"} 
                min_temp={Math.round(data.daily[4].temp.min)}
                max_temp={Math.round(data.daily[4].temp.max)}
                morning_temp={Math.round(data.daily[4].temp.morn)}
                afternoon_temp={Math.round(data.daily[4].temp.day)}
                evening_temp={Math.round(data.daily[4].temp.eve)}
                night_temp={Math.round(data.daily[4].temp.night)}
            />
            <Accordion today={day5Date}
                src={"http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon +"@2x.png"} 
                min_temp={Math.round(data.daily[5].temp.min)}
                max_temp={Math.round(data.daily[5].temp.max)}
                morning_temp={Math.round(data.daily[5].temp.morn)}
                afternoon_temp={Math.round(data.daily[5].temp.day)}
                evening_temp={Math.round(data.daily[5].temp.eve)}
                night_temp={Math.round(data.daily[5].temp.night)}
            />
            <Accordion today={day6Date}
                src={"http://openweathermap.org/img/wn/" + data.daily[6].weather[0].icon +"@2x.png"} 
                min_temp={Math.round(data.daily[6].temp.min)}
                max_temp={Math.round(data.daily[6].temp.max)}
                morning_temp={Math.round(data.daily[6].temp.morn)}
                afternoon_temp={Math.round(data.daily[6].temp.day)}
                evening_temp={Math.round(data.daily[6].temp.eve)}
                night_temp={Math.round(data.daily[6].temp.night)}
            />
            <Accordion today={day7Date}
                src={"http://openweathermap.org/img/wn/" + data.daily[7].weather[0].icon +"@2x.png"} 
                min_temp={Math.round(data.daily[7].temp.min)}
                max_temp={Math.round(data.daily[7].temp.max)}
                morning_temp={Math.round(data.daily[7].temp.morn)}
                afternoon_temp={Math.round(data.daily[7].temp.day)}
                evening_temp={Math.round(data.daily[7].temp.eve)}
                night_temp={Math.round(data.daily[7].temp.night)}
            />
            <h1 className="click">Click on each day to see more detailed information.</h1>
            <button onClick={ChangeState}>Back to Overview</button>
        </div>
    )
}
