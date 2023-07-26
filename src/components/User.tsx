import { UserProps } from "../types/user";

import { Link } from "react-router-dom";

import { MdLocationPin } from "react-icons/md";

import classes from "./css/User.module.css";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={classes.containerUser}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.localizacaoUser}>
          <MdLocationPin /> <span>{location}</span>
        </p>
      )}
      <div className={classes.statusUser}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.quantidadeUser}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.quantidadeUser}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
};

export default User;
