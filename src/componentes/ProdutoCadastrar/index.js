import axios from "axios";
import { useState } from "react";
import "./styles.css";

function ProdutoCadastrar() {
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidadeNoEstoque, setQuantidadeNoEstoque] = useState("");
  const [custo, setCusto] = useState("");
  //mensagens de aviso enviadas na interface
  const [erro, setErro] = useState(null);
  const [confirmado, setConfirmado] = useState("");

  // Função que implementa o comportamento esperado no momento do envio do formulário
  async function handleSubmit(e) {
    e.preventDefault(); // Prevenir o comportamento padrão de recarregar a página
    setErro("");
    setConfirmado("");
    try {
      // Criando o objeto JSON com os dados do formulário
      const data = {
        descricao: descricao,
        categoria: categoria,
        quantidadeNoEstoque: quantidadeNoEstoque,
        custo: custo,
      };
      // Enviando o POST para o endpoint utilizando Axios
      await axios
        .post("http://localhost:8080/api/v1/produtos", data)
        .then((response) => {
          if (response.status === 201) {
            setConfirmado("Produto cadastrado ");
            //console.log("Resposta do servidor:", response.data);
          }
        });
    } catch (error) {
      // Registra o erro para apresentar na console
      setErro(error);
      //console.error("Erro ao enviar POST:", error);
    }
  }
  return (
    <div>
      <h3>Cadastrar Produto</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Descrição:
          <p>
            <input
              size="50"
              className="Borda"
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </p>
        </label>
        <label>
          Categoria:
          <p>
            <input
              className="Borda"
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </p>
        </label>
        <label>
          Quantidade no Estoque:
          <p>
            <input
              className="Borda"
              type="number"
              value={quantidadeNoEstoque}
              onChange={(e) => setQuantidadeNoEstoque(e.target.value)}
            />
          </p>
        </label>
        <label>
          Custo:
          <p>
            <input
              className="Borda"
              type="number"
              value={custo}
              onChange={(e) => setCusto(e.target.value)}
            />
          </p>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {erro && <div>{`Erro no cadastro  - ${erro}`}</div>}
      {confirmado && <div>{confirmado}</div>}
      <div></div>
    </div>
  );
}
export default ProdutoCadastrar;
