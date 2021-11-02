import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      display: '',
      selectedop: '+',
      error: ''
    }

    console.log('qaqIHneS!')

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
    let temp = [this.state.num1];
    temp.push(e.currentTarget.value)
    this.setState({
      num1: temp.join('')
    })
  }

  updatenum2(e) {
    let temp = [this.state.num2];
    temp.push(e.currentTarget.value)
    this.setState({
      num2: temp.join('')
    })
  }

  handleAdd(e) {
    e.preventDefault();
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
        display: (parseFloat(this.state.num1) + parseFloat(this.state.num2))
      })
    } else if (this.state.selectedop === '-') {
      this.setState({
        display: (parseFloat(this.state.num1) - parseFloat(this.state.num2))
      })
    } else if (this.state.selectedop === '/' && this.state.num2 === '0') {
      this.setState({
        display: "error"
      })
    } else if (this.state.selectedop === '/') {
      this.setState({
        display: (parseFloat(this.state.num1) / parseFloat(this.state.num2))
      })
    } else if (this.state.selectedop === 'x') {
      this.setState({
        display: (parseFloat(this.state.num1) * parseFloat(this.state.num2))
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
    num.toString().split('').forEach((str, i) => {
      if (str=== '1') {
        translated.push(<img key={`${str}.${i}`} src="Klingon1.svg" alt="1" />)
      } else if (str=== '2') {
        translated.push(<img key={`${str}.${i}`} src="Klingon2.svg" alt="2" />)
      } else if (str === '3') {
        translated.push(<img key={`${str}.${i}`} src="Klingon3.svg" alt="3" />)
      } else if (str === '4') {
        translated.push(<img key={`${str}.${i}`} src="Klingon4.svg" alt="4" />)
      } else if (str === '5') {
        translated.push(<img key={`${str}.${i}`} src="Klingon5.svg" alt="5" />)
      } else if (str === '6') {
        translated.push(<img key={`${str}.${i}`} src="Klingon6.svg" alt="6" />)
      } else if (str === '7') {
        translated.push(<img key={`${str}.${i}`} src="Klingon7.svg" alt="7" />)
      } else if (str === '8') {
        translated.push(<img key={`${str}.${i}`} src="Klingon8.svg" alt="8" />)
      } else if (str === '9') {
        translated.push(<img key={`${str}.${i}`} src="Klingon9.svg" alt="9" />)
      } else if (str === '0') {
        translated.push(<img key={`${str}.${i}`} src="Klingon0.svg" alt="0" />)
      } else if (str === '-') {
        translated.push(<img key={`${str}.${i}`} src="KlingonNegative.svg" alt="negative" />)
      } else if (str === '.') {
        translated.push(<img key={`${str}.${i}`} src="KlingonDecimal.svg" alt="decimal" />)
      }
    })
    return translated;
  }

  render() {
    return (
    <div className="main">
      <div className="keyboard-container">First Number
        <div className="keyboard">
          <button key="11" value={1} onClick={this.updatenum1}>{this.translate('1')}</button>
          <button key="12" value={2} onClick={this.updatenum1}>{this.translate('2')}</button>
          <button key="13" value={3} onClick={this.updatenum1}>{this.translate('3')}</button>
          <button key="14" value={4} onClick={this.updatenum1}>{this.translate('4')}</button>
          <button key="15" value={5} onClick={this.updatenum1}>{this.translate('5')}</button>
          <button key="16" value={6} onClick={this.updatenum1}>{this.translate('6')}</button>
          <button key="17" value={7} onClick={this.updatenum1}>{this.translate('7')}</button>
          <button key="18" value={8} onClick={this.updatenum1}>{this.translate('8')}</button>
          <button key="19" value={9} onClick={this.updatenum1}>{this.translate('9')}</button>
          <button key="1-" value={'-'} onClick={this.updatenum1} className="negative">{this.translate('-')}</button>
          <button key="10" value={0} onClick={this.updatenum1}>{this.translate('0')}</button>
          <button key="1." value={'.'} onClick={this.updatenum1}>{this.translate('.')}</button>
        </div>
      </div>
      <div className="calculator">
      <div data-testid="name">Klingon Calculator</div>

      <div data-testid="display" className="display">{this.translate(this.state.display)}</div>
      
      <div className="number-inputs">
      <div data-testid="display" className="display-num">{this.state.num1.length === 0 ? <p>First Number</p> : this.translate(this.state.num1)}</div>
      <div className="selected-operation">{this.state.selectedop}</div>
      <div data-testid="display" className="display-num">{this.state.num2.length === 0 ? <p>Second Number</p> : this.translate(this.state.num2)}</div>
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
      <button data-testid="calc" onClick={this.answer} className="calculate">Calculate</button>
      </div>

      <div data-testid="error" id="error" className="error">{this.state.error}</div>
      </div>
      <div className="keyboard-container">Second Number
        <div className="keyboard">
          <button key="21" value={1} onClick={this.updatenum2}>{this.translate('1')}</button>
          <button key="22" value={2} onClick={this.updatenum2}>{this.translate('2')}</button>
          <button key="23" value={3} onClick={this.updatenum2}>{this.translate('3')}</button>
          <button key="24" value={4} onClick={this.updatenum2}>{this.translate('4')}</button>
          <button key="25" value={5} onClick={this.updatenum2}>{this.translate('5')}</button>
          <button key="26" value={6} onClick={this.updatenum2}>{this.translate('6')}</button>
          <button key="27" value={7} onClick={this.updatenum2}>{this.translate('7')}</button>
          <button key="28" value={8} onClick={this.updatenum2}>{this.translate('8')}</button>
          <button key="29" value={9} onClick={this.updatenum2}>{this.translate('9')}</button>
          <button key="2-" value={'-'} onClick={this.updatenum2} className="negative">{this.translate('-')}</button>
          <button key="20" value={0} onClick={this.updatenum2}>{this.translate('0')}</button>
          <button key="2." value={'.'} onClick={this.updatenum2}>{this.translate('.')}</button>
        </div>
      </div>
    </div>
    );
  }
}

//Because index.html is located in public, and github page cannot read /public, 
//remember to look at package.json and do npm run deploy

export default Calculator;