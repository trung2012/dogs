import React from 'react';
import Dog from './Dog';
import NavBar from './NavBar';
import './Home.css';

class Home extends React.Component {

	renderDogList = () => {
    return this.props.dogs.map(dog => {
      return (
      	<div onClick={() => this.props.history.push(`/dogs/${dog.name}`)} className="single-dog" >
	      	<Dog       	
	      	key={dog.name} 
	      	dog={dog}/>
      	</div>)
    })
  }

	render() {
		console.log(this.props)
		return (
			<div>
	      <NavBar dogs={this.props.dogs}/>
	      <div className="Home-doglist">
	      	{this.renderDogList()}
	      </div>
      </div>
		);
	}
}

export default Home;