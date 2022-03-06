import React, { Component } from "react";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: "",
    sinal: ""
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  divide = () => {
    const { n1, n2 } = this.state;
    if (this.state.n2 !== 0) {
      this.setState({
        res: n1 / n2,
        sinal: "/"
      });
    }
  };
  soma = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 + n2,
        sinal: "+"
      });
    }
  };
  subtrai = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 - n2,
        sinal: "-"
      });
    }
  };
  multiplica = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 * n2,
        sinal: "*"
      });
    }
  };
  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      res: "",
      sinal: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Calculadora de Operações básicas</h1>
        <input onChange={this.handleChange1} type="number" />
        <input onChange={this.handleChange2} type="number" />
        <button onClick={this.divide}>/</button>
        <button onClick={this.multiplica}>*</button>
        <button onClick={this.subtrai}>-</button>
        <button onClick={this.soma}>+</button>
        <button OnClick={this.clear}>c</button>
        <h2>{this.state.res}</h2>
      </div>
    );
  }
}

export default App;
