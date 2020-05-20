import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as yup from "yup";
import PropTypes from "prop-types";

import {
  DivColumnStyle,
  DivRowStyle,
  ButtonStyle,
  ImageStyle,
  GlobalPageStyle,
} from "./style";
import Logo from "../../assets/Logo.svg";

export default function EntrarPage({ history, ...props }) {
  const handleSubmit = (data) => {
    console.log(data);
  };
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido")
      .required("O campo de E-mail é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha precisa ter pelo menos 6 caracteres")
      .max(16, "A senha não pode ultrapassar 16 caracteres")
      .required("O campo de senha é obrigatório"),
  });
  return (
    <>
      <GlobalPageStyle />
      <DivColumnStyle>
        <ImageStyle src={Logo} />
        <DivRowStyle>
          <ButtonStyle noBorderRadius onClick={() => props.history.push("/")}>
            Entrar
          </ButtonStyle>
          <ButtonStyle
            noBorderRadius
            disable
            onClick={() => props.history.push("/cadastrar")}
          >
            Cadastrar
          </ButtonStyle>
        </DivRowStyle>
        <Form onSubmit={handleSubmit} schema={schema}>
          <Input name="email" type="email" placeholder="Digite seu e-mail..." />
          <Input
            maxlength="16"
            name="password"
            type="password"
            placeholder="Digite sua senha..."
          />
          <ButtonStyle type="submit">Entrar</ButtonStyle>
        </Form>
      </DivColumnStyle>
    </>
  );
}

EntrarPage.propTypes = {
  history: PropTypes.shape(),
};
EntrarPage.defaultProps = {
  history: {},
};
