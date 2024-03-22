import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ConsultaCep from "./componentes/ConsultaCep";
import "@testing-library/jest-dom";

test("ct01 - verifica a existencia do botao usando getByText", () => {
  //dado que o componente foi instanciado
  render(<ConsultaCep />);
  //quando procuro o elemento html botao
  const btnBuscar = screen.getByText(/buscar/i);
  //entao o botao eh localizado
  expect(btnBuscar).toBeInTheDocument();
});
test("ct02 - verifica a existencia do botao usando getByRole", () => {
  //dado que o componente foi instanciado
  render(<ConsultaCep />);
  //quando eu procuro o elemento html botao
  const btnBuscar = screen.getByRole("button", { name: /buscar/i });
  //entao o botao eh localizado
  expect(btnBuscar).toBeInTheDocument();
});
test("ct03 - valida o comportamento da funcao obtem endereco para um cep valido", async () => {
  //dado que o endereco foi instanciado
  render(<ConsultaCep />);
  //quando digito um cep valido e clico no botao buscar
  const cep = "03694000";
  const btnBuscar = screen.getByRole("button", { name: /buscar/i });
  const inputCep = screen.getByRole("textbox");
  fireEvent.change(inputCep, { target: { value: cep } });
  fireEvent.click(btnBuscar);
  //entao retorna o logradouro
  await waitFor(() => {
    const txtLabel = screen.getByText(/águia de haia/i);
    expect(txtLabel).toBeInTheDocument();
  });
});
test("ct04 - valida o comportamento da funcao obtem endereco para um cep invalido branco", async () => {
  //dado que o componente foi instanciado
  render(<ConsultaCep />);
  //quando o cep eh invalido
  const cep = "";
  const btnBuscar = screen.getByRole("button", { name: /buscar/i });
  const inputCep = screen.getByRole("textbox");
  expect(inputCep).toBeInTheDocument();
  fireEvent.change(inputCep, { target: { value: cep } });
  fireEvent.click(btnBuscar);
  await waitFor(() => {
    const txtLabel = screen.getByText(/erro na pesquisa do cep/i);
    expect(txtLabel).toBeInTheDocument();
  });
});
test("ct05 - valida o comportamento da funcao obtem endereco para um cep nao cadastrado", async () => {
  //dado que o componente foi instanciado
  render(<ConsultaCep />);
  //quando o cep eh invalido
  const cep = "11111111";
  const btnBuscar = screen.getByRole("button", { name: /buscar/i });
  const inputCep = screen.getByRole("textbox");
  expect(inputCep).toBeInTheDocument();
  fireEvent.change(inputCep, { target: { value: cep } });
  fireEvent.click(btnBuscar);
  await waitFor(() => {
    const txtLabel = screen.getByText(/CEP não encontrado/i);
    expect(txtLabel).toBeInTheDocument();
  });
});
