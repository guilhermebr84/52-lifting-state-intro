import { Component } from "react";

import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleCelsiusChange = (event) => {
    this.setState({ temperature: event.target.value, scale: "c" });
  };

  handleFahrenheitChange = (event) => {
    this.setState({ temperature: event.target.value, scale: "f" });
  };

  render() {
    const scale = this.state.scale;

    const temperature = this.state.temperature;

    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          value={celsius}
          handleChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          value={fahrenheit}
          handleChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
