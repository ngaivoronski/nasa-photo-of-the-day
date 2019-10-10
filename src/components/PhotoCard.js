import React from "react";

const PhotoCard = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.url}></img>
            <p>Date: {props.date}</p>
            <p>Explanation: {props.explanation}</p>
        </div>
    );
};

export default PhotoCard;