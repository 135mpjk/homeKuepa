import './App.css';
import Calls from "./Components/calls/Calls"
import Progress from "./Components/progress/Progress"
import Goal from "./Components/goal/Goal"
import {Call} from './styled'
import ket from './Images/ket.png'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "./Components/notifications/Notifications"


function App() {
  
  return (
    <div className="principal_container">
      <div className="left">
        <img className="ket" src={ket}/>
        <div className="iconos casa">
          <FontAwesomeIcon icon={faHome}/>
        </div>
        <div className="iconos lista">
          <FontAwesomeIcon icon={faHome}/>
        </div>
        <div className="iconos flecha">
          <FontAwesomeIcon icon={faHome}/>
        </div>
      </div>
      <div className="centro">
        <div className="barra_lado">
          <h1>Hola, Jorge</h1>
          <div className="progreso_metas">
            <Progress/>
            <Goal/>
          </div> 
        </div>
        <div className="parte_arriba">
          <div className="conexiones">
            <h3>Conexiones de agenda para hoy</h3>
            <div className="llamadas">
              <div><Call blue={true}><Calls number="0"/></Call></div>
              <div><Call ><Calls number="1"/></Call></div>
              <div><Call blue={true}><Calls number="2"/></Call></div>
              <div><Call ><Calls number="3" empty="true"/></Call></div>
              <div><Call blue={true}><Calls number="4"/></Call></div>
            </div>
          </div>
        </div>
      </div>
      <div className="caja_actividad"></div>
      <div className="right">
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
      </div>
     
    </div>
  );
}

export default App;