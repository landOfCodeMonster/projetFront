import React, { useState, useEffect } from 'react';
import datas from '../db/menu.json';
import Checkout from '../components/checkout';
import { useSelector, useDispatch} from 'react-redux';
import {add} from '../features/panier/panierSlice';

const ViandeTofu = (props) => {
    
    const [accompagnements, setAccompagnements] = useState(null)
    const handleRedirect = (data) => {
        dispath(add(data))
        props.history.push('/saladeTomateOignon')
    }
    const checkout = useSelector(state => state.panier.cart);
    const dispath = useDispatch();
    
    useEffect(() => {
        setTimeout(() => setAccompagnements(datas.food), 2000);
    }, [])

    return (
        <>
            <div className="corps">
                <div className="titleQuestion">
                    <p>Plutôt viande ou tofu ?</p>
                </div>
                <div className="products">
                    {accompagnements !== null ? accompagnements.map(accompagnement => (
                        <div key={accompagnement.name} className="ingredient" onClick={() =>handleRedirect(accompagnement)}>
                            <img src={process.env.PUBLIC_URL + '/images/'+accompagnement.image} alt="pain" className="i" />
                            <p>{accompagnement.name}</p>
                        </div>
                    )) : <div className="loader"></div>}

                </div>
                <Checkout checkout={checkout}/>
            </div>
        </>
    );
};

export default ViandeTofu;