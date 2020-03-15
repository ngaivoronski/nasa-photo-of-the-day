import React from "react";
import styled from 'styled-components'

const PhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 80%
`

const Title = styled.h2`
    @import url('https://fonts.googleapis.com/css?family=Orbitron|Roboto&display=swap');

    font-family: 'Orbitron', sans-serif;
    color: slategrey;
`;

const CardP = styled.p `
    @import url('https://fonts.googleapis.com/css?family=Orbitron|Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
`;

const PhotoCard = props => {
    return (
        <PhotoContainer>
            <Title>{props.title}</Title>
            <img src={props.url}></img>
            <CardP>Date: {props.date}</CardP>
            <CardP>Explanation: {props.explanation}</CardP>
        </PhotoContainer>
    );
};

export default PhotoCard;