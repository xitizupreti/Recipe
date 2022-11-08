import React from 'react';

function Card(props){
    return(
        <div id='main'>
        <img src={props.src} alt=""/>
        <p>Name={props.Name}</p>
        <p>Calories={props.Calories}</p>
        </div>
    );
}

export default Card;