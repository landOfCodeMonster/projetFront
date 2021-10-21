import React, { useState } from 'react';

const Payment = (props) => {

    const [payments, setPayments] = useState([])

    return (
        <div className="corps">
            <div className="titleQuestion">
                <p>Quelques sauces ?</p>
            </div>
            <div className="products">
                {payments && payments.map(sauce => (
                    <div className="ingredient" >
                        <img src={process.env.PUBLIC_URL + '/images/' + sauce.image} alt={sauce.name} className="i" />
                        <p>{sauce.name}</p>
                    </div>
                ))}
            </div>
            <div className='vButton'>
                <button onClick={() => props.history.push('/validerCommande')}>Continuer</button>
            </div>
        </div>
    );
};

export default Payment;