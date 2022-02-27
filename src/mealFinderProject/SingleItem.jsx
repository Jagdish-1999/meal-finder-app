import React, { useState } from 'react'
import './SingleItem.css'
function SingleItem(props) {

    return (
        <div className='image-container'
            onMouseOver={(e) => {
                e.currentTarget.childNodes[1].classList.add("show-item-name")
            }}
            onMouseLeave={(e) => {
                e.currentTarget.childNodes[1].classList.remove("show-item-name")
            }}
        >
            <img src={props.image} alt="Image Not Found" className='img' />
            <span className='hide-item-name'>{props.itemName}</span>
        </div >
    )
}

export default SingleItem;
