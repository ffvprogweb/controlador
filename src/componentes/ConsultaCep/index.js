import React, { useState } from "react";

function ConsultaCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setError] = useState(null);
  function handleCep(e) {
    setCep(e.target.value);
  }

  function buscarEndereco() {
    setError(null); //limpa a interface na proxima busca
    setEndereco(null);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.erro) {
          setError("CEP não encontrado");
        } else {
          setEndereco(data);
        }
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
      });
  }

  return (
    <div>
      <h3>Consulta CEP</h3>
      <label htmlFor="cep">CEP:</label>
      <input type="text" id="cep" value={cep} onChange={handleCep} />
      <button onClick={() => buscarEndereco()}>Buscar</button>
      {endereco && <p>Endereço: {endereco.logradouro}</p>}
      {erro && <div>{`Erro na pesquisa do CEP - ${erro}`}</div>}
    </div>
  );
}
export default ConsultaCep;
