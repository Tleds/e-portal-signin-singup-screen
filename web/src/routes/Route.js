import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

export default function Router({ component: Component, ...props }) {
  return <Route {...props} component={Component} />;
}
Router.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
