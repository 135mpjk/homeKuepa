import React from 'react'
import '../App.css';
function Actividad(){
    return (
        <div className="Actividad">
            <p className="texto_actividad">¿Cuál es el resultado de la siguiente suma?</p>
            <div className="suma_boton">
                <div className="suma">
                    <div></div>
                    <p>1</p>
                    <p>2</p>
                    <p>4</p>
                    <p>+</p>
                    <p>3</p>
                    <p>6</p>
                    <p>3</p>
                    <div className="resultado">
                        <input></input>
                        <input></input>
                        <input></input>
                    </div>
                </div>
                <button className="boton_verificar">
                    <p>Verificar</p>
                </button>
            </div>

        </div>
    )
}
export default Actividad