import React from 'react';


import { 
  DivColumnStyle,
  DivRowStyle,
  ButtonStyle,
  InputStyle,
  ImageStyle,
  GlobalPageStyle,
} from './style';

function CadastroPage(props) {
  return (
    <>
      <GlobalPageStyle />
      <DivColumnStyle>
        <ImageStyle src={require('../../assets/Logo.svg')} />
        <DivRowStyle>
          <ButtonStyle noBorderRadius disable onClick={e=> props.history.push('/')}>Entrar</ButtonStyle>
          <ButtonStyle noBorderRadius onClick={e=> props.history.push('/cadastrar')}>Cadastrar</ButtonStyle>
        </DivRowStyle>
        <InputStyle type="email" placeholder="Digite seu e-mail..."/>
        <InputStyle type="cellphone" placeholder="Digite seu celular..."/>
        <InputStyle type="password" placeholder="Digite sua senha..."/>
        <InputStyle type="password" placeholder="Confirme sua senha..."/>
        <ButtonStyle>Cadastrar</ButtonStyle>
      </DivColumnStyle>
    </>
  )
}

export default CadastroPage;