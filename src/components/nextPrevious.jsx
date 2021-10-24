import React from 'react';

const NextPrevious = (props) => {
    return (
        <div className='vButton'>
            <button style={{ marginRight: "10px" }} onClick={() => props.history.goBack()}>Revenir</button>
             <button onClick={() => props.history.push(props.nextPage)}>Continuer</button>
       
        </div>
    );
};

export default NextPrevious;