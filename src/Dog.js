import React from 'react';
import './Dog.css';

class Dog extends React.Component {
	render() {
		const {dog} = this.props;
		return (
		<div className="Dog">
			<img className="dog-img" alt={dog.name} src={dog.src}/>
			<p>{dog.name}</p>
		</div>
		);	
	}
}

export default Dog;