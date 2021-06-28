import { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends Component {
  render() {
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={this.props.value}
          onChange={this.props.handleChange}
          name={this.props.scale}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
