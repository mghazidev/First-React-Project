import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
        <>
            <div class="card col-md-4 my-3 ">
                <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/contact" class="btn btn-dark p-2 bg-dark">Go somewhere</NavLink>
                </div>
            </div>
        </>
    )
}

export default Card;
