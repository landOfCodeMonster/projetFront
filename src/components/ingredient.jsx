import React, {useState, useEffect } from 'react';

const Ingredient = ({accompagnement, addToCart}) => {
    let { name, image } = accompagnement;
   

    return (
        <div key={name} className="ingredient" onClick={() => addToCart(accompagnement)}>
            <img src={process.env.PUBLIC_URL + '/images/' + image} alt={name} className="i" />
            <p>{name}</p>
            {/* <span className={isCheck ? "checked" : ""}></span> */}
        </div>
    );
};

export default Ingredient;