import React from 'react'
import '../App.css';
import cerebro from "../Images/cerebro.png"
function Up(){
    return (
        <div className="Up">
            <div className="texto"><p>3° Suma de tres dígitos</p></div>
            <div className="botones_imagen">
                <div className="botones">
                    <button><p>◄ ANTERIOR</p></button>
                    <button><p>SIGUIENTE ►</p></button>
                </div>
                <div className="cerebro">
                    <img src={cerebro}/>
                </div>
            </div>
        </div>
    )
}
export default Up