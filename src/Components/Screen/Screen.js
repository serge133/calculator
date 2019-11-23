import React from "react";
import classes from "./Screen.css";
import PropTypes from "prop-types";

const Screen = props => {
  return (
    <div className={classes.ScreenContainer}>
      <h1 className={classes.Screen}>{props.screen}</h1>
    </div>
  );
};

Screen.propTypes = {
  screen: PropTypes.string.isRequired
};

export default Screen;
