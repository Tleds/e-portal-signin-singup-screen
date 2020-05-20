import React from "react";
import PropTypes from "prop-types";

import {
  DivColumnStyle,
  DivRowStyle,
  ButtonStyle,
  InputStyle,
  ImageStyle,
  GlobalPageStyle,
} from "./style";
import Logo from "../../assets/Logo.svg";

export default function CadastroPage(props) {
  return (
    <>
      <GlobalPageStyle />
      <DivColumnStyle>
        <ImageStyle src={Logo} />
        <DivRowStyle>
          <ButtonStyle
            noBorderRadius
            disable
            onClick={() => props.history.push("/")}
          >
            Entrar
          </ButtonStyle>
          <ButtonStyle
            noBorderRadius
            onClick={() => props.history.push("/cadastrar")}
          >
            Cadastrar
          </ButtonStyle>
        </DivRowStyle>
        <InputStyle type="email" placeholder="Digite seu e-mail..." />
        <InputStyle type="cellphone" placeholder="Digite seu celular..." />
        <InputStyle type="password" placeholder="Digite sua senha..." />
        <InputStyle type="password" placeholder="Confirme sua senha..." />
        <ButtonStyle>Cadastrar</ButtonStyle>
      </DivColumnStyle>
    </>
  );
}

CadastroPage.propTypes = {
  history: PropTypes.shape(),
};
CadastroPage.defaultProps = {
  history: {},
};
