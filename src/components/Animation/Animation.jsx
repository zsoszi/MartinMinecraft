import React, {useEffect} from "react";
import "./Animation.css";
import name from "../../picture/name.png";


function Animation() {
  useEffect(()=>{
}, []) 

return (
    <div className="animContainer">
      <div className="anim">
        <img className="name" src={name} alt="name"/>
      </div>
    </div>
  );
}

export default Animation;
