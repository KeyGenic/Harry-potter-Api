import React from 'react';
import './cards.css'

export const Cards = (props) => {
    return(
        <div className = 'cards-container' >
            <img src={`${props.character.image}`} alt="" className = "characters-img" />
            <div className = "character-info">
            <h2>{props.character.name}</h2>
            <p>{props.character.dateOfBirth}</p>
            </div>
        </div>
    )
}