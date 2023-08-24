import './App.css'
import { useEffect } from 'react';

const Die = (prop) => {

    const {value} = prop;

    return ( 
        <div className="dice">
            <h2>{value}</h2>
        </div>
    )
}

export default Die