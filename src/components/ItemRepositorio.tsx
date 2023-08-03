import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BiCodeAlt } from "react-icons/bi";

import { RepositoryProps } from "../types/repository";

import classes from "./css/ItemRepositorio.module.css";

const ItemRepositorio = ({
  name,
  language,
  forks_count,
  stargazers_count,
  html_url,
}: RepositoryProps) => {
  return (
    <div className={classes.containerItemRepositorio}>
      <h3>{name}</h3>
      {language === "" ? null : (
        <div className={classes.containerLinguagem}>
          <BiCodeAlt />
          <h5>{language}</h5>
        </div>
      )}

      <div className={classes.containerStatusRepositorio}>
        <div className={classes.containerIcones}>
          <div className={classes.iconeRepositorio}>
            <AiOutlineStar />
          </div>
          <p>{stargazers_count}</p>
        </div>
        <div className={classes.containerIcones}>
          <div className={classes.iconeRepositorio}>
            <AiOutlineFork />
          </div>
          <p>{forks_count}</p>
        </div>
      </div>
      <div className={classes.containerButton}>
        <RiGitRepositoryFill />
        <a target="_blank" href={html_url}>
          Ver código
        </a>
      </div>
    </div>
  );
};

export default ItemRepositorio;
