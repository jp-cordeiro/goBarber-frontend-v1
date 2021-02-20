import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Form } from "@rocketseat/unform";

import logo from "~/assets/logo.svg";
import Input from "~/components/Input/Input";

export default function SignIn() {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input label="Seu e-mail" name="email" />
        <Input label="Senha" type="password" name="password" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
