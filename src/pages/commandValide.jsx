import React from 'react';

const CommandValide = (props) => {
    return (
        <div className="corps">
            <div className="titleQuestion">
                <p>C’est parti !</p>
                <p>Notre maitre kébabier prépare votre commande.</p>
                <p>Patience...</p>
            </div>
           
            <div className='vButton'>
                <button onClick={() => props.history.push('/')}>Accueil</button>
            </div>
        </div>
    );
};

export default CommandValide;