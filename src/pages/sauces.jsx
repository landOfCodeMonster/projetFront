import React, { useState, useEffect } from 'react';
import datas from "../db/sauces.json";

const Sauces = (props) => {

    const [sauces, setSauces] = useState([])

    useEffect(() => {
        setSauces(datas);
    }, [])
    return (
        <>
            <div className="corps">
                <div className="titleQuestion">
                    <p>Quelques sauces ?</p>
                </div>
                <div className="products">
                    {sauces && sauces.map(sauce => (
                        <div className="ingredient" >
                            <img src={process.env.PUBLIC_URL + '/images/' + sauce.image} alt={sauce.name} className="i" />
                            <p>{sauce.name}</p>
                        </div>
                    ))}
                </div>
                <div className='vButton'>
                    <button onClick={() => props.history.push('/recap')}>Continuer</button>
                </div>
            </div>
        </>
    );
};

export default Sauces;