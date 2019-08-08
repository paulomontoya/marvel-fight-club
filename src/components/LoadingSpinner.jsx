import React from "react";
import css from "./LoadingSpinner.module.scss";

const LoadingSpinner = props => (
  <div className={css.LoadingSpinner} style={props.style} />
);

export default LoadingSpinner;
