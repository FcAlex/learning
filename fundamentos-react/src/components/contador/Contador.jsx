import './Contador.css'
import { Component } from "react";
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

export default class Contador extends Component {
    
    state = {
        number: this.props.initial || 0,
        step: this.props.step || 2
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    setStep = (novoPasso) => {
        this.setState({
            step: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <Display number={this.state.number}/>
                <PassoForm passo={this.state.passo} setPasso={this.setStep}/>
                <Botoes incrementar={this.inc} decrementar={this.dec}/>
            </div>
        )
    }
}