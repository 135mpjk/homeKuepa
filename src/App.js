import './App.css';
import Side from "./Components/Side"
import Actividad from "./Components/Actividad"
import Up from "./Components/Up"
import Down from "./Components/Down"

function App() {
  return (
    <div className="container">
      <div className="barra_lado"><Side/></div>
      <div className="parte_arriba"><Up/></div>
      <div className="caja_actividad"><Actividad/></div>
      <div className="parte_abajo"><Down/></div>
    </div>
  );
}

export default App;


export default App;
