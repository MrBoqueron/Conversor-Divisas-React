import euro from "./components/euroToDolar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>CONVERSOR DE DIVISAS</h1>

      <div className="container1">
        <label>Convertir euros a dolares</label>
        <br />
        <label>Euros:</label>
        <input type="text" name="" id="" className="input" />
        <br />
        <label>Dolares:</label>
        <input type="text" name="" id="" className="input" disabled />
        <button className="boton-convertir">Convertir</button>
      </div>
    </div>
  );
}
