/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UserProps } from "../types/user";

import { useState } from "react";

import Busca from "../components/Busca";
import User from "../components/User";
import Erro from "../components/Erro";
import Carregando from "../components/Carregando";

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [erro, setErro] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const loadUser = async (userName: string) => {
    setCarregando(true);
    setUser(null);
    setErro(false);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 404) {
      setCarregando(false);
      setErro(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
    setCarregando(false);
  };

  return (
    <div>
      <Busca loadUser={loadUser} />
      {carregando && <Carregando />}
      {user && <User {...user} />}
      {erro && <Erro />}
    </div>
  );
}

export default Home;
