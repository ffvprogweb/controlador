import { useState } from "react";
import "./styles.css";
function ControladorTemperatura() {
  const valorInicial = 0;
  const [temperatura, setTemperatura] = useState(valorInicial);
  const aumentaTemperatura = () => {
    setTemperatura((prev) => prev + 1);
  };
  function diminuiTemperatura() {
    setTemperatura((prev) => prev - 1);
  }
  const restart = () => {
    setTemperatura(valorInicial);
  };
  return (
    <div>
      <h3 className="titulo"> Controlador de Temperatura </h3>
      {/* define um rotulo para identificar a variavel que deve ser validada */}
      <p data-testid="temperatura"> {temperatura}</p>
      <div>
        <button id="aumenta" className="button" onClick={aumentaTemperatura}>
          Incremento
        </button>
        <button id="diminui" className="button" onClick={diminuiTemperatura}>
          Decremento
        </button>
        <button id="restart" className="button" onClick={restart}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default ControladorTemperatura;
