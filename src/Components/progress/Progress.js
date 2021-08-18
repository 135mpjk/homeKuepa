import React from 'react'
import './progress.css';
function Progress(){
    return (
    <div className="progressPrincipalContainer space">
        <div class="porcentaje">
        <div class="container">
            <div class="card">
                <div class="box">
                    <div class="porcent">
                        <svg className="circle_svg">
                            <circle cx="50" cy="50" r="50"/>
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <div class="number">
                            <h2>75<span>%</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="datos_progress">
            <div className="space">
                <div className="card_info space">
                    <p>Leads obtenidos</p>
                    <p>50/100</p>
                </div>
                <div className="card_info space">
                    <p>Cola de llamados</p>
                    <p>50/100</p>
                </div>
            </div>
            <div className="space">
                <div className="card_info space">
                    <p>Matriculas finalizadas</p>
                    <p>10/20</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Progress