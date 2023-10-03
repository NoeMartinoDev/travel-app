import React from "react";
import CardItem from "../cardItem/CardItem";

const Cards = (props) => {
    return (
        <>
            {props.data ? (
                props.data.map((item) => <CardItem title={item.title}
                                                image={item.image}
                                                city={item.city}
                                                location={item.location}
                                                key={item.id}/>)
                ) : (
                <p>Cargando datos</p>
                )}
        </>
    )
}

export default Cards;

//Ternario
//  condicion ? (
//      si es true codigo que se ejecuta
//  ) : (
//      si es false codigo que se ejecuta
//  )

//  condicion ? codigo si es true : codigo si es false