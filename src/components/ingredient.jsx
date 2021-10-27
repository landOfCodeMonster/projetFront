import React, {useState } from 'react';

const Ingredient = ({accompagnement, addToCart}) => {
    let { name, image } = accompagnement;
   const [check, setCheck] = useState(false);

   const handleCheck = () => setCheck(!check);

    return (
        <div key={name} className="ingredient" onClick={() => {addToCart(accompagnement); handleCheck()} }>
            <img src={process.env.PUBLIC_URL + '/images/' + image} alt={name} className="i" />
            <p>{name}</p>
            <span className={check ? "checked" : ""}></span>
        </div>
    );
};

export default Ingredient;