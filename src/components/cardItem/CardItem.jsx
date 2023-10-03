import React from "react";

const CardItem = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.city}</p>
            <p>{props.location}</p>
            <img src={props.image} alt={props.title}></img>
        </div>
    )
}

export default CardItem;