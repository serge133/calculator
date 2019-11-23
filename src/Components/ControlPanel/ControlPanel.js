import React from "react";
import classes from "./ControlPanel.css";
import PropTypes from "prop-types";

const ControlPanel = props => {
  return (
    <div className={classes.Buttons}>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(7)}
      >
        7
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(8)}
      >
        8
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(9)}
      >
        9
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(" / ")}
      >
        /
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(4)}
      >
        4
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(5)}
      >
        5
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(6)}
      >
        6
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(" x ")}
      >
        x
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(1)}
      >
        1
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(2)}
      >
        2
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(3)}
      >
        3
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(" + ")}
      >
        +
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(0)}
      >
        0
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen("00")}
      >
        00
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(".")}
      >
        .
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(" - ")}
      >
        -
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen(" % ")}
      >
        %
      </button>
      <button className={classes.Button} onClick={props.clearScreen}>
        C
      </button>
      <button
        className={classes.Button}
        onClick={() => props.setCalculatorScreen("M")}
      >
        M
      </button>
      <button className={classes.Button} onClick={props.calculate}>
        =
      </button>
    </div>
  );
};

ControlPanel.propTypes = {
  setCalculatorScreen: PropTypes.func.isRequired,
  clearScreen: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired
};

export default ControlPanel;
