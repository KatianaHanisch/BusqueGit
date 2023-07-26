/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

import classes from "./css/Busca.module.css";

type BuscaProps = {
  loadUser: (userName: string) => Promise<void>;
};

function Busca({ loadUser }: BuscaProps) {
  const [userName, setUserName] = useState("");

  const handlekeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      void loadUser(userName);
    }
  };

  return (
    <div className={classes.containerBusca}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>

      <div className={classes.containerInput}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handlekeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Busca;
