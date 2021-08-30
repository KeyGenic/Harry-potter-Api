import React from 'react';
import './card-list.css'
import { Cards } from '../cards/cards.component';

export const CardLists = (props) => {
    return(
        <div className = "card-lists">
             {props.characters.map((character) => (
                 <Cards character = {character}/>
             ))}
        </div>
    )
}