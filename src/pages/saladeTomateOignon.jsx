import React, { useState, useEffect } from 'react';
import datas from '../db/saladeTomatesOigons.json';

import { useDispatch} from 'react-redux'
import {add} from '../features/panier/panierSlice'

const SaladeTomateOignon = (props) => {

    const [accompagnements, setAccompagnements] = useState(null)
    const dispath = useDispatch();

    useEffect(() => {
        setTimeout(() => setAccompagnements(datas), 2000);
    }, []);

    const handleChoice = (data) => {
        dispath(add(data))
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
                        <div key={accompagnement.name} className="ingredient" onClick={() => handleChoice(accompagnement)}>
                            <img src={process.env.PUBLIC_URL + '/images/' + accompagnement.image} alt="pain" className="i" />
                            <p>{accompagnement.name}</p>
                        </div>
                    )): <div className="loader"></div>}
                </div>
                <div className='vButton'>
                    <button onClick={handleRedirect}>Continuer</button>
                </div>
            </div>
        </>
    );
};

export default SaladeTomateOignon;