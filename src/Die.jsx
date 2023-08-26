import './App.css'
import { useEffect } from 'react';

const Die = (prop) => {

    const {id, value, isHeld, holdDice} = prop;

    return ( 
        <div className={isHeld ? "dice click" : "dice" } onClick={holdDice}>
            <h2>{value}</h2>
        </div>
    )
}

export default Die