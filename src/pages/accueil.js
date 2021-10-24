import React, { useState, useEffect } from "react";
import "./accueil.css";
import datas from "../db/painGalette.json";
import { useHistory } from "react-router";
import { useSelector, useDispatch} from 'react-redux';
import {add} from '../features/panier/panierSlice';
import Checkout from '../components/checkout';

const Accueil = () => {
  let history = useHistory();
  const [choix, setchoix] = useState([]);
  const checkout = useSelector(state => state.panier.cart);
  const dispath = useDispatch();
  useEffect(() => {
    setchoix(datas)
  }, [])

  const addAliment = (data) => {
    
    dispath(add(data))
    history.push("/viandeTofu");
  };


  return (
    <>
      <div>
        <div className="corps">
          <div className="titleQuestion">
            <p>Pain ou galette ?</p>
          </div>
          <div className="products">
            <div className="products">
              {choix &&
                choix.map((accompagnement) => (
                  <div key={accompagnement.name} className="ingredient" onClick={() => addAliment(accompagnement)}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/" +
                        accompagnement.image
                      }
                      alt="pain"
                      className="i"
                    />
                    <p>{accompagnement.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Checkout checkout={checkout}/>
      </div>
    </>
  );
};

export default Accueil;
