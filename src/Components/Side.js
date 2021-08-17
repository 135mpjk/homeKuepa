import React from 'react'
import '../App.css';
import niña from "../Images/niña.png"
function Side(){
    return (
        <div className="Side">
            <div className="imagen">
                <img src={niña}/>
            </div>
            <div>
                <div className="caja c1">
                    <p>Destreza</p>
                </div>
                <div className="cajadentro">
                    <p>0</p>
                </div>
            </div>
            <div>
                <div className="caja c2">
                <p>Preguntas contestadas</p>
                </div>
                <div className="cajadentro">
                <p>0</p>
                </div>
            </div>
            <div>
                <div className="caja c3">
                <p>Tiempo</p>
                </div>
                <div className="cajadentro">
                <p>00:00</p>
                </div>
            </div>
        </div>
    )
}
export default Side