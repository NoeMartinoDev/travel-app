import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {

    const { id } = useParams()
    
    const dataDetail = props.data?.find( item => item.id === Number(id))

    return(
        <div>
            <h1>{dataDetail?.title}</h1>
            <h2>{dataDetail?.city}</h2>
            <h2>{dataDetail?.location}</h2>
            <p>{dataDetail?.description}</p>
            <img src={dataDetail?.image} alt={dataDetail?.title}></img>
        </div>
    )
}

export default Detail;