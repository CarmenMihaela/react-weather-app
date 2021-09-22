import React, { useState } from "react";
import Header from "./Header";
import Citycard from "./Citycard";
import Details from "./Details";
import Instruction from "./Instruction";


function App() {

const [isClicked, setIsClicked] = useState(false)
const [id, setId] = useState()
let lat, lon

function ChangeClick(event){
  setId(event.currentTarget.id)
  setIsClicked(!isClicked)
}

if (id==="The Hague") {
  lat=52.08
  lon=4.29
} else if(id==="Amsterdam"){
  lat=52.38
  lon=4.90
}else if(id==="Utrecht"){
  lat=52.09
  lon=5.12
}

    return (
      <div>
      
      {isClicked
      ? <Details lat={lat} lon={lon} city={id} ChangeClick={setIsClicked}/>
      : <div className="cards_wrapper"> 
        <Header />
        <Citycard class="card1" handleClick={ChangeClick} city="The Hague" id="The Hague"/>
        <Citycard class="card2" id="Amsterdam" handleClick={ChangeClick} city="Amsterdam"/>
        <Citycard class="card3" id="Utrecht" handleClick={ChangeClick} city="Utrecht"/>
        <Instruction />
      </div>}
      </div>
    );
  }
  
  export default App;