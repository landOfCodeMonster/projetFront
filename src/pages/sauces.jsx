import React, { useState, useEffect } from 'react';
import datas from "../db/menu.json";
import { useDispatch, useSelector } from 'react-redux'
import {add, remove} from '../features/panier/panierSlice'
import Checkout from '../components/checkout';
import Ingredient from '../components/ingredient';

const Sauces = (props) => {
    
    const [sauces, setSauces] = useState(null)
    const dispatch = useDispatch();
    const checkout = useSelector(state => state.panier.cart);
    const handleChoice = (data) => {
      
    if (checkout.find(elt => elt.name === data.name)) {
        dispatch(remove(data))
    } else {
        dispatch(add(data))
    }
    }
    useEffect(() => {
        setTimeout(() => setSauces(datas.sauces), 2000);
    }, [])
    return (
        <>
            <div className="corps">
                <div className="titleQuestion">
                    <p>Quelques sauces ?</p>
                </div>
                <div className="products">
                    {sauces !== null ? sauces.map(sauce => (
                        <Ingredient accompagnement={sauce} addToCart={handleChoice} />
                        
                    )): <div className="loader"></div>}
                </div>
                <div className='vButton'>
                    <button style={{marginRight: "10px"}} onClick={() => props.history.goBack()}>Revenir</button>
                    <button onClick={() => props.history.push('/recap')}>Continuer</button>
                    
                </div>
                <Checkout checkout={checkout}/>
            </div>
        </>
    );
};

export default Sauces;