import React, { useState, useEffect } from 'react';

const Recap = (props) => {

    const [recaps, setRecaps] = useState([])

    useEffect(() => {
        setRecaps([])
    }, [])
    
    const handleRedirect = () => {
        props.history.push('/payment')
    }

    return (
        <>
            <div className="corps">
                <div className="titleQuestion">
                    <p>On récapitule</p>
                </div>
                <div className="products">
                    {recaps && recaps.map(sauce => (
                        <div className="ingredient" >
                            <img src={process.env.PUBLIC_URL + '/images/' + sauce.image} alt={sauce.name} className="i" />
                            <p>{sauce.name}</p>
                        </div>
                    ))}
                </div>
                <div className='vButton'>
                    <button onClick={handleRedirect}>Commander</button>
                </div>
            </div>
        </>
    );
};

export default Recap;