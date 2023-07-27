import { VscSearchStop } from "react-icons/vsc";

import classes from "./css/Erro.module.css";

const Erro = () => {
  return (
    <div className={classes.containerErro}>
      <VscSearchStop />
      <p>Usuário não encontrado</p>
    </div>
  );
};

export default Erro;
