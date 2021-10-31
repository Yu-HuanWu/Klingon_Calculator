import React from "react";

class Calculator extends React.Component {
  // Your code here
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      display: '',
      selectedop: '+',
      error: ''
    }

    this.updatenum1 = this.updatenum1.bind(this);
    this.updatenum2 = this.updatenum2.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.clear = this.clear.bind(this);
    this.answer = this.answer.bind(this);
    this.translate= this.translate.bind(this);
  }

  updatenum1(e){
    this.setState({
      num1: e.target.value
    })
  }

  updatenum2(e) {
    this.setState({
      num2: e.target.value
    })
  }

  handleAdd(num1, num2) {
    // e.preventDefault();
    this.setState({selectedop: '+'})
  }

  handleDelete(e){
    e.preventDefault();
    this.setState({selectedop: '-' })
  }

  handleDivide(e) {
    e.preventDefault();
    this.setState({selectedop: '/' })
  }

  handleTime(e) {
    e.preventDefault();
    this.setState({selectedop: 'x' })
  }

  clear(e) {
    e.preventDefault();
    this.setState({
      num1: '',
      num2: '',
      display: '',
      selectedop: '+',
      error: ''
    })
  }

  answer(e){
    e.preventDefault();
    if (this.state.num1 === '' || this.state.num2 === '') {
      this.setState({
        error: <img src="KlingonError.svg" alt="error" />
      })
    }
    if (this.state.selectedop==='+') {
      this.setState({
        display: (parseInt(this.state.num1) + parseInt(this.state.num2))
      })
    } else if (this.state.selectedop === '-') {
      this.setState({
        display: (parseInt(this.state.num1) - parseInt(this.state.num2))
      })
    } else if (this.state.selectedop === '/' && this.state.num2 === '0') {
      this.setState({
        display: "error"
      })
    } else if (this.state.selectedop === '/') {
      this.setState({
        display: (parseInt(this.state.num1) / parseInt(this.state.num2))
      })
    } else if (this.state.selectedop === 'x') {
      this.setState({
        display: (parseInt(this.state.num1) * parseInt(this.state.num2))
      })
    }
  }

  translate(num){
    if (num=== "error") {
      return (
        <img src="KlingonError.svg" alt="error" />
      )
    }
    let translated=[];
    num.toString().split('').forEach(str => {
      if (str=== '1') {
        translated.push(<img src="Klingon1.svg" alt="1" />)
      } else if (str=== '2') {
        translated.push(<img src="Klingon2.svg" alt="2" />)
      } else if (str === '3') {
        translated.push(<img src="Klingon3.svg" alt="3" />)
      } else if (str === '4') {
        translated.push(<img src="Klingon4.svg" alt="4" />)
      } else if (str === '5') {
        translated.push(<img src="Klingon5.svg" alt="5" />)
      } else if (str === '6') {
        translated.push(<img src="Klingon6.svg" alt="6" />)
      } else if (str === '7') {
        translated.push(<img src="Klingon7.svg" alt="7" />)
      } else if (str === '8') {
        translated.push(<img src="Klingon8.svg" alt="8" />)
      } else if (str === '9') {
        translated.push(<img src="Klingon9.svg" alt="9" />)
      } else if (str === '0') {
        translated.push(<img src="Klingon0.svg" alt="0" />)
      } else if (str === '-') {
        translated.push(<img src="KlingonNegative.svg" alt="negative" />)
      } else if (str === '.') {
        translated.push(<img src="KlingonDecimal.svg" alt="decimal" />)
      }
    })
    return translated;
  }

  render() {

    return (
    <div className="calculator">
    <div data-testid="name">Calculator</div>

    <div data-testid="display" className="display">{this.translate(this.state.display)}</div>

    <div className="number-inputs">
    <input data-testid="num1" id="num1" type="number" onChange={this.updatenum1}></input>
    <div data-testid="selected-operation">{this.state.selectedop}</div>
    <input data-testid="num2" id="num2" type="number" onChange={this.updatenum2}></input>
    </div>

    <div className="operation-selectors">
    <button data-testid="add" onClick={this.handleAdd}>+</button>
    <button data-testid="sub" onClick={this.handleDelete}>-</button>
    <button data-testid="mul" onClick={this.handleTime}>x</button>
    <button data-testid="div" onClick={this.handleDivide}>/</button>
    </div>

    <div className="options">
    <button data-testid="clear" className="clear" onClick={this.clear}>
    Clear
    </button>
    <button data-testid="calc" onClick={this.answer}>Calculate</button>
    </div>

    <div data-testid="error" id="error" className="error">{this.state.error}</div>
    </div>
    );
  }
}

export default Calculator;