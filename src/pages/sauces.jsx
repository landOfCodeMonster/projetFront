import React, { useState, useEffect } from 'react';
import datas from "../db/sauces.json";
import { useDispatch} from 'react-redux'
import {add} from '../features/panier/panierSlice'

const Sauces = (props) => {

    
    const [sauces, setSauces] = useState(null)
    const dispath = useDispatch();

    const handleChoice = (data) => {
        dispath(add(data))
    }

    useEffect(() => {
        setTimeout(() => setSauces(datas), 2000);
    }, [])
    return (
        <>
            <div className="corps">
                <div className="titleQuestion">
                    <p>Quelques sauces ?</p>
                </div>
                <div className="products">
                    {sauces !== null ? sauces.map(sauce => (
                        <div key={sauce.name} className="ingredient" onClick={() => handleChoice(sauce)} >
                            <img src={process.env.PUBLIC_URL + '/images/' + sauce.image} alt={sauce.name} className="i" />
                            <p>{sauce.name}</p>
                        </div>
                    )): <div className="loader"></div>}
                </div>
                <div className='vButton'>
                    <button style={{marginRight: "10px"}} onClick={() => props.history.goBack()}>Revenir</button>
                    <button onClick={() => props.history.push('/recap')}>Continuer</button>
                    
                </div>
            </div>
        </>
    );
};

export default Sauces;