import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// component to display converted currency based on props 
class Rand extends Component {

    render() {
        return (
            <div>
                <h1> Rand </h1>
                <h2>R {((this.props.dollarAmt * 10).toFixed(2))}  </h2>
                </div>);
    }
}

// component to display converted currency based on props 
class Pound extends Component {

    render() {
        return (
            <div>
                <h1> Pound </h1>
                <h2>  {((this.props.dollarAmt / 1.2).toFixed(2))}  </h2>
            </div>);
    }
}

// component to display converted currency based on props 
class Euro extends Component {
    render() {
        return (
            <div>
                <h1> Euro </h1>
                <h2>  {((this.props.dollarAmt / 1.4).toFixed(2))}  </h2>
            </div>);
    }
}

// conponent to display input field and display the converted values using state and props
class Currency extends Component {
    constructor(props) {
        super(props);
        // set initisl state
        this.state = ({

            dollar: 0,
          
        });
        // bind event handling
        this.updateDollar = this.updateDollar.bind(this);
    }
    // event handling for the input field
    // checks input to ensure is it a number and sets state accordingly
    // state is also limited to 2 decimal places and converted to numbers
    updateDollar(event)
    {  
        let numbersonly = event.target.value.replace(/\D/, '');
        if (!isNaN(parseFloat(numbersonly))) {    
            this.setState({
                dollar: parseFloat(numbersonly).toFixed(2)
            });
        }             
    }
    // render the input field and the converted currency components
    render() {
        return (
            <div>
                <h1> Currency  Converter</h1>
                <h2> Enter USD Amount </h2>
                <form>
                    <input type="number"  onChange={this.updateDollar}>
                    </input>
                    </form>

                <Rand dollarAmt={this.state.dollar} />

                <Pound dollarAmt={this.state.dollar}/>

                <Euro dollarAmt={this.state.dollar}/>
                             
                </div>);
    }
}

//export component
export default Currency;