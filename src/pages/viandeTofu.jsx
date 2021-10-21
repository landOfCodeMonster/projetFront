import React, { useState, useEffect } from 'react';
import datas from '../db/viandeTofo.json'

const ViandeTofu = (props) => {
    
    const [accompagnements, setAccompagnements] = useState([])
    const handleRedirect = () => {
        props.history.push('/saladeTomateOignon')
    }

    useEffect(() => {
        console.log(props)
        setAccompagnements(datas)
    }, [])

    return (
        <>
            <div className="corps">
                <div className="titleQuestion">
                    <p>Plutôt viande ou tofu ?</p>
                </div>
                <div className="products">
                    {accompagnements && accompagnements.map(accompagnement => (
                        <div className="ingredient" onClick={handleRedirect}>
                            <img src={process.env.PUBLIC_URL + '/images/'+accompagnement.image} alt="pain" className="i" />
                            <p>{accompagnement.name}</p>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default ViandeTofu;