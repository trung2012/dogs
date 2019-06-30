import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'; 
import Dog from './Dog';
import Home from './Home';
import DogInfo from './DogInfo';

import './DogList.css';
import bunny from './bunny.jpg';
import su from './su.jpg';
import lou from './lou.jpg';
import hazel from './hazel.jpg';
import tubby from './tubby.jpg';
import whiskey from './whiskey.jpg';


class DogList extends React.Component {
    static defaultProps = {
      dogs: [
        {
          name: "Whiskey",
          age: 5,
          src: whiskey,
          facts: [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
          ]
        },
        {
          name: "Hazel",
          age: 3,
          src: hazel,
          facts: [
            "Hazel has soooo much energy!",
            "Hazel is highly intelligent.",
            "Hazel loves people more than dogs."
          ]
        },
        {
          name: "Tubby",
          age: 4,
          src: tubby,
          facts: [
            "Tubby is not the brightest dog",
            "Tubby does not like walks or exercise.",
            "Tubby loves eating food."
          ]
        },
        {
          name: "Su",
          age: 2,
          src: su,
          facts: [
            "Su is a super cute dog",
            "Su is always looking for food",
            "Su loves playing with balls"
          ]
        },
        {
          name: "Lou",
          age: 3,
          src: lou,
          facts: [
            "Lou loves cats",
            "Lou is very picky about food",
            "Lou poops in the house"
          ]
        }
      ]
    }

  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.filter(dog => dog.name.toLowerCase() === name.toLowerCase())[0]
      return <DogInfo dog={currentDog} {...props}/>
    } 

    return ( 
    <div className="DogList">
      <Switch>
        <Route exact path='/dogs' render={routeProps => <Home dogs={this.props.dogs} {...routeProps}/>}/>
        <Route exact path='/dogs/:name' render={getDog}/> 
        <Redirect to='/dogs'/>     
      </Switch>
    </div>
    );
  
  }
}

export default DogList;