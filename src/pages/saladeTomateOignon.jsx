import React, { useState, useEffect } from 'react';
import datas from '../db/saladeTomatesOigons.json';

const SaladeTomateOignon = (props) => {

    const [accompagnements, setAccompagnements] = useState([])

    useEffect(() => {
        console.log(props)
        setAccompagnements(datas);
    }, []);

    const handleChoice = () => {

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
                    {accompagnements && accompagnements.map(accompagnement => (
                        <div className="ingredient" onClick={handleChoice}>
                            <img src={process.env.PUBLIC_URL + '/images/' + accompagnement.image} alt="pain" className="i" />
                            <p>{accompagnement.name}</p>
                        </div>
                    ))}
                </div>
                <div className='vButton'>
                    <button onClick={handleRedirect}>Continuer</button>
                </div>
            </div>
        </>
    );
};

export default SaladeTomateOignon;