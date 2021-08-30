import React from 'react';
import './input.css'

export const SearchField = ({placeholder,eventHandler}) => {
    return(
        <input type = 'search' className ="search" placeholder = {placeholder} onChange = {eventHandler}/>
    )
}