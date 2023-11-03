// import components and dependancies

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// class to display the cards in the Game 


class Cards extends Component { 
    constructor(props) {
        super(props);
       // set initial state 
        this.state = ({
            
            cardImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82473/bicycle-card.jpg',
            gameDone: false,            
        });

        // bind event handling
        this.turnCard = this.turnCard.bind(this);
         
    }

    // turncard event 
    turnCard(event)
    {// method checks the gameDone state, if the user has already won or lost the game, the event doesn't do anytghing
        // if the gameDone state is true,  the component generates a random integer between 0 and 2 (3 possible answers)
        // the event then checks if the card the user has selected matches the id property of the calling element
        // if the numbers match, the user is informed that they have won a prize and the winning card is revealed
        // if the element id does not match the random winning number, 
        // the user is told that they have not won, and the non winning card is shown, 
        // in either case the gameDone state is set to true, so that any further user input does not get handled.
        if (!this.state.gameDone)
        {
        let randomNum = Math.floor(Math.random() * 2);

            if (event.target.id == randomNum) {
                this.setState({
                    cardImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82473/bicycle-card.jpg',
                    gameDone: true
                });
                event.target.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82473/q-od.jpg';
                event.target.onClick =  console.log("No Event");

                alert("You have won a Prize ");

            } else {

                this.setState({
                    cardImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82473/bicycle-card.jpg',
                    gameDone: true,
                });
                event.target.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82473/k-os.jpg';
                alert("Better Luck Next Time");
            
                }
        }
    }
   // render the Card images
    // 3 seperate card back images are displayed in a bootstrap grid 
    // with eventhandling and an ID that is used to determine if the user has won the game
render()
    {
        return (
            <div >
                <div > 
                    <h1> Pick a Card</h1>
               <Container>
                        <Row>
                            <Col><Image onClick={this.turnCard} id='0' src={this.state.cardImg} /></Col>
                            <Col><img onClick={this.turnCard} id='1' src={this.state.cardImg} /></Col>
                            <Col><img onClick={this.turnCard} id='2' src={this.state.cardImg} /></Col>
                        </Row>
                        <br/>                      
                    </Container>                  
                    </div>
                </div>
            );
    }
}

// main component of the Win option
class Win extends Component {
    constructor(props) {
        // set initial State 
        super(props);
        this.state = ({
            keyTest: 'test',
            done: false
        });

        // bind event handling
        this.refreshGame = this.refreshGame.bind(this);

    }

    // refresh game method forces the component to refresh generating a new game by setting the key state of the win element to a random number
    refreshGame() {
        this.setState({
            keyTest: Math.random()
        });

    }
    // method renders the Cards component
   // and 2 buttons which either refresh the Win component = - resuling in a new game or displays the home page , depending on which button is clicked
    render() {
        return (
            <div>
                <h1>Win </h1>
                <Cards key={this.state.keyTest} refreshGame={this.refreshGame} />

                <Row>
                    <Col><Button onClick={this.refreshGame} variant="primary"> Restart </Button> </Col>
                    <Col><Button onClick={this.props.quit} variant="primary"> Stop Game </Button> </Col>
                </Row>
            </div>
        );     
    }
}
// export component
export default Win;