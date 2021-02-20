import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Form } from "@rocketseat/unform";

import Input from "~/components/Input/Input";

import logo from "~/assets/logo.svg";

export default function SignUp() {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input label="Nome completo" name="fullName" />
        <Input label="Seu e-mail" name="email" />
        <Input label="Senha" type="password" name="password" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
