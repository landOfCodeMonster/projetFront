import React from 'react';
import { useSelector, } from 'react-redux'

const Recap = (props) => {

    const cart = useSelector(state => state.panier.cart);
   
    
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
                    {cart && cart.map(elt => (
                        <div key={elt.name} className="ingredient" >
                            <img src={process.env.PUBLIC_URL + '/images/' + elt.image} alt={elt.name} className="i" />
                            <p>{elt.name}</p> 
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