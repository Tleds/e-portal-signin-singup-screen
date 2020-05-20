import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";

import Entrar from "../pages/EntrarPage";
import Cadastrar from "../pages/CadastroPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Entrar} />
        <Route path="/cadastrar" exact component={Cadastrar} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
