import React, { useState } from 'react';
import Checkout from '../components/checkout';
import { useSelector} from 'react-redux';

const Payment = (props) => {

    const [payments] = useState([])
    const checkout = useSelector(state => state.panier.cart);
    
    return (
        <div className="corps">
            <div className="titleQuestion">
                <p>Payement ?</p>
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
            <Checkout checkout={checkout}/>
        </div>
    );
};

export default Payment;