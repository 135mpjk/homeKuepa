import './calls.css';
import React from 'react';
import {Circle} from '../../styled'
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Calls extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      datos:[],
      isFetch:true,
    }
  }
  componentDidMount(){
    fetch('https://api.opendota.com/api/heroes')
    .then(response =>response.json())
    .then(datosJson => this.setState({datos: datosJson, isFetch:false}))
  }
render() {
  if(this.state.isFetch){
    return 'Loading...'
  }
  let empty =this.props.empty
  let number = parseInt(this.props.number)
  const name = this.state.datos[number].localized_name
  console.log("name",number)
  return  <div className="callsPrincipalContainer">
      <div className="nombre">{name}</div>
       <div className="llamarContainer">
          <p className="llamar">Llamar</p>
          <p className="descuento">Descuento temporada</p>
        </div>
        <div className="iconsContainer">
            <div className="circulo"><Circle empty={empty}/></div>
            <div><FontAwesomeIcon icon={faPhoneAlt}/></div>
            <div><FontAwesomeIcon icon={faCommentDots}/></div>
        </div>

    </div>
    
  
}}

