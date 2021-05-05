import './Calculator.css'
import { Component } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'

// foi criado dessa forma pois o clerMemory vai restaurar para esse estado
const initialState = { 
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = {...initialState}

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {

    }

    addDigit(digit) {
        if(digit === '.' && this.state.displayValue.includes('.')) return

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digit
        this.setState({displayValue, clearDisplay: false})

        if(digit !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }
    }

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={() => this.clearMemory} triple/>
                <Button label="/" click={setOperation} operation/>
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" click={setOperation} operation/>
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" click={setOperation} operation/>
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" click={setOperation} operation/>
                <Button label="0" click={addDigit} double/>
                <Button label="." click={addDigit}/>
                <Button label="=" click={setOperation} operation/>
            </div>
        )
    }
}