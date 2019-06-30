import React from 'react';
import NavBar from './NavBar';
import './DogInfo.css';
import { Link } from 'react-router-dom';

class DogInfo extends React.Component {
	render() {
		const { dog } = this.props;
		
		return (
			<div className="container">
				<div className="DogInfo">
					<img className="dog-profile-img" src={dog.src} alt={dog.name}/>
					<h2>{dog.name}</h2>
					<h3>{dog.age} years old</h3>
					{dog.facts.map(fact => <p>{fact}</p>)}
					<Link className="back" to='/dogs'>Go Back</Link>
				</div>
			</div>
		);
	}
}

export default DogInfo;