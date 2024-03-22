import { render, screen } from "@testing-library/react";
import ProdutoCadastrar from "./componentes/ProdutoCadastrar";

test("verifica a renderizacao do componente na pagina", () => {
  render(<ProdutoCadastrar />);
  const linkElement = screen.getByText(/cadastrar produto/i);
  expect(linkElement).toBeInTheDocument();
});
