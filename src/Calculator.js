import React, { useState } from "react";
import classes from "./Calculator.css";
import Shell from "./Components/Shell/Shell";
import ControlPanel from "./Components/ControlPanel/ControlPanel";
import Screen from "./Components/Screen/Screen";
import { calculate } from "./functions";

const Calculator = props => {
  const [screen, setScreen] = useState("");
  const setCalculatorScreen = character => {
    setScreen(prevState => prevState + character);
  };

  const clearScreen = () => setScreen("");

  return (
    <div className={classes.App}>
      <Shell>
        <Screen screen={screen} />
        <ControlPanel
          setCalculatorScreen={setCalculatorScreen}
          clearScreen={clearScreen}
          calculate={() => setScreen(calculate(screen))}
        />
      </Shell>
    </div>
  );
};

export default Calculator;
