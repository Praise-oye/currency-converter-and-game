import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import './App.css';
import Win from './Component/Win';
import Currency from './Component/Currency';

// class creates the options component

class Options extends Component {

    // setValue method is called as a prop of the element to set state in the parent element
    // selected option determines what is displayed on the page
   // render the select element with the options as defined
    // event handling is passed in as props to enable state lifting 

    render() {
      
        return (
            <div>
                <select onChange={this.props.setValue} >
                    <option value="Currency" key={0} index={0}  default>Currency converter </ option>
                    <option value="Win" key={1} index={1} >Win! </ option>
                </select>

            </div>
            );
    }
}

// class returns an imported component depending on the user selection
class SelectedComponent extends Component {   
    render() {        
        if (this.props.value === "Currency") {
            
            return <Currency />;
        } else if (this.props.value === "Win") {
          
            return <Win quit={this.props.quit} />;
        } else return (<div> <h2> Select an option. </h2> </div>);
    }
}

// main App component class to be rendered in the Index.HTML file

class App extends Component
{
    // set initial state 
    constructor(props) {
        super(props);

        this.state = ({
            selectedElement: "",
            refreshKey: "initial"
        });

        // bind event handling
        this.setValue = this.setValue.bind(this);
        this.quit = this.quit.bind(this);
    }

    quit() {
        console.log("Quit methid running");
        this.setState({
            selectedElement: "quit",
        });
    }

    // method sets the state of the selectedElement  based on user selection in the Options component
    setValue(event) {
              
        this.setState({
            selectedElement : event.target.value,
        });
        
    }
    // render components  pass in event handling and props 
    render() {
  return (
      <div key={this.state.refreshKey} className="App">

          <Options setValue={this.setValue} />
         
          <SelectedComponent quit={this.quit} value={this.state.selectedElement} />
            
      </div>
      
  );
    }
}

export default App;