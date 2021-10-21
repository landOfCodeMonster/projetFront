import React, { useEffect } from 'react';
import './checkout.css';

const Checkout = ({ checkout }) => {

  useEffect(() => {
    console.log(checkout)
  }, [])

  return (
    <div className="checkout">
      <b>Votre panier</b>
      <br />
      {checkout && checkout.map(data => (
        <p key={data.name}>
          {data.name} x{data.quantity}
        </p>
      ))}
    </div>
  )
}

export default Checkout