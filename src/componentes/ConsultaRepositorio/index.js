import React, { useEffect, useState } from "react";
import axios from "axios";
function Repositorios() {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/mdn/repos")
      .then((response) => response.json())
      .then((data) => setRepositorios(data));
  }, []);

  return (
    <>
      <h3>Repositórios Git</h3>
      <ul>
        {repositorios.map((repo) => (
          <li key={repo.id} style={{ textAlign: "left" }}>
            {repo.name}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Repositorios;
