import { useState, useEffect } from "react";
import { RepositoryProps } from "../types/repository";
import { useParams } from "react-router-dom";

import classes from "../components/css/ItemRepositorio.module.css";

import ItemRepositorio from "../components/ItemRepositorio";
import Carregando from "../components/Carregando";

const Repositorios = () => {
  const { name } = useParams();
  const [carregando, setCarregando] = useState(false);
  const [repositories, setRepositories] = useState<RepositoryProps[] | null>(
    null
  );

  const loadUser = async (userName: string) => {
    setCarregando(true);
    setRepositories(null);

    try {
      const res = await fetch(`https://api.github.com/users/${userName}/repos`);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await res.json();

      if (Array.isArray(data)) {
        const reposData: RepositoryProps[] = data.map(
          (repo: RepositoryProps) => ({
            name: repo.name,
            language: repo.language || "",
            forks_count: repo.forks_count,
            stargazers_count: repo.stargazers_count,
            html_url: repo.html_url,
          })
        );

        setRepositories(reposData);
      }
    } catch (error) {
      console.error(error);
    }
    setCarregando(false);
  };

  useEffect(() => {
    if (name === undefined) {
      return;
    }

    void loadUser(name);
  }, []);

  return (
    <>
      <div className={classes.containerPaginaRepositorios}>
        <h3 className={classes.tituloPagina}>Veja os repositórios de {name}</h3>
        <div className={classes.containerRepositorios}>
          <div className={classes.containerButtonVoltar}>
            <a href="/">Voltar</a>
          </div>
          {carregando && <Carregando />}
          {repositories &&
            repositories.map((repository) => (
              <ItemRepositorio key={repository.name} {...repository} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Repositorios;
