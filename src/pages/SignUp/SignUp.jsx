import React from "react";
import { Link } from "react-router-dom";
import Input from "~/components/Input/Input";

import logo from "~/assets/logo.svg";

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <Input label="Nome completo" value="" />
        <Input label="Seu e-mail" value="" />
        <Input label="Senha" type="password" value="" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </form>
    </>
  );
}
