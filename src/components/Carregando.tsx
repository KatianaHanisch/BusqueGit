import CircularProgress from "@mui/material/CircularProgress";

import classes from "./css/Carregando.module.css";

const Carregando = () => {
  return (
    <div className={classes.containerCarregando}>
      <CircularProgress color="inherit" size={45} />
    </div>
  );
};

export default Carregando;
