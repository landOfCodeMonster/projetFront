import React, { useState, useEffect } from 'react';
import datas from '../db/saladeTomatesOigons.json';

import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../features/panier/panierSlice'
import Checkout from '../components/checkout';
import Ingredient from '../components/ingredient';

const SaladeTomateOignon = (props) => {

    const [accompagnements, setAccompagnements] = useState(null)
    const dispatch = useDispatch();
    const checkout = useSelector(state => state.panier.cart);
    useEffect(() => {
        setTimeout(() => setAccompagnements(datas), 2000);
    }, []);

    const addToCart = (data) => {
        if (checkout.find(elt => elt.name === data.name)) {
            dispatch(remove(data))
        } else {
            dispatch(add(data))
        }
    }

    const handleRedirect = () => {
        props.history.push('/sauces')
    }

    return (
        <>
            <div className="corps">
                <div className="titleQuestion">
                    <p>Salade, tomates, oignons ?</p>
                </div>
                <div className="products">
                    {accompagnements !== null ? accompagnements.map(accompagnement => (
                        <Ingredient accompagnement={accompagnement} addToCart={addToCart} />
                    )) : <div className="loader"></div>}
                </div>
                <div className='vButton'>
                    <button onClick={handleRedirect}>Continuer</button>
                </div>
                <Checkout checkout={checkout} />
            </div>
        </>
    );
};

export default SaladeTomateOignon;