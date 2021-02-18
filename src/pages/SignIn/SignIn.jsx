import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";
import Input from "~/components/Input/Input";

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <Input label="Seu e-mail" value="" />
        <Input label="Senha" type="password" value="" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
