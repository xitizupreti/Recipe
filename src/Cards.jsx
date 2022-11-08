import React from "react";

function Card(props) {
  const { src, Name, Calories,link } = props;
  return (
    <div id="main">
      <img id="image" src={src} alt="" />
      <p><b>Name=</b>{Name}</p>
      <p><b>Calories=</b>{Calories}</p>
      <p><b>Ingredients=</b>{props.Ing.map((item,index) => (
        <li key={index}>{item}</li>
      ))}</p>
      <button className="but"><a href={link}>Read More</a></button>
    </div>
  );
}

export default Card;
